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

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

index = 0
rainbow: neopixel.Strip = None
test = 0
numLeds = 0 
direction = True
numLeds = 0
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

def on_every_interval():
    global index, direction
    if index == 1:
        index = 0
        basic.show_number(numLeds, 0)
        if numLeds == 0:
            rainbow.clear()
            if direction:
                rainbow.set_pixel_color(numLeds - 1, colours[numLeds - 1])
            else:
                if True:
                    direction = not (direction)
        else:
            pass
    else:
        index += 1
loops.every_interval(50, on_every_interval)

def on_forever():
    pass
basic.forever(on_forever)
