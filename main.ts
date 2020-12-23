input.onGesture(Gesture.ScreenUp, function () {
    ほすう += 1
    basic.showNumber(ほすう)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(ほすう)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    ほすう = 0
    basic.showNumber(ほすう)
    basic.pause(1000)
    basic.clearScreen()
})
let ほすう = 0
ほすう = 0
basic.forever(function () {
	
})
