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
    },
    gyouza: {
        name: "餃子",
        image: "./images/Image (10).jpg",
        time: "45分",
        servings: "約30個分",
        difficulty: "普通",
        ingredients: [
            "豚ひき肉 … 200g",
            "キャベツ（または白菜） … 150g",
            "ニラ … 1/2束",
            "長ねぎ … 1/2本（お好みで)",
            "生姜 … 1片（すりおろし）",
            "にんにく … 1片（すりおろし）",
            "醤油 … 大さじ1",
            "酒 … 大さじ1",
            "ごま油 … 大さじ1",
            "砂糖 … 小さじ1",
            "塩 … 小さじ1/2",
            "こしょう … 少々",
        ],
        steps: [
            "キャベツを細かく刻む。",
            "軽く塩を振って5分置き、水分を絞る。",
            "ニラ、ねぎも細かく刻む。",
            "ボウルに豚ひき肉を入れ、調味料をすべて加えてよく練る。",
            "野菜を加えて全体を均一に混ぜる。",
            "餃子の皮の中央に具を小さじ1ほど置く。",
            "皮の縁に水をつけ、ひだを寄せながら閉じる。",
            "フライパンに油を薄く引き、中火で餃子を並べる。",
            "底にうっすら焼き色がついたら水を入れてフタをし、蒸し焼きにする（5〜6分）。",
            "水分が飛んだらフタを外し、ごま油少々を回しかけてカリッと焼き上げる。"
        ]
    },
    karaage: {
        name: "唐揚げ",
        image: "./images/Image (11).jpg",
        time: "30分",
        servings: "2〜3人分",
        difficulty: "普通",
        ingredients: [
            "鶏もも肉 … 300〜400g",
            "しょうゆ … 大さじ2",
            "酒 … 大さじ1",
            "しょうが（すりおろし）… 1片分",
            "にんにく（すりおろし）… 1片分",
            "にんにく … 1片（すりおろし）",
            "砂糖 … 小さじ1",
            "塩 … 少々",
            "こしょう … 少々",
            "片栗粉 … 適量",
            "揚げ油 … 適量",
        ],
        steps: [
            "鶏もも肉を一口大に切る。",
            "ボウルに鶏肉、しょうゆ、酒、しょうが・にんにく、砂糖、塩こしょうを入れてもみ込む。",
            "15〜30分ほど置いて味を染み込ませる。",
            "漬け込んだ鶏肉の余分な水分を軽く切り、片栗粉をまんべんなくまぶす。",
            "（サクッと仕上げたい時は片栗粉多め、しっとりなら薄力粉と片栗粉のミックスでもOK）",
            "油を170〜180℃に熱する。",
            "鶏肉を入れ、5〜6分ほど揚げる。",
            "一度取り出して余熱で火を通すために2〜3分置く。",
            "仕上げに190℃ほどの高温で1分程度二度揚げするとカリッと仕上がる。",
        ]
    },
    tenpura: {
        name: "天ぷら",
        image: "./images/Image (12).jpg",
        time: "15分",
        servings: "2〜3人分",
        difficulty: "普通",
        ingredients: [
            "えび … 6〜8尾",
            "かぼちゃ … 1/8個",
            "なす … 1本",
            "さつまいも … 1/2本",
            "ピーマン … 2個",
            "※季節の野菜や魚介でもOK",
            "薄力粉 … 1カップ(約100g)",
            "冷水 … 150ml",
            "卵 … 1個",
            "（または市販の天ぷら粉でも可）",
            "揚げ油 … 適量",
            "打ち粉用薄力粉 … 適量",
            "天つゆ or 塩 … 適量",
        ],
        steps:[
            "【えび】",
            "殻をむき、背ワタを取る。",
            "尾の先を切り落として水を抜く（油はね防止）。",
            "腹側に数カ所切れ目を入れて軽くしごき、まっすぐにする。",
            "【野菜】",
            "さつまいも・かぼちゃ：薄め（3〜5mm）にスライス",
            "ナス：縦に切り、軽く開く",
            "ししとう：1か所穴を開けておく（破裂防止）",
            "ボウルに卵と冷水を入れて軽く混ぜる。",
            "薄力粉をふるい入れ, 菜箸で10回程度ざっくり混ぜるだけ。",
            "油を170〜180℃に熱する。",
            "具材に薄く小麦粉をはたき、衣をつけて入れる。",
            "エビは2～3分、野菜は種類によって3〜5分を目安に揚げる。",
            "引き上げたら網の上で油をよく切る。",
        ]
    },
    udon: {
        name: "うどん",
        image: "./images/Image (13).jpg",
        time: "15分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "ゆでうどん（または冷凍うどん）… 2玉",
            "だし汁 … 600ml",
            "（昆布と鰹節でとったものが理想ですが、顆粒だしでもOK）",
            "しょうゆ … 大さじ2",
            "みりん … 大さじ2",
            "塩 … ひとつまみ",
            "ねぎ小口切り",
            "かまぼこ",
            "天かす",
            "ゆず皮、七味、わかめ など",
        ],
        steps:[
            "鍋にだし汁を入れ中火にかける。",
            "しょうゆ・みりん・塩を加える。",
            "ひと煮立ちさせたら火を止める。",
            "※味見して、薄い場合はしょうゆか塩を、甘みがほしい場合はみりんを調整",
            "[冷凍うどん→電子レンジか熱湯で温める]",
            "[ゆでうどん→さっと湯通ししてぬめりを取る]",
            "器を熱湯で温めておくとベスト",
            "器にうどんを盛り、熱々のつゆを注ぐ",
            "お好みの具を乗せれば完成！",
        ]
    },
    yakisoba: {
        name: "焼きそば",
        image: "./images/Image (14).jpg",
        time: "10～15分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "焼きそば麺（蒸し麺）… 2玉",
            "豚こま肉 … 100g",
            "キャベツ … 2〜3枚",
            "にんじん … 1/4本",
            "もやし … 1/2袋",
            "サラダ油 … 適量",
            "塩・こしょう … 少々",
            "焼きそばソース … 大さじ3〜4",
            "青のり、紅しょうが、かつお節、目玉焼き",
        ],
        steps:[
            "キャベツ：一口大にざく切り",
            "にんじん：細切り",
            "豚肉：食べやすい大きさに",
            "蒸し麺は袋のまま600Wで30秒ほどチンするとほぐれやすい",
            "フライパンに油を熱し、豚肉を炒める",
            "キャベツ・にんじん → しんなりしてきたらもやしを加える",
            "塩こしょうで軽く下味",
            "麺を入れて具材と炒め合わせる",
            "麺が温まったら、焼きそばソースを回しかける",
            "全体にソースが絡むまで炒める",
            "味をみてソースを追加調整",
        ]
    },
    omuraisu: {
        name: "オムライス",
        image: "./images/Image (15).jpg",
        time: "20〜25分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "ご飯 … 2膳分（あたたかいもの）",
            "鶏もも肉 … 100g",
            "玉ねぎ … 1/2個",
            "ピーマン … 1個（お好みで）",
            "ケチャップ … 大さじ4〜5",
            "バター … 10g",
            "塩・こしょう … 少々",
            "卵 … 2個",
            "牛乳 or 生クリーム … 大さじ1",
            "塩 … ひとつまみ",
            "バター … 5g",
        ],
        steps:[
            "鶏肉は小さめの一口大、玉ねぎとピーマンはみじん切りにする。",
            "フライパンにバターを熱し、鶏肉→野菜の順に炒める。",
            "ご飯を加えてほぐしながら炒め、ケチャップを回し入れる。",
            "塩・こしょうで味を調整し、皿の中央に盛っておく。",
            "ボウルで卵・牛乳・塩を混ぜる（混ぜすぎない）。",
            "フライパンにバターを溶かし、卵液を一気に流し入れる。",
            "ふわっと固まってきたら、半熟のうちにチキンライスの上へ乗せる。",
            "〈巻くタイプ〉",
            "→ フライパンの端に寄せて巻き、皿にひっくり返す",
            "〈ふわとろタイプ〉",
            "→ 真ん中に乗せてナイフで切れ目を入れ“ぱかっ”と開く",
            "ケチャップをかければ完成！",
            "お好みでデミグラスソース、パセリ、粉チーズも◎",

        ]
    },
    chikinteriyaki: {
        name: "チキン照り焼き",
        image: "./images/Image (1).png",
        time: "15〜20分",
        servings: "2人分",
        difficulty: "簡単",
        ingredients: [
            "鶏もも肉 … 1枚（250〜300g）",
            "塩・こしょう … 少々",
            "小麦粉（薄力粉）… 小さじ2（なくてもOK）",
            "しょうゆ … 大さじ2",
            "みりん … 大さじ2",
            "砂糖 … 大さじ1",
            "酒 … 大さじ1",
        ],
        steps:[
            "鶏もも肉はフォークで数か所穴をあけ、火の通りを均一にする。",
            "塩・こしょうを軽くふり、小麦粉を薄くまぶす。",
            "フライパンに油を少量熱し、皮目を下にして中火で焼く。",
            "7割ほど火が通ったら裏返し、さらに焼く。",
            "余分な脂が多ければキッチンペーパーで軽く吸い取る。",
            "タレの材料をすべて加える。",
            "中火〜弱火で煮詰めながら、鶏肉にタレをまとわせる。",
            "全体に照りが出てタレがとろりとしたら完成！",
            "食べやすく切って皿へ",
            "タレを上からかける",
            "つけ合わせは千切りキャベツ・サラダ・温野菜などがよく合います",
        ]
    },
    samonteriyaki: {
        name: "サーモン照り焼き",
        image: "./images/Image (55).jpg",
        time: "10〜15分",
        servings: "2人分",
        difficulty: "簡単",
        ingredients: [
            "生鮭（またはサーモン切り身）… 2切れ",
            "塩 … 少々",
            "小麦粉 … 適量（薄くまぶす／省略可）",
            "サラダ油 … 適量",
            "しょうゆ … 大さじ1.5",
            "みりん … 大さじ1.5",
            "酒 … 大さじ1",
            "砂糖 … 小さじ2",
        ],
        steps:[
            "サーモンに軽く塩をふり、5分ほど置いて水気をふく（臭み取り）",
            "小麦粉を薄くまぶす。",
            "フライパンに油を熱し、中火でサーモンの皮目から焼く。",
            "2〜3分焼いてこんがりしたら裏返し、さらに2〜3分焼く。",
            "余分な油は軽くキッチンペーパーで吸い取る。",
            "タレをすべて加え、弱〜中火で煮からめる。",
            "タレがとろっとして照りが出てきたら完成！",
            "皿に盛り、フライパンに残ったタレを上にかける。",
            "付け合わせは、ほうれん草のおひたし、千切りキャベツ、レモンなどがよく合う。",
        ]
    },
    tamagoyaki: {
        name: "玉子焼き",
        image: "./images/Image (5).png",
        time: "10分",
        servings: "2〜3人分",
        difficulty: "簡単",
        ingredients: [
            "【甘めの玉子焼き】",
            "卵 … 3個",
            "砂糖 … 大さじ1〜1.5",
            "塩 … ひとつまみ",
            "みりん … 小さじ1（あれば）",
            "油 … 少量（フライパン用）",
            "【出汁巻き卵にしたい場合】",
            "卵 … 3個",
            "だし汁 … 大さじ2",
            "砂糖 … 小さじ1",
            "しょうゆ … 少々",
            "塩 … ひとつまみ",
            "油 … 適量",
        ],
        steps:[
            "ボウルに卵を割り入れ、調味料（砂糖・塩・みりん、またはだし）を加える。",
            "白身を切るように軽く混ぜる（混ぜすぎると固くなりやすい）。",
            "卵焼き器（または小さめフライパン）を中火で温め、油を薄く広げる。",
            "卵液を薄く流し入れ、表面が半熟のうちに奥へ巻く。",
            "空いたスペースに再び油を薄く塗り、卵液を流して巻いた卵を持ち上げて下にも流し込む",
            "これを数回繰り返す。",
            "全体が巻けたら弱火で軽く形を整える。",
            "巻き終わりを下にしてまな板へ。",
            "少し冷ましてから切ると形が崩れにくい。",
        ]
    },
    tunamayoonigiri: {
        name: "ツナマヨおにぎり",
        image: "./images/Image (2).png",
        time: "5〜7分",
        servings: "2個分",
        difficulty: "簡単",
        ingredients: [
            "温かいご飯 … 200〜250g（1膳＝約120g）",
            "ツナ缶（オイル or 水煮）… 1缶",
            "マヨネーズ … 大さじ1.5〜2",
            "しょうゆ … 数滴（お好みで）",
            "塩 … 少々（手に付ける用）",
            "海苔 … 適量",
        ],
        steps:[
            "ツナ缶は軽く油（または水分）を切る。",
            "ボウルにツナ・マヨネーズを入れて混ぜる。",
            "味を見て、コクが欲しければしょうゆを数滴足すと旨味アップ。",
            "手を水で湿らせて軽く塩をつける。",
            "ご飯を半分取り、中央にくぼみを作ってツナマヨを入れる。",
            "具が落ちないように包むようにご飯を重ねる。",
            "お好みの形（三角・丸）に優しく握る。",
            "(握りすぎると硬くなるので軽く形を整える程度でOK!)",
            "海苔を巻いて完成！",
        ]
    },
    oyakodon: {
        name: "親子丼",
        image: "./images/Image (3).png",
        time: "15〜20分",
        servings: "2人分",
        difficulty: "普通",
        ingredients: [
            "鶏もも肉 … 150〜200g",
            "玉ねぎ … 1/2個",
            "卵 … 3〜4個",
            "ご飯 … 2杯分",
            "だし … 150ml",
            "しょうゆ … 大さじ2",
            "みりん … 大さじ2",
            "砂糖 … 小さじ1〜2（甘めが好きなら増やす）",
        ],
        steps:[
            "鶏肉を一口大に切る。",
            "玉ねぎは薄切り。",
            "卵は軽く溶く（混ぜすぎないのがふわとろのコツ）",
            "小鍋またはフライパンに割り下を入れて中火で温める。",
            "玉ねぎを入れ、少し透き通るまで煮る。",
            "鶏肉を加えて火が通るまで煮る（約3〜4分）。",
            "卵の2/3量を鍋にまわし入れる。",
            "ふちが固まってきたら、残りの卵を上からそっと流す。",
            "火を弱め、半熟状態で火を止めて1分ほど蒸らす。",
            "温かいご飯の上に具材をそっと乗せる。",
            "三つ葉や刻み海苔を添えるとさらに美味しい。",
        ]
    },
    tamagokakegohan: {
        name: "卵かけご飯",
        image: "./images/Image (4).png",
        time: "3分",
        servings: "1人分",
        difficulty: "簡単",
        ingredients: [
            "ご飯 … 1膳（約120g・温かいもの）",
            "卵 … 1個",
            "醤油 … 小さじ1〜2（お好みで）",
            "ねぎ・海苔・かつお節・ごま油・味のり・七味など",
        ],
        steps:[
            "ご飯を茶碗に盛る。",
            "卵を割り入れる。",
            "醤油をかける。",
            "箸やスプーンでご飯と卵をよく混ぜる。",
            "お好みでねぎや海苔などトッピングして完成！",
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
// 検索機能
// ========================================
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let hasResult = false;

    recipeCards.forEach(card => {
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
    const img = card.querySelector('img');
    if (img) {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const recipeKey = card.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        });
    }
    
    // レシピカード全体をクリック可能に（お気に入りボタンとリンク以外）
    card.addEventListener('click', (e) => {
        // お気に入りボタンとリンクのクリックは除外
        if (!e.target.closest('.favorite-btn') && !e.target.closest('.recipe-link')) {
            const recipeKey = card.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        }
    });
});


