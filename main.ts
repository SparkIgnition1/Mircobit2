input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("sstoop shaking meeee")
})
music.play(music.stringPlayable("C C5 C G E G E G ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C E G E G E G B ", 120), music.PlaybackMode.UntilDone)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
basic.forever(function () {
	
})
