input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("Duck!")
})
radio.setGroup(162)
basic.forever(function () {
	
})
