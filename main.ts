/**
 * Created by: Nina Mathew
 */
let strip2: neopixel.Strip = null
let distancetotheobject = 0
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.pause(500)
/**
 * This program combines Neopixels and distance sensor
 */
/**
 * Created on: 10/2/20
 */
basic.forever(function () {
    distancetotheobject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
})
basic.forever(function () {
    strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    if (distancetotheobject > 4) {
        basic.showNumber(distancetotheobject)
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.show()
    }
    if (distancetotheobject == 4) {
        basic.showNumber(distancetotheobject)
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip2.show()
    }
    if (distancetotheobject == 3) {
        basic.showNumber(distancetotheobject)
        strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip2.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip2.show()
    }
    if (distancetotheobject == 2) {
        basic.showNumber(distancetotheobject)
        strip2.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        strip2.show()
    }
    if (distancetotheobject < 1) {
        basic.showNumber(distancetotheobject)
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.show()
    }
})
