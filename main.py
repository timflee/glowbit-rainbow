def on_button_pressed_a():
    rainbow.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    pass
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

rainbow: neopixel.Strip = None
index = 0
numLeds = 0
rainbow = neopixel.create(DigitalPin.P16, 13, NeoPixelMode.RGB)
rainbow.set_brightness(20)
rainbow.clear()
rainbow.show()

def on_forever():
    pass
basic.forever(on_forever)
