// お気に入り機能管理

// お気に入りを取得
function getFavorites() {
    const favorites = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('favorite_')) {
            const value = localStorage.getItem(key);
            favorites[key] = JSON.parse(value);
        }
    }
    return favorites;
}

// お気に入りに追加
function addToFavorites(name, img) {
    const favorite = {
        name: name,
        image: img,
        timestamp: new Date().getTime()
    };
    localStorage.setItem('favorite_' + name, JSON.stringify(favorite));
    updateFavoriteCount();
    showNotification(name + 'をお気に入りに追加しました！', 'success');
}

// お気に入りから削除
function removeFromFavorites(name) {
    localStorage.removeItem('favorite_' + name);
    updateFavoriteCount();
    updateFavoriteButtons();
    showNotification(name + 'をお気に入りから削除しました！', 'info');
}

// お気に入りに存在するか確認
function isFavorite(name) {
    return localStorage.getItem('favorite_' + name) !== null;
}

// お気に入り数を更新
function updateFavoriteCount() {
    const count = Object.keys(getFavorites()).length;
    const collectionBtn = document.getElementById('collectionBtn');
    if (collectionBtn) {
        // バッジを更新または追加
        let badge = collectionBtn.querySelector('.badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'badge';
            collectionBtn.appendChild(badge);
        }
        badge.textContent = count;
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// 通知表示
function showNotification(message, type = 'success') {
    // 既存の通知を削除
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // スタイル追加
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 80px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
            font-size: 0.95rem;
            font-weight: 500;
        }
        .notification.success {
            background: linear-gradient(135deg, #27ae60, #229954);
            color: white;
        }
        .notification.info {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
        }
        @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: translateX(400px); }
        }
        .badge {
            background: #e74c3c;
            color: white;
            border-radius: 50%;
            padding: 2px 7px;
            font-size: 0.75rem;
            margin-left: 5px;
            font-weight: bold;
        }
        @media (max-width: 768px) {
            .notification {
                top: 60px;
                right: 10px;
                left: 10px;
                text-align: center;
            }
        }
    `;

    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // 3秒後に削除
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// お気に入りボタンの状態を更新
function updateFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(btn => {
        const name = btn.getAttribute('data-name');
        if (isFavorite(name)) {
            btn.textContent = 'お気に入り済み';
            btn.classList.add('favorited');
            btn.style.background = '#e74c3c';
            btn.style.cursor = 'default';
        } else {
            btn.textContent = 'お気に入り';
            btn.classList.remove('favorited');
            btn.style.background = '';
            btn.style.cursor = 'pointer';
        }
    });
}

// お気に入りボタンのイベント設定
function setupFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    
    favoriteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.getAttribute('data-name');
            const img = this.getAttribute('data-img');
            
            if (isFavorite(name)) {
                removeFromFavorites(name);
                this.textContent = 'お気に入り';
                this.classList.remove('favorited');
                this.style.background = '';
            } else {
                addToFavorites(name, img);
                this.textContent = 'お気に入り済み';
                this.classList.add('favorited');
                this.style.background = '#e74c3c';
            }
        });
    });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', function() {
    updateFavoriteCount();
    updateFavoriteButtons();
    setupFavoriteButtons();
});


