let images = "";

/**
 * プレイヤーを検索する
 */
function searchPlayer(string) {
    resultList = [];
    for (const player of getCurrentPlayerList()) {
        if (player.mcid.toUpperCase().indexOf(string.toUpperCase()) > -1 ||
            player.name.indexOf(kanaToHira(string)) > -1) {
            resultList.push(player);
        }
    }
    images = ""

    setImage(resultList);
}

/**
 * カタカナをひらがなに変換する
 */
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}

/**
 * プレイヤーリストからimgタグを生成
 */
function setImage(playerNames) {

    for (const playerName of playerNames) {
        images += createImgTag(playerName.mcid)
    }
    $("#select--icons").html(images);
    $(".player--icon").draggable({
        revert: true,
        containment: '#drawing',
        zIndex: 100
    });
}

/**
 * 設置済みプレイヤーが除外されたリストを取得する
 */
function getCurrentPlayerList() {
    if (selectedPlayerMap == null) {
        return playerList;
    }

    let currentPlayerList = playerList;

    // すでにマップに入っているplayerを削除
    for (let [k, v] of selectedPlayerMap) {
        currentPlayerList = currentPlayerList.filter(player => player.mcid !== v);
    }

    return currentPlayerList;
}