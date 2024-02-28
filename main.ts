input.onButtonPressed(Button.A, function () {
    direction = (direction + 3) % 4 // Rotate left (anticlockwise)
})

input.onButtonPressed(Button.B, function () {
    direction = (direction + 1) % 4 // Rotate right (clockwise)
})

let direction = 0
let snake: game.LedSprite[] = []
let fruit: game.LedSprite
let score = 0 // Initialize the score

direction = 1
snake[0] = game.createSprite(2, 2)

function generateFruit() {
    // Randomly position the fruit on the LED grid
    let x = Math.randomRange(0, 4)
    let y = Math.randomRange(0, 4)
    fruit = game.createSprite(x, y)
}

generateFruit() // Call this function to create the initial fruit

basic.forever(function () {
    basic.pause(1000)

    // Update snake position (same as before)

    // Move snake based on direction
    let head = snake[0]
    if (direction == 0) {
        head.change(LedSpriteProperty.X, 1) // Move right
    } else if (direction == 1) {
        head.change(LedSpriteProperty.Y, 1) // Move down
    } else if (direction == 2) {
        head.change(LedSpriteProperty.X, -1) // Move left
    } else {
        head.change(LedSpriteProperty.Y, -1) // Move up
    }

    // Check if snake hits the edge (same as before)

    // Check if snake collides with itself (same as before)

    // Check if snake collects fruit
    if (head.isTouching(fruit)) {
        // Increase score
        score += 1
        basic.showNumber(score) // Display the updated score
        // Remove the fruit
        fruit.delete()
        // Generate new fruit
        generateFruit()
    }
})

