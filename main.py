def on_button_pressed_a():
    global index
    index += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

strip: neopixel.Strip = None
index = 20
range2 = strip.range(0, 4)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

def on_forever():
    pass
basic.forever(on_forever)
