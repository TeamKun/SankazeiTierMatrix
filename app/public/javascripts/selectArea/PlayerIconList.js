class PlayerIconList {
    constructor() {
        this.list = []
        $(".playerMeta").each((i, element) => {
            let val = $(element).val();
            let json = JSON.parse(val)

            this.list.push(new PlayerIcon(
                json.id,
                json.mcid,
                json.name
            ))
        });
    }

    /**
     * MCIDから取得
     * */
    getPlayer(mcid) {
        for (const player of this.list) {
            if (player.mcid === mcid) {
                return player
            }
        }

        return null
    }

    createImgTags() {
        let tags = ""
        for (const player of this.list) {
            if (!player.selected) {
                tags += player.createImgTag()
            }
        }

        return tags
    }

    select(mcid) {
        this.getPlayer(mcid).select()
    }

    deselect(mcid) {
        this.getPlayer(mcid).deselect()
    }

    /**
     * プレイヤーを検索する
     */
    searchPlayer(string) {

        let tags = ""
        for (const player of this.getNotSelectedList()) {

            if (player.mcid.toUpperCase().indexOf(string.toUpperCase()) > -1 ||
                player.name.indexOf(kanaToHira(string)) > -1) {
                tags += player.createImgTag()
            }
        }

        return tags
    }

    /**
     * カタカナをひらがなに変換する
     */
    kanaToHira(str) {
        return str.replace(/[\u30a1-\u30f6]/g, function(match) {
            var chr = match.charCodeAt(0) - 0x60;
            return String.fromCharCode(chr);
        });
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
            if (!player.selected) {
                result.push(player)
            }
        }

        return result
    }
}