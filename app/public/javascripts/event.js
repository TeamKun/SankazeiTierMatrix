/**
 * イベントリスナー
 */
$(() => {

    /**
     * 検索時
     */
    let $input = $('#searchPlayer');
    $input.on('input', (event) => {

        State.selectArea.searchIcons($input.val())
    })

    /**
     * ダブルクリック
     */
    $("#placement").on("dblclick", ".player--icon", (event) => {

        // アイコンの消去
        let mcid = event.currentTarget.alt
        $(event.currentTarget).addClass("removed")

        // リストの再取得
        State.selectArea.deselect(mcid)
        $('.player--icon').hover(
            onHover
        );

    })

    /**
     * クリアボタン
     */
    $("#clear--button > button").click(() => {
        if (!confirm("アイコンの配置をクリアしますか?")) {
            //キャンセルの時の処理
            return false;
        }

        // 配置をクリア
        State.selectArea.reset()

        // グラフから削除
        State.graph.resetIcons()

        $('.player--icon').hover(
            onHover
        );
    })

    /**
     * 完成ボタン
     */
    $("#complete").click(() => {
        if (!confirm("完成で良いですか？")) {
            //キャンセルの時の処理
            return false;
        }

        submit()
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

    /**
     * リロード確認
     */
    $(window).on('beforeunload', (event) => {
        let message = '画面を更新すると配置がリセットされます\n更新しますか？';
        event.returnValue = message;
        return message;
    });

    $('.player--icon').hover(
        onHover
    );
})

function onHover(event) {
    $("#selected").val("選択中：" + event.currentTarget.alt);
}