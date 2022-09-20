def on_button_pressed_a():
    global index
    index += 10
input.on_button_pressed(Button.A, on_button_pressed_a)

index = 20
rainbow = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
rainbow.set_brightness(20)
rainbow.show_rainbow(1, 360)

def on_forever():
    strip: neopixel.Strip = None
    rainbow.clear()
    strip.show_bar_graph(100, 255)
    rainbow.show()
basic.forever(on_forever)
