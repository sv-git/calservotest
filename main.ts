input.onGesture(Gesture.LogoUp, function () {
    if (Winkel >= 5) {
        Winkel += -5
        pins.servoWritePin(AnalogPin.P2, Winkel)
    }
    basic.setLedColor(0xffff00)
})
input.onGesture(Gesture.LogoDown, function () {
    if (Winkel <= 175) {
        Winkel += 5
        pins.servoWritePin(AnalogPin.P2, Winkel)
    }
    basic.setLedColor(0x00ff00)
})
let Winkel = 0
basic.setLedColor(0x0000ff)
Winkel = 0
pins.servoWritePin(AnalogPin.P1, Winkel)
basic.forever(function () {
	
})
