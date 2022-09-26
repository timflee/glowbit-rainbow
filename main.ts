input.onButtonPressed(Button.A, function () {
    numLeds += 1
})
input.onButtonPressed(Button.AB, function () {
    numLeds = 0
    rainbow.clear()
    rainbow.show()
})
input.onButtonPressed(Button.B, function () {
    numLeds += -1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let rainbow: neopixel.Strip = null
let numLeds = 0
let test = 0
let direction = true
numLeds = 1
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
rainbow = neopixel.create(DigitalPin.P15, 13, NeoPixelMode.RGB)
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
	
})
loops.everyInterval(100, function () {
    basic.showNumber(numLeds, 0)
if (direction) {
        rainbow.setPixelColor(numLeds - 1, colours[numLeds - 1])
        rainbow.show()
        if (numLeds == 13) {
            direction = !(direction)
        } else {
            numLeds += 1
        }
    } else {
        rainbow.setPixelColor(numLeds - 1, neopixel.colors(NeoPixelColors.Black))
        rainbow.show()
        if (numLeds == 1) {
            direction = !(direction)
        } else {
            numLeds += -1
        }
    }
})
