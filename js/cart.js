// レシピカートページの機能

// レシピカートを表示
function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartCount = document.getElementById('cartCount');
    const clearAllBtn = document.getElementById('clearAllBtn');
    
    const favorites = getFavorites();
    const favoriteKeys = Object.keys(favorites);
    
    if (favoriteKeys.length === 0) {
        // お気に入りが空の場合
        cartItems.style.display = 'none';
        emptyCart.style.display = 'block';
        clearAllBtn.style.display = 'none';
        cartCount.textContent = '保存されているレシピ: 0件';
    } else {
        // お気に入りがある場合
        cartItems.style.display = 'grid';
        emptyCart.style.display = 'none';
        clearAllBtn.style.display = 'block';
        cartCount.textContent = `保存されているレシピ: ${favoriteKeys.length}件`;
        
        // カート内容をクリア
        cartItems.innerHTML = '';
        
        // お気に入りを新しい順に並べ替え
        const sortedFavorites = favoriteKeys
            .map(key => favorites[key])
            .sort((a, b) => b.timestamp - a.timestamp);
        
        // 各お気に入りレシピを表示
        sortedFavorites.forEach(favorite => {
            const cartItem = createCartItem(favorite);
            cartItems.appendChild(cartItem);
        });
    }
    
    // お気に入り数を更新
    updateFavoriteCount();
}

// カートアイテムの要素を作成
function createCartItem(favorite) {
    const div = document.createElement('div');
    div.className = 'cart-item';
    
    // 日付をフォーマット
    const date = new Date(favorite.timestamp);
    const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}`;
    
    div.innerHTML = `
        <img src="${favorite.image}" alt="${favorite.name}">
        <div class="cart-item-info">
            <h3>${favorite.name}</h3>
            <div class="cart-item-date">
                <i class="fa-regular fa-calendar"></i>
                追加日: ${formattedDate}
            </div>
            <div class="cart-item-actions">
                <button class="view-recipe-btn" data-recipe="${getRecipeKey(favorite.name)}">
                    <i class="fa-solid fa-book-open"></i> レシピを見る
                </button>
                <button class="remove-btn" data-name="${favorite.name}">
                    <i class="fa-solid fa-trash"></i> 削除
                </button>
            </div>
        </div>
    `;
    
    return div;
}

// レシピ名からキーを取得
function getRecipeKey(name) {
    const recipeMap = {
        'お好み焼き': 'okonomiyaki',
        'たこ焼き': 'takoyaki',
        '牛丼': 'gyudon',
        'とんかつ': 'tonkatsu',
        'カレーライス': 'curry',
        '焼き鳥': 'yakitori'
    };
    return recipeMap[name] || '';
}

// 削除確認ダイアログ
function showDeleteConfirmation(name, callback) {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <div class="confirm-icon">
                <i class="fa-solid fa-exclamation-triangle"></i>
            </div>
            <h3>削除の確認</h3>
            <p>「${name}」をお気に入りから削除しますか？</p>
            <div class="confirm-buttons">
                <button class="confirm-cancel">キャンセル</button>
                <button class="confirm-delete">削除する</button>
            </div>
        </div>
    `;
    
    // スタイル追加
    const style = document.createElement('style');
    style.textContent = `
        .confirm-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.6);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .confirm-dialog {
            background: white;
            padding: 30px;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            text-align: center;
            animation: scaleIn 0.3s ease;
        }
        @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .confirm-icon {
            font-size: 3rem;
            color: #e67e22;
            margin-bottom: 15px;
        }
        .confirm-dialog h3 {
            color: #333;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        .confirm-dialog p {
            color: #666;
            margin-bottom: 25px;
            line-height: 1.5;
        }
        .confirm-buttons {
            display: flex;
            gap: 10px;
        }
        .confirm-cancel, .confirm-delete {
            flex: 1;
            padding: 12px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        .confirm-cancel {
            background: #95a5a6;
            color: white;
        }
        .confirm-cancel:hover {
            background: #7f8c8d;
        }
        .confirm-delete {
            background: #e74c3c;
            color: white;
        }
        .confirm-delete:hover {
            background: #c0392b;
        }
    `;
    
    if (!document.querySelector('style[data-confirm]')) {
        style.setAttribute('data-confirm', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(overlay);
    
    // イベントリスナー
    overlay.querySelector('.confirm-cancel').onclick = () => {
        overlay.remove();
    };
    
    overlay.querySelector('.confirm-delete').onclick = () => {
        overlay.remove();
        callback();
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    };
}

// すべて削除の確認
function confirmClearAll() {
    const overlay = document.createElement('div');
    overlay.className = 'confirm-overlay';
    overlay.innerHTML = `
        <div class="confirm-dialog">
            <div class="confirm-icon">
                <i class="fa-solid fa-exclamation-circle"></i>
            </div>
            <h3>すべて削除の確認</h3>
            <p>お気に入りのレシピをすべて削除しますか？<br>この操作は取り消せません。</p>
            <div class="confirm-buttons">
                <button class="confirm-cancel">キャンセル</button>
                <button class="confirm-delete">すべて削除</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.confirm-cancel').onclick = () => {
        overlay.remove();
    };
    
    overlay.querySelector('.confirm-delete').onclick = () => {
        // すべてのお気に入りを削除
        const favorites = getFavorites();
        Object.keys(favorites).forEach(key => {
            localStorage.removeItem(key);
        });
        overlay.remove();
        displayCart();
        showNotification('すべてのお気に入りを削除しました', 'info');
    };
    
    overlay.onclick = (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    };
}

// イベントリスナーの設定
function setupCartEventListeners() {
    // レシピを見るボタン
    document.addEventListener('click', (e) => {
        if (e.target.closest('.view-recipe-btn')) {
            const btn = e.target.closest('.view-recipe-btn');
            const recipeKey = btn.getAttribute('data-recipe');
            if (recipeKey && typeof showRecipeModal === 'function') {
                showRecipeModal(recipeKey);
            }
        }
    });
    
    // 削除ボタン
    document.addEventListener('click', (e) => {
        if (e.target.closest('.remove-btn')) {
            const btn = e.target.closest('.remove-btn');
            const name = btn.getAttribute('data-name');
            showDeleteConfirmation(name, () => {
                removeFromFavorites(name);
                displayCart();
            });
        }
    });
    
    // すべて削除ボタン
    const clearAllBtn = document.getElementById('clearAllBtn');
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', confirmClearAll);
    }
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    // カートページかどうかを確認
    if (document.getElementById('cartItems')) {
        displayCart();
        setupCartEventListeners();
    }
});