def on_button_pressed_a():
    global index, numLeds
    rainbow.clear()
    index = 0
    numLeds = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

rainbow: neopixel.Strip = None
numLeds = 0
index = 0
test = 0
index = 0
numLeds = 0
colours =   [neopixel.rgb(255, 0, 0),
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
            neopixel.rgb(255, 255, 255),
            ]

rainbow = neopixel.create(DigitalPin.P16, 13, NeoPixelMode.RGB)
rainbow.set_brightness(20)
rainbow.clear()
rainbow.show()
basic.show_leds("""
    . # . . .
        # . # . .
        . # . # .
        . . # . #
        . . . # .
""")

def on_forever():
    global numLeds, index
    if index % 10 == 0:
        rainbow.set_pixel_color(numLeds, colours[numLeds])
        rainbow.show()
        numLeds += 1
    index += 1
basic.forever(on_forever)
