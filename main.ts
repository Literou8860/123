basic.forever(function () {
    if (input.temperature() < 0) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.slide), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
    if (input.temperature() > 10) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.temperature() < 10) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.temperature() < 5) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
})
