class Graph {
    constructor(graph) {
        let offset = graph.offset()
        this.width = graph.width()
        this.maxX = offset.left + this.width
        this.maxY = offset.top + this.width
        this.minX = offset.left
        this.minY = offset.top
        this.halfWidth = this.width / 2
    }

    isIncluded(icon) {
        // let point2D = icon.pointCenter
        // if ((this.pointLeftTop.x <= point2D.x && point2D.x <= this.pointRightTop.x) &&
        //     (this.pointLeftTop.y <= point2D.y && point2D.y <= this.pointLeftBottom.y)) {
        //     return true
        // }

        // return false
    }

    calcRelativeCoordinates(icon) {
        //グラフのサイズを-1~1とした相対座標を取得
        let x = (icon.pointCenter.x - (this.maxX / 2)) / this.halfWidth
        let y = (icon.pointCenter.y - (this.maxY / 2)) / this.halfWidth

        return new Vector2D(x, y)
    }
}