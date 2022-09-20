input.onButtonPressed(Button.A, function () {
    rainbow.show()
})
let rainbow: neopixel.Strip = null
let index = 0
let numLeds = 0
rainbow = neopixel.create(DigitalPin.P16, 13, NeoPixelMode.RGB)
rainbow.setBrightness(20)
rainbow.clear()
rainbow.show()
basic.forever(function () {
    if (index % 100 == 0) {
        rainbow.setPixelColor(numLeds, neopixel.colors(NeoPixelColors.Orange))
        rainbow.show()
        numLeds += 1
    }
    index += 1
})
