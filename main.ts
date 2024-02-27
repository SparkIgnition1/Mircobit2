let direction = 1
let snake: game.LedSprite[] = []
snake[0] = game.createSprite(2, 2)
basic.forever(function () {
    basic.pause(1000)
    for (let i = snake.length - 1; i >= 1; i--) {
        snake[i].set(snake[i - 1].get(LedSpriteProperty.X), snake[i - 1].get(LedSpriteProperty.Y))
    }
    if (direction == 0) {
        snake[0].change(LedSpriteProperty.Y, -1)
    } else if (direction == 1) {
        snake[0].change(LedSpriteProperty.X, 1)
    } else if (direction == 2) {
        snake[0].change(LedSpriteProperty.Y, 1)
    } else {
        snake[0].change(LedSpriteProperty.X, -1)
    }
    if (snake[0].isTouchingEdge()) {
        game.gameOver()
    }
    for (let i = 1; i <= snake.length - 1; i++) {
        if (snake[0].isTouching(snake[i])) {
            game.gameOver()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    direction = (direction + 3) % 4
})
input.onButtonPressed(Button.B, function () {
    direction = (direction + 1) % 4
})
