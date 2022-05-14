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
    State.graph = new Graph($("#placement"))

    calcTest()
})

function calcTest(icon, graphWidth) {
    let p = (877.5 - 877)
    let width = 877.5


    let pos = (p - (width / 2)) / (width / 2)
    console.log(pos)
}