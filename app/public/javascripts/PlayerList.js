class PlayerList {
    list = []

    constructor(playerJsonList) {
        $.each(playerJsonList, (i, element) => {
            let val = $(element).val();
            let json = JSON.parse(val)

            this.list.push(new Player(
                json.id,
                json.mcid,
                json.name
            ))
        });
    }

    getList() {
        return this.list
    }

    getSelectedList() {
        let result = []

        for (const player of this.list) {
            if (player.selected()) {
                result.push(player)
            }
        }

        return result
    }

    getNotSelectedList() {
        let result = []

        for (const player of this.list) {
            if (player.selected) {
                result.push(player)
            }
        }

        return result
    }

    /**
     * プレイヤー名から取得
     * */
    getPlayer(playerName) {
        for (player in this.list) {
            if (player.mcid === playerName) {
                return player
            }
        }

        return null
    }
}