// Created by: Nina Mathew
// Created on: 10/2/20
// This program combines Neopixels and distance sensor
let distancetotheobject = 0
let distance = 0
let strip2: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
basic.clearScreen()
strip2.clear()
basic.pause(500)
strip2 = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
while (distance >= 4) {
    basic.showNumber(distance)
    strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip2.show()
}
while (distance <= 4) {
    basic.showNumber(distance)
    strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    strip2.show()
}
while (distance <= 1) {
    basic.showNumber(distance)
    strip2.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip2.show()
}
basic.forever(function () {
    distancetotheobject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
