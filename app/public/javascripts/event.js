/**
 * イベントリスナー
 */
$(function() {

    /**
     * 画面ロード時
     */
    $(document).ready(() => {
        Store.playerList = new PlayerList($(".players"))

        setImage(Store.playerList.getList())
        setInitialData();

        $('.player--icon').hover(
            onHover
        );

        /**
         * ドラッグ&ドロップ
         */
        $("#graph").droppable({
            accept: ".player--icon",
            drop: function(event, ui) {
                //     // プレイヤーを配置
                let playerName = ui.draggable.attr("alt")
                    // let boxNumber = event.target.id
                    // executeDrop(playerName, boxNumber)
                let player = getPlayer(playerName);
                player.selected = true

                // リストの再取得
                images = "";
                searchPlayer($("#searchPlayer").val());

                $('.player--icon').hover(
                    onHover
                );
            }
        });

        /**
         * ダブルタップ
         */
        $(".matrix--box").bind("dblTap", () => {
            let position = event.currentTarget.id
            deletePlayer(position)

            // リストの再取得
            images = "";
            searchPlayer($("#searchPlayer").val());

            $('.player--icon').hover(
                onHover
            );
        });

        /**
         * ダブルクリック
         */
        $(".matrix--box").dblclick((event) => {
            let position = event.currentTarget.id
            deletePlayer(position)

            // リストの再取得
            images = "";
            searchPlayer($("#searchPlayer").val());

            $('.player--icon').hover(
                onHover
            );

        })

        /**
         * クリアボタン
         */
        $("#clear--button > button").click(() => {
            if (!confirm("アイコンの配置をクリアしますか?")) {
                /*　キャンセルの時の処理 */
                return false;
            }

            // 配置をクリア
            clearPlayer();
            // リストの再取得
            images = "";
            searchPlayer($("#searchPlayer").val());

            $('.player--icon').hover(
                onHover
            );
        })

        /**
         * 画像ダウンロードボタン
         */
        $("#formButton--download > button").click(() => {

            if (!confirm("画像を生成してダウンロードしますか?")) {
                /*　キャンセルの時の処理 */
                return false;
            }

            // PCでの処理
            if (isPc()) {
                $("#placement--clone").html($("#placement").clone()).removeClass("none")
                $("html,body").animate({ scrollTop: 0 }, 0);

                createImg("#placement--clone");

                $("html,body").animate({ scrollTop: $(document).height() }, 0);
                $("#placement--clone").html($("#placement").clone()).addClass("none")

                return;
            }

            // スマホ/タブレットでの処理
            $("html,body").animate({ scrollTop: 0 }, 0);
            createImg("#placement");
            $("html,body").animate({ scrollTop: $(document).height() }, 0);
        })
    });

    /**
     * 検索時
     */
    var $input = $('#searchPlayer');
    $input.on('input', function(event) {
        var value = $input.val();
        searchPlayer(value)

        $('.player--icon').hover(
            onHover
        );
    });

    /**
     * 送信時
     */
    $("#submit").click(() => {
        submit()
    })
})

function onHover(event) {
    $("#selected").val("選択中：" + event.currentTarget.alt);
}