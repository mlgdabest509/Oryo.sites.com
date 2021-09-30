class Food {
    constructor(snake, rows, columns) {
        this.Snake = snake
        this.rows = rows
        this.columns = columns
        this.pos = this.randomPos()
        this.update()
    }

    randomPos() {
        var x = Math.floor(Math.random() * this.columns) + 1
        var y = Math.floor(Math.random() * this.rows) + 1

        while (this.Snake.intersects({x: x, y: y})) {
            x = Math.floor(Math.random() * this.columns) + 1
            y = Math.floor(Math.random() * this.rows) + 1
        }

        return {x: x, y: y}
    }

    update() {

        var food = document.createElement("div")
        food.id = "apple"
        food.style.gridColumnStart = this.pos.x
        food.style.gridRowStart = this.pos.y

        document.querySelector("#grid").appendChild(food)

        if (this.Snake.intersects(this.pos)) {
            this.pos = this.randomPos()
            this.Snake.grow()
            food.style.gridColumnStart = this.pos.x
            food.style.gridRowStart = this.pos.y
        }

    }


}