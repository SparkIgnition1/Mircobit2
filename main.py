def on_button_pressed_a():
    music.play(music.builtin_playable_sound_effect(soundExpression.giggle),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        # # # # #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

music.play(music.string_playable("C C5 C G E G E G ", 120),
    music.PlaybackMode.UNTIL_DONE)
music.play(music.string_playable("C E G E G E G B ", 120),
    music.PlaybackMode.UNTIL_DONE)

def on_forever():
    pass
basic.forever(on_forever)
