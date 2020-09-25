input.onGesture(Gesture.Shake, function () {
    light.stopAllAnimations()
    light.showAnimation(light.rainbowAnimation, 1000)
    makerController.player2.setButton(ArcadeButton.Down, true)
})
function background_music () {
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
    music.playTone(523, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.rest(music.beat(BeatFraction.Half))
}
light.setAll(0x00ff00)
forever(function () {
	
})
forever(function () {
    light.showAnimation(light.cometAnimation, 500)
    light.showRing(
    `white pink white pink white purple blue purple blue purple`
    )
    light.showAnimation(light.cometAnimation, 500)
    light.showRing(
    `blue purple blue purple blue purple pink purple pink purple`
    )
})
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
})
