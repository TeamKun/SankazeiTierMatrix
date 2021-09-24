/**
 * プレイヤーをマトリクスにセットする
 */
function executeDrop(playerName, position) {

    // すでにマップに入っているか確認
    for (let [k, v] of selectedPlayerMap) {
        if (v == playerName) {

            // 移動先にプレイヤーが配置されてない場合
            if (!selectedPlayerMap.has(position)) {
                // 移動処理
                movePlayer(playerName, k, position);
                return;
            }

            // 入れ替え処理
            switchPlayer(playerName, selectedPlayerMap.get(position), k, position);
            return
        }
    }

    // マップとフォームにセット
    setPlayer(position, playerName);
}

/**
 * 入れ替え処理
 */
function switchPlayer(player1, player2, position1, position2) {

    setPlayer(position1, player2);
    setPlayer(position2, player1);
}

/**
 * 移動処理
 */
function movePlayer(player, beforePosition, afterPosition) {
    setPlayer(afterPosition, player);
    deletePlayer(beforePosition);
}

/**
 * imgタグを生成する
 */
function createImgTag(playerName) {
    let imageSrc = "images/faceIcon/" + playerName + ".png";
    return '<img src="' + imageSrc + '" alt="' + playerName + '" class="dropArea player--icon">';
}

/**
 * ダミー画像を設置する
 */
function setDummyImage(position) {
    $("#" + position).html('<img src="images/faceIcon/dummy.png" alt="dummy" class="dropArea dummy">');
}

/**
 * 座標にプレイヤー画像を設置する
 */
function setPlayerImage(position, playerName) {
    $("#" + position).html(createImgTag(playerName));
}

/**
 * マップとformにプレイヤーをセットする
 */
function setPlayer(position, playerName) {
    selectedPlayerMap.set(position, playerName);
    $("#boxForm--" + position).attr("value", getIdfromMcid(playerName));
    setPlayerImage(position, playerName);
}

function getIdfromMcid(mcid) {
    for (i in playerList) {
        let player = playerList[i]
        if (player.mcid === mcid) {
            return player.id
        }
    }
}
/**
 * マップとformからプレイヤーを消去する
 */
function deletePlayer(position) {
    $("img").addClass("pointer-events-none")
    selectedPlayerMap.delete(position);
    $("#boxForm--" + position).attr("value", "0");
    setDummyImage(position);
}

/**
 * 配置をクリア
 */
function clearPlayer() {
    for (let [k, v] of selectedPlayerMap) {
        deletePlayer(k)
    }
}