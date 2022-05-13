class PlayerIcon {
    constructor(id, mcid, name) {
        this.id = id
        this.mcid = mcid
        this.name = name
        this.selected = false
    }

    /**
     * imgタグを生成する
     */
    createImgTag() {
        return createImgTag(this.mcid)
    }

    select() {
        this.selected = true
    }

    deselect() {
        this.selected = false
    }
}