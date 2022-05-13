/**
 * 初期化処理
 */
$(() => {
    // TODO: JSの読み込み

    // プレイヤーアイコンのロード
    State.selectArea = new SelectArea()

    // プレイヤーアイコンの配置
    State.selectArea.setIcons()

    // グラフの初期化
    State.graph = new Graph($("#graph"))
})