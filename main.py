def on_button_pressed_a():
    global numLeds
    numLeds += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global numLeds
    numLeds = 0
    rainbow.clear()
    rainbow.show()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global numLeds
    numLeds += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

rainbow: neopixel.Strip = None
numLeds = 0
test = 0
direction = True
numLeds = 1
colours = [neopixel.rgb(255, 0, 0),
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
    neopixel.rgb(255, 255, 255)]
rainbow = neopixel.create(DigitalPin.P15, 13, NeoPixelMode.RGB)
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
    global direction, numLeds
    while True:
        basic.show_number(numLeds, 0)
        if direction:
            rainbow.set_pixel_color(numLeds - 1, colours[numLeds - 1])
            rainbow.show()
            if numLeds == 13:
                direction = not (direction)
            else:
                numLeds += 1
        else:
            rainbow.set_pixel_color(numLeds - 1, neopixel.colors(NeoPixelColors.BLACK))
            rainbow.show()
            if numLeds == 1:
                direction = not (direction)
            else:
                numLeds += -1
        basic.pause(25)
basic.forever(on_forever)
