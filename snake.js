let direction = [1, 0]
let last_direction = [1, 0]
let newParts = 0


class Snake {
    constructor(rows, columns) {
        this.parts = [{x: 5, y: 2}, {x: 5, y: 2}, {x: 5, y: 2}]
        this.rows = rows;
        this.columns = columns
    }

    update() {

        this.move()
        this.parts.forEach(pos => {
            let part = document.createElement("div")
            part.id = "snake-head"
            part.style.gridColumnStart = pos.x
            part.style.gridRowStart = pos.y
            document.querySelector("#grid").appendChild(part)
        });

        last_direction = direction

    }

    move() {
        
        let head = this.parts[0]
        if (head.y > this.rows || head.x > this.columns || head.y <= 0 || head.x <= 0) alert("ded")

        if (newParts > 0) {
            this.parts.push({x: this.parts[this.parts.length + direction[0]], y: this.parts[this.parts.length + direction[1]]})
            newParts -= 1
        }

        for (let i = this.parts.length - 2; i >= 0; i--) {
            this.parts[i + 1] = {...this.parts[i]}
        }

        head.x += direction[0]
        head.y += direction[1]
    }

    intersects(pos) {
        var found = false
        this.parts.forEach(part => {
            if (part.x == pos.x && part.y == pos.y) {
                found = true
            }
        })

        return found;
    }
    
    grow() {
        newParts += 1
        addSpeed()
    }

}


document.onkeydown = function(e) {
    e = e || window.Event
    let dir = last_direction
    switch (e.key) {
        case "w":
            dir = [0, -1]
        break
        case "ArrowUp":
            dir = [0, -1]
        break
        case "a":
            dir = [-1, 0]
        break
        case "ArrowLeft":
            dir = [-1, 0]
        break
        case "s":
            dir = [0, 1]
        break
        case "ArrowDown":
            dir = [0, 1]
        break
        case "d":
            dir = [1, 0]
        break
        case "ArrowRight":
            dir = [1, 0]
        break
    }

    if (last_direction[0] !== -dir[0] && last_direction[1] !== -dir[1]) direction = dir 

}