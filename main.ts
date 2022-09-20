input.onButtonPressed(Button.A, function () {
    rainbow.clear()
    index = 0
    numLeds = 0
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let rainbow: neopixel.Strip = null
let numLeds = 0
let index = 0
let test = 0
index = 0
numLeds = 0
let colours = [
neopixel.rgb(255, 0, 0),
neopixel.rgb(255, 128, 0),
neopixel.rgb(255, 255, 0),
neopixel.rgb(128, 255, 0),
neopixel.rgb(0, 255, 0),
neopixel.rgb(0, 255, 128),
neopixel.rgb(0, 255, 255),
neopixel.rgb(0, 128, 255),
neopixel.rgb(0, 0, 255),
neopixel.rgb(128, 0, 255),
neopixel.rgb(255, 0, 255),
neopixel.rgb(255, 0, 128),
neopixel.rgb(255, 255, 255)
]
rainbow = neopixel.create(DigitalPin.P16, 13, NeoPixelMode.RGB)
rainbow.setBrightness(20)
rainbow.clear()
rainbow.show()
basic.showLeds(`
    . # . . .
    # . # . .
    . # . # .
    . . # . #
    . . . # .
    `)
basic.forever(function () {
    if (index % 50 == 0) {
        rainbow.setPixelColor(numLeds, colours[numLeds])
        rainbow.show()
        numLeds += 1
    }
    index += 1
})
