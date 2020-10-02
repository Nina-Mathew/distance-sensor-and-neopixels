// Created by: Nina Mathew
// Created on: 10/2/20
// This program combines Neopixels and distance sensor
let distancetotheobject = 0
basic.clearScreen()
basic.showIcon(IconNames.Yes)
basic.pause(500)
let strip2 = neopixel.create(DigitalPin.P16, 2, NeoPixelMode.RGB)
basic.pause(1000)
basic.forever(function () {
    distancetotheobject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distancetotheobject)
    if (distancetotheobject < 4) {
        strip2.clear()
        strip2.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        strip2.show()
    } else if (distancetotheobject > 4) {
        strip2.clear()
        strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip2.show()
    }
})
