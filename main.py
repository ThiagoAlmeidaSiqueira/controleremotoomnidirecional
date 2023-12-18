radio.set_group(0)
serial.redirect_to_usb()

def on_forever():
    if GHBit.button(GHBit.enButton.B1, GHBit.enButtonState.PRESS):
        radio.send_string("ANTIHORARIO")
        serial.write_line("ANTIHORARIO")
    elif GHBit.button(GHBit.enButton.B4, GHBit.enButtonState.PRESS):
        radio.send_string("HORARIO")
        serial.write_line("HORARIO")
    else:
        if GHBit.rocker(GHBit.enRocker.UP):
            radio.send_string("NORTE")
            serial.write_line("NORTE")
        elif GHBit.rocker(GHBit.enRocker.DOWN):
            radio.send_string("SUL")
            serial.write_line("SUL")
        elif GHBit.rocker(GHBit.enRocker.LEFT):
            radio.send_string("OESTE")
            serial.write_line("OESTE")
        elif GHBit.rocker(GHBit.enRocker.RIGHT):
            radio.send_string("LESTE")
            serial.write_line("LESTE")
        else:
            radio.send_string("PARADO")
            serial.write_line("PARADO")
basic.forever(on_forever)
