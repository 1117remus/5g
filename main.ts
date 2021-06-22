serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(16000)
basic.showLeds(`
    # # # . .
    # . # # .
    # # # . #
    . . # # .
    . . # . #
    `)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
basic.forever(function () {
    basic.showString("" + (pins.analogReadPin(AnalogPin.P2)))
    if (pins.analogReadPin(AnalogPin.P2) < 100) {
        serial.writeString("Moisture Sensor Value:" + convertToText(pins.analogReadPin(AnalogPin.P2)))
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(3000)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(10000)
    } else {
        serial.writeString("Moisture Sensor Value:" + convertToText(pins.analogReadPin(AnalogPin.P2)))
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.pause(4000)
    }
})
