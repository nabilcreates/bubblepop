class Bubble {
    constructor(options) {
        this.options = options
    }

    draw() {

        ellipse(this.options.x, this.options.y, this.options.s)

    }

    rtno(){
        return this.options
    }

}