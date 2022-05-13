let images = "";

/**
 * プレイヤーを検索する
 */
function searchPlayer(string) {
    resultList = [];
    for (const player of Store.playerList.getNotSelectedList()) {

        if (player.mcid.toUpperCase().indexOf(string.toUpperCase()) > -1 ||
            player.name.indexOf(kanaToHira(string)) > -1) {
            resultList.push(player);
        }

        images = ""

        setImage(resultList);
    }
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