// ========================================
// レシピデータ管理
// ========================================
const recipeData = {
    okonomiyaki: {
        name: "お好み焼き",
        image: "./images/Image (4).jpg",
        time: "20分",
        servings: "2人分",
        difficulty: "簡単",
        ingredients: [
            "キャベツ 200g",
            "薄力粉 100g",
            "卵 2個",
            "水 100ml",
            "豚バラ肉 100g",
            "天かす 大さじ2",
            "紅しょうが 適量",
            "お好み焼きソース 適量",
            "マヨネーズ 適量",
            "青のり 適量"
        ],
        steps: [
            "キャベツを細かく千切りにする",
            "ボウルに薄力粉、卵、水を入れてよく混ぜる",
            "キャベツ、天かす、紅しょうがを加えて混ぜる",
            "フライパンに油をひき、中火で熱する",
            "生地を流し入れ、丸く形を整える",
            "豚バラ肉を上にのせて焼く",
            "5分ほど焼いたら裏返す",
            "さらに5分焼いて中まで火を通す",
            "お好み焼きソースとマヨネーズをかける",
            "青のりをふりかけて完成"
        ]
    },
    takoyaki: {
        name: "たこ焼き",
        image: "./images/Image (5).jpg",
        time: "35分",
        servings: "4人分",
        difficulty: "普通",
        ingredients: [
            "たこ焼き粉 200g",
            "水 600ml",
            "卵 2個",
            "茹でたこ 150g",
            "紅しょうが 適量",
            "青ねぎ 適量",
            "天かす 適量",
            "たこ焼きソース 適量",
            "マヨネーズ 適量",
            "かつお節 適量"
        ],
        steps: [
            "たこを1cm角に切る",
            "青ねぎを小口切りにする",
            "ボウルにたこ焼き粉、水、卵を入れてよく混ぜる",
            "たこ焼き器を熱して油をひく",
            "生地を穴の8分目まで流し入れる",
            "たこ、紅しょうが、ねぎ、天かすを入れる",
            "生地が固まり始めたら竹串で回転させる",
            "きつね色になるまで焼き続ける",
            "お皿に盛り、ソースとマヨネーズをかける",
            "かつお節と青のりをトッピングして完成"
        ]
    },
    gyudon: {
        name: "牛丼",
        image: "./images/Image (6).jpg",
        time: "20分",
        servings: "2人分",
        difficulty: "簡単",
        ingredients: [
            "牛薄切り肉 300g",
            "玉ねぎ 1個",
            "醤油 大さじ3",
            "みりん 大さじ3",
            "砂糖 大さじ1",
            "酒 大さじ2",
            "水 200ml",
            "ご飯 2膳",
            "紅しょうが お好みで"
        ],
        steps: [
            "玉ねぎを薄切りにする",
            "牛肉を食べやすい大きさに切る",
            "鍋に水、醤油、みりん、砂糖、酒を入れて沸騰させる",
            "玉ねぎを加えて3分煮る",
            "牛肉を加えてほぐしながら煮る",
            "アクが出たら取り除く",
            "中火で5分ほど煮込む",
            "丼にご飯を盛る",
            "牛肉と玉ねぎを汁ごとかける",
            "お好みで紅しょうがをのせて完成"
        ]
    },
    tonkatsu: {
        name: "とんかつ",
        image: "./images/Image (7).jpg",
        time: "25分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "豚ロース肉 2枚（各150g）",
            "塩 適量",
            "胡椒 適量",
            "薄力粉 適量",
            "卵 1個",
            "パン粉 適量",
            "揚げ油 適量",
            "キャベツの千切り 適量",
            "とんかつソース 適量"
        ],
        steps: [
            "豚肉の筋を包丁で切る",
            "肉を叩いて薄く伸ばす",
            "塩胡椒を両面にふる",
            "薄力粉を全体にまぶす",
            "溶き卵にくぐらせる",
            "パン粉をしっかりつける",
            "170度の油で3分揚げる",
            "裏返してさらに2分揚げる",
            "油を切って食べやすく切る",
            "キャベツと一緒に盛り付けて完成"
        ]
    },
    curry: {
        name: "カレーライス",
        image: "./images/Image (8).jpg",
        time: "90分",
        servings: "4人分",
        difficulty: "簡単",
        ingredients: [
            "豚肉または牛肉 300g",
            "玉ねぎ 2個",
            "じゃがいも 2個",
            "にんじん 1本",
            "カレールー 1箱",
            "水 800ml",
            "サラダ油 大さじ2",
            "ご飯 4膳"
        ],
        steps: [
            "野菜を一口大に切る",
            "肉も一口大に切る",
            "鍋に油をひき、肉を炒める",
            "肉の色が変わったら野菜を加える",
            "野菜がしんなりするまで炒める",
            "水を加えて強火で沸騰させる",
            "アクを取り除く",
            "弱火で20分煮込む",
            "火を止めてカレールーを溶かす",
            "弱火で10分煮込んで完成"
        ]
    },
    yakitori: {
        name: "焼き鳥",
        image: "./images/Image (9).jpg",
        time: "25分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "鶏もも肉 300g",
            "長ねぎ 1本",
            "醤油 大さじ3",
            "みりん 大さじ3",
            "砂糖 大さじ1",
            "酒 大さじ2",
            "竹串 8本",
            "塩 適量"
        ],
        steps: [
            "竹串を水に30分浸す",
            "鶏肉を一口大に切る",
            "ねぎを3cm幅に切る",
            "鶏肉とねぎを交互に串に刺す",
            "タレの材料（醤油、みりん、砂糖、酒）を混ぜる",
            "グリルまたはフライパンで5分焼く",
            "タレを塗って裏返す",
            "さらに3分焼く",
            "もう一度タレを塗る",
            "お好みで塩をふって完成"
        ]
    }
};

// ========================================
// DOM要素の取得
// ========================================
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const recipeList = document.getElementById('recipeList');
const noResult = document.getElementById('noResult');
const recipeCards = document.querySelectorAll('.recipe-card');
const recipeLinks = document.querySelectorAll('.recipe-link');

// ========================================
// 無限ループカルーセル機能
// ========================================
let autoScrollInterval;
let scrollSpeed = 2; // ピクセル/フレーム（調整可能）
let isScrolling = true;

function initInfiniteScroll() {
    if (!recipeList) return;
    
    // オリジナルのカードをクローン
    const originalCards = Array.from(recipeCards);
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        recipeList.appendChild(clone);
        
        // クローンにもイベントリスナーを追加
        addCardEventListeners(clone);
    });
    
    // 自動スクロール開始
    startAutoScroll();
    
    // ホバー時に一時停止
    recipeList.addEventListener('mouseenter', pauseAutoScroll);
    recipeList.addEventListener('mouseleave', startAutoScroll);
}

function startAutoScroll() {
    if (!isScrolling || !recipeList) return;
    
    autoScrollInterval = setInterval(() => {
        if (!recipeList) return;
        
        recipeList.scrollLeft += scrollSpeed;
        
        // スクロール位置が半分を超えたらリセット
        const maxScroll = recipeList.scrollWidth / 2;
        if (recipeList.scrollLeft >= maxScroll) {
            recipeList.scrollLeft = 0;
        }
    }, 20); // 20ms毎に更新（滑らかなアニメーション）
}

function pauseAutoScroll() {
    if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
    }
}

function addCardEventListeners(card) {
    const img = card.querySelector('img');
    const link = card.querySelector('.recipe-link');
    const favBtn = card.querySelector('.favorite-btn');
    
    if (img) {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const recipeKey = card.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        });
    }
    
    if (link) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const recipeKey = card.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        });
    }
    
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.recipe-link')) {
            const recipeKey = card.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        }
    });
}

// ページ読み込み時に無限スクロール開始
window.addEventListener('DOMContentLoaded', () => {
    initInfiniteScroll();
});

// ========================================
// 検索機能
// ========================================
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let hasResult = false;
    
    // 検索時は自動スクロールを停止
    pauseAutoScroll();
    isScrolling = false;

    const allCards = document.querySelectorAll('.recipe-card');
    allCards.forEach(card => {
        const recipeName = card.getAttribute('data-recipe');
        const recipe = recipeData[recipeName];
        
        if (recipe.name.toLowerCase().includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            hasResult = true;
        } else {
            card.style.display = 'none';
        }
    });

    noResult.style.display = hasResult ? 'none' : 'block';
    
    // 検索クリア時は自動スクロール再開
    if (searchTerm === '') {
        isScrolling = true;
        startAutoScroll();
    }
}

// 検索イベントリスナー
if (searchBtn) {
    searchBtn.addEventListener('click', searchRecipes);
}

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchRecipes();
        }
    });
    
    // リアルタイム検索
    searchInput.addEventListener('input', searchRecipes);
}

// ========================================
// モーダル表示機能
// ========================================
function showRecipeModal(recipeKey) {
    const recipe = recipeData[recipeKey];
    
    if (!recipe) {
        console.error('レシピが見つかりません:', recipeKey);
        return;
    }
    
    // 既存のモーダルを削除
    const existingModal = document.querySelector('.recipe-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // モーダル作成
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="modal-header">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="modal-title">
                    <h2>${recipe.name}</h2>
                    <div class="recipe-meta">
                        <span><i class="fa-regular fa-clock"></i> ${recipe.time}</span>
                        <span><i class="fa-solid fa-users"></i> ${recipe.servings}</span>
                        <span><i class="fa-solid fa-star"></i> ${recipe.difficulty}</span>
                    </div>
                </div>
            </div>
            <div class="modal-body">
                <div class="ingredients-section">
                    <h3><i class="fa-solid fa-list"></i> 材料</h3>
                    <ul>
                        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                    </ul>
                </div>
                <div class="steps-section">
                    <h3><i class="fa-solid fa-book-open"></i> 作り方</h3>
                    <ol>
                        ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-favorite-btn" data-recipe="${recipeKey}" data-name="${recipe.name}" data-img="${recipe.image}">
                    ${isFavorite(recipe.name) ? '<i class="fa-solid fa-heart"></i> お気に入り済み' : '<i class="fa-regular fa-heart"></i> お気に入りに追加'}
                </button>
            </div>
        </div>
    `;

    // モーダルスタイル追加（一度だけ）
    if (!document.querySelector('style[data-modal-style]')) {
        const style = document.createElement('style');
        style.setAttribute('data-modal-style', 'true');
        style.textContent = `
            .recipe-modal {
                display: block;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.7);
                overflow-y: auto;
                padding: 20px 0;
            }
            .modal-content {
                background-color: #fff;
                margin: 2% auto;
                width: 90%;
                max-width: 900px;
                border-radius: 15px;
                box-shadow: 0 8px 30px rgba(0,0,0,0.3);
                animation: slideIn 0.3s ease;
                overflow: hidden;
            }
            @keyframes slideIn {
                from { transform: translateY(-50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .close-btn {
                color: #aaa;
                float: right;
                font-size: 32px;
                font-weight: bold;
                cursor: pointer;
                padding: 10px 20px;
                transition: color 0.3s ease;
            }
            .close-btn:hover { 
                color: #e74c3c;
                transform: rotate(90deg);
                transition: all 0.3s ease;
            }
            .modal-header {
                padding: 20px;
                background: linear-gradient(135deg, #fff, #f8f9fa);
            }
            .modal-header img {
                width: 100%;
                height: 350px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 20px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            }
            .modal-title h2 {
                color: #d35400;
                margin-bottom: 15px;
                font-size: 2rem;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .recipe-meta {
                display: flex;
                gap: 25px;
                color: #666;
                font-size: 1rem;
                flex-wrap: wrap;
            }
            .recipe-meta span {
                display: flex;
                align-items: center;
                gap: 8px;
                background: white;
                padding: 8px 15px;
                border-radius: 20px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .recipe-meta i {
                color: #d35400;
                font-size: 1.1rem;
            }
            .modal-body {
                padding: 30px;
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 40px;
                background: white;
            }
            .ingredients-section h3, .steps-section h3 {
                color: #d35400;
                margin-bottom: 20px;
                font-size: 1.4rem;
                display: flex;
                align-items: center;
                gap: 10px;
                border-bottom: 3px solid #d35400;
                padding-bottom: 10px;
            }
            .ingredients-section ul {
                list-style: none;
                padding: 0;
            }
            .ingredients-section li {
                padding: 12px 15px;
                border-bottom: 1px solid #eee;
                transition: background 0.3s ease;
                border-radius: 5px;
            }
            .ingredients-section li:hover {
                background: #f8f9fa;
            }
            .ingredients-section li:before {
                content: "✓ ";
                color: #27ae60;
                font-weight: bold;
                margin-right: 10px;
                font-size: 1.2rem;
            }
            .steps-section ol {
                padding-left: 25px;
                counter-reset: step-counter;
            }
            .steps-section li {
                padding: 15px 10px;
                line-height: 1.8;
                border-bottom: 1px solid #eee;
                position: relative;
                counter-increment: step-counter;
            }
            .steps-section li:before {
                content: counter(step-counter);
                position: absolute;
                left: -25px;
                background: #d35400;
                color: white;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 0.85rem;
            }
            .modal-footer {
                padding: 20px 30px;
                background: #f8f9fa;
                text-align: center;
                border-top: 2px solid #eee;
            }
            .modal-favorite-btn {
                background: linear-gradient(135deg, #d35400, #e67e22);
                color: white;
                border: none;
                padding: 15px 40px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                gap: 10px;
                box-shadow: 0 4px 15px rgba(211, 84, 0, 0.3);
            }
            .modal-favorite-btn:hover {
                background: linear-gradient(135deg, #e67e22, #d35400);
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(211, 84, 0, 0.4);
            }
            .modal-favorite-btn.favorited {
                background: linear-gradient(135deg, #e74c3c, #c0392b);
            }
            .modal-favorite-btn.favorited:hover {
                background: linear-gradient(135deg, #c0392b, #e74c3c);
            }
            .recipe-card img {
                cursor: pointer;
                transition: transform 0.3s ease, filter 0.3s ease;
            }
            .recipe-card img:hover {
                transform: scale(1.05);
                filter: brightness(1.1);
            }
            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    margin: 10px auto;
                }
                .modal-header img {
                    height: 200px;
                }
                .modal-title h2 {
                    font-size: 1.5rem;
                }
                .modal-body {
                    grid-template-columns: 1fr;
                    gap: 25px;
                    padding: 20px;
                }
                .recipe-meta {
                    flex-direction: column;
                    gap: 10px;
                }
                .steps-section li:before {
                    position: static;
                    display: inline-block;
                    margin-right: 10px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // モーダル内のお気に入りボタン
    const modalFavBtn = modal.querySelector('.modal-favorite-btn');
    modalFavBtn.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const img = this.getAttribute('data-img');
        
        if (isFavorite(name)) {
            removeFromFavorites(name);
            this.innerHTML = '<i class="fa-regular fa-heart"></i> お気に入りに追加';
            this.classList.remove('favorited');
        } else {
            addToFavorites(name, img);
            this.innerHTML = '<i class="fa-solid fa-heart"></i> お気に入り済み';
            this.classList.add('favorited');
        }
        updateFavoriteButtons();
    });

    // 閉じる機能
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.onclick = () => {
        modal.remove();
        document.body.style.overflow = 'auto';
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
        }
    };
}

// ========================================
// クリックイベントの設定
// ========================================

// レシピリンクにイベント追加
recipeLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const card = link.closest('.recipe-card');
        const recipeKey = card.getAttribute('data-recipe');
        showRecipeModal(recipeKey);
    });
});

// レシピカードの画像クリックでモーダル表示
recipeCards.forEach(card => {
    addCardEventListeners(card);
});