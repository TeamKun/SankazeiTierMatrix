class Player {
    constructor(id, mcid, name) {
        this.id = id
        this.mcid = mcid
        this.name = name
        this.selected = false
    }

    id() {
        return this.id
    }

    mcid() {
        return this.mcid
    }

    name() {
        return this.name
    }

    selected() {
        return this.selected
    }
}