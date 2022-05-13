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
 * 配置をクリア
 */
function clearPlayer() {
    for (let [k, v] of selectedPlayerMap) {
        deletePlayer(k)
    }
}