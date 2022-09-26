input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.playTone(523, music.beat(BeatFraction.Sixteenth))
    brightness = brightness * 2
    if (brightness >= 255) {
        brightness = 255
    }
    rainbow.setBrightness(brightness)
})
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    delay += 10
    delay = Math.max(delay, 0)
})
function Run_up_and_down (_Start: number, _End: number, _Loops: number, _Delay: number) {
    rainbow.clear()
    rainbow.show()
    cycles = _Loops * (_End - _Start + 1)
    for (let index = 0; index < cycles; index++) {
        if (direction) {
            rainbow.setPixelColor(numLeds - 1, colours[numLeds - 1])
            rainbow.show()
            if (numLeds == _End) {
                direction = !(direction)
            } else {
                numLeds += 1
            }
        } else {
            rainbow.setPixelColor(numLeds - 1, neopixel.colors(NeoPixelColors.Black))
            rainbow.show()
            if (numLeds == _Start) {
                direction = !(direction)
            } else {
                numLeds += -1
            }
        }
        basic.pause(delay)
    }
}
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    delay = 25
    brightness = 64
    rainbow.setBrightness(brightness)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    delay += -10
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    brightness = brightness / 2
    if (brightness <= 4) {
        brightness = 4
    }
    rainbow.setBrightness(brightness)
})
let cycles = 0
let rainbow: neopixel.Strip = null
let colours: number[] = []
let brightness = 0
let delay = 0
let direction = false
music.playTone(262, music.beat(BeatFraction.Sixteenth))
let numLeds = 0
direction = true
delay = 100
numLeds = 1
brightness = 64
colours = [
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
rainbow.setBrightness(brightness)
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
    while (true) {
        for (let index = 0; index <= 12; index++) {
            Run_up_and_down(1, index + 1, 2, delay)
        }
        for (let index = 0; index <= 12; index++) {
            Run_up_and_down(1, 13 - index, 2, delay)
        }
    }
})
