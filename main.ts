input.onSound(DetectedSound.Loud, function () {
    basic.showString("This is too LOUD!")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showString("quiet")
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        `)
})
music.play(music.stringPlayable("C C5 C G E G E G ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("C E G E G E G B ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
