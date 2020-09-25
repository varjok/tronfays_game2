input.buttonA.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.Left)
    light.showRing(
    `blue purple blue purple blue black black black black black`
    )
})
input.onGesture(Gesture.Shake, function () {
    light.showAnimation(light.rainbowAnimation, 1000)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.Right)
    light.showRing(
    `black black black black black pink white pink white pink`
    )
})
function background_music () {
    for (let index = 0; index < 1000; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Half))
    }
}
light.setAll(0x00ff00)
forever(function () {
    light.showAnimation(light.cometAnimation, 500)
    light.showRing(
    `white pink white pink white purple blue purple blue purple`
    )
    light.showAnimation(light.cometAnimation, 500)
    light.showRing(
    `blue purple blue purple blue pink white pink white pink`
    )
})
forever(function () {
    background_music()
})
