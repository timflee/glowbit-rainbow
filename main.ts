input.onButtonPressed(Button.A, function () {
    index += 10
})
let strip: neopixel.Strip = null
strip.clear()
let index = 20
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.setBrightness(index)
strip.show()
basic.forever(function () {
	
})
