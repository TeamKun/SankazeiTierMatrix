class SelectArea {
    constructor() {
        this.playIconList = new PlayerIconList();
    }

    setImages(imgTags) {
        $("#select--icons").html(imgTags)
        $(".player--icon").draggable({
            revert: false,
            containment: '#placement',
            zIndex: 100,
        })
    }

    setIcons() {
        this.setImages(this.playIconList.createImgTags())
    }

    searchIcons(value) {
        this.setImages(this.playIconList.searchPlayer(value))
    }

    select(mcid) {
        this.playIconList.select(mcid)
        this.searchIcons($("#searchPlayer").val())
    }

    deselect(mcid) {
        this.playIconList.deselect(mcid)
        this.searchIcons($("#searchPlayer").val())
    }

    reset() {
        this.playIconList.reset()
        this.searchIcons($("#searchPlayer").val())
    }
}