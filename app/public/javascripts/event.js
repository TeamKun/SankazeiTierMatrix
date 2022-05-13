/**
 * イベントリスナー
 */
$(() => {

    /**
     * 検索時
     */
    let $input = $('#searchPlayer');
    $input.on('input', function(event) {

        State.selectArea.searchIcons($input.val())
    })

    /**
     * ダブルクリック
     */
    $("#placement").on("dblclick", ".player--icon", (event) => {

        // アイコンの消去
        let mcid = event.currentTarget.alt
        event.currentTarget.remove()

        // リストの再取得
        State.selectArea.deselect(mcid)
        $('.player--icon').hover(
            onHover
        );

    })

    /**
     * ドラッグ&ドロップ
     */
    $("#placement").droppable({
        accept: ".player--icon",
        drop: function(event, ui) {

            let icon = ui.draggable

            if (State.selectArea.playIconList.getPlayer(icon.attr("alt")).selected) {
                return
            }
            // グラフに設置する
            let offset = icon.offset()
            icon.appendTo("#placement").offset(offset).removeClass("ui-draggable-dragging")


            // セレクトエリアから削除
            State.selectArea.select(icon.attr("alt"))

            $('.player--icon').hover(
                onHover
            );
        }
    })


    $('.player--icon').hover(
        onHover
    );
})

function onHover(event) {
    $("#selected").val("選択中：" + event.currentTarget.alt);
}