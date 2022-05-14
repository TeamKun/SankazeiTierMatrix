function submit() {
    console.log("submit!")

    // 配置されたデータを取得
    // 削除済みアイコンのDOMを除外
    let selectedIconList = State.graph.getPlacedIcons().filter(icon => !(icon.classList.contains("removed")))

    // グラフのサイズを再取得
    State.graph.resetGraphSize($("#placement"))


    //　送信データ生成
    let postData = {
        gender: $("#gender--select").val(),
        age: $("#age--select").val(),
        area: $("#area--select").val(),
        icons: []
    }

    selectedIconList.forEach(icon => {
        let vector = calcRelativePoint(icon, State.graph.width)
        postData.icons.push({
            mcid: icon.alt,
            x: vector.x,
            y: vector.y,
        })
    })

    State.postData = postData.icons

    // POST
    $.ajax({
        type: "post",
        url: "/post",
        data: JSON.stringify(postData),
        contentType: "application/json",
        dataType: "json"
    })

    $("#page--drawing").remove()
}


function calcRelativePoint(icon, graphWidth) {
    let iconWidth = $(icon).width()
    let halfWidth = iconWidth

    let left = parseInt($(icon).css("left"))
    let top = parseInt($(icon).css("top")) * -1

    // アイコンの中心座標を取得
    let pointCenter = new Vector2D(left + halfWidth, top - halfWidth)

    let posX = (pointCenter.x - (graphWidth / 2)) / (graphWidth / 2)
    let posY = (pointCenter.y - (graphWidth / 2)) / (graphWidth / 2)

    return new Vector2D(posX, posY)
}