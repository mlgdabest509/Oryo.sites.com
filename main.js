var lateRender = 0
var GAME_SPEED = 2

const GRID_ROWS = 21
const GRID_COLUMNS = 21


var snake = new Snake(GRID_ROWS, GRID_COLUMNS);
var food = new Food(snake, GRID_ROWS, GRID_COLUMNS)


function render(time) {
    let elapsed = (time - lateRender) / 1000
    if (elapsed < 1 / GAME_SPEED) return window.requestAnimationFrame(render);
    
    let grid = document.querySelector("#grid")
    grid.textContent = null
    food.update()
    snake.update()

    lateRender = time
    window.requestAnimationFrame(render)
}


function addSpeed() {
    GAME_SPEED += 0.2
}

snake.update()
window.requestAnimationFrame(render)