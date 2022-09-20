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
index = 0
numLeds = 0
let test = 0
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
    if (index % 100 == 0) {
        rainbow.showBarGraph(numLeds, 12)
        rainbow.show()
        numLeds += 1
    }
    index += 1
})
