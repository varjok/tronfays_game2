input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `blue purple blue purple blue black black black black black`
    )
})
input.onGesture(Gesture.Shake, function () {
    light.showAnimation(light.rainbowAnimation, 1000)
})
input.buttonB.onEvent(ButtonEvent.Click, function () {
    light.showRing(
    `black black black black black pink yellow pink yellow pink`
    )
})
light.setAll(0x00ff00)
forever(function () {
	
})
