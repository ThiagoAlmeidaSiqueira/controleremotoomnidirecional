function retornaDirecao () {
    X = Math.map(pins.analogReadPin(AnalogPin.P2), 1023, 0, -512, 512)
    Y = Math.map(pins.analogReadPin(AnalogPin.P1), 1023, 0, -512, 512)
    modulo = Math.sqrt(Y ** 2 + X ** 2)
    angulo = Math.atan2(Y, X)
    quadrante = Math.trunc((angulo * (180 / 3.14) + 382.5) % 360 / 45)
    if (modulo >= 40) {
        if (quadrante == 0) {
            basic.showArrow(ArrowNames.East)
            return "LESTE"
        } else if (quadrante == 1) {
            basic.showArrow(ArrowNames.NorthEast)
            return "NORDESTE"
        } else if (quadrante == 2) {
            basic.showArrow(ArrowNames.North)
            return "NORTE"
        } else if (quadrante == 3) {
            basic.showArrow(ArrowNames.NorthWest)
            return "NOROESTE"
        } else if (quadrante == 4) {
            basic.showArrow(ArrowNames.West)
            return "OESTE"
        } else if (quadrante == 5) {
            basic.showArrow(ArrowNames.SouthWest)
            return "SUDOESTE"
        } else if (quadrante == 6) {
            basic.showArrow(ArrowNames.South)
            return "SUL"
        } else if (quadrante == 7) {
            basic.showArrow(ArrowNames.SouthEast)
            return "SUDESTE"
        }
    }
    basic.showIcon(IconNames.Square)
    return "PARADO"
}
let direcao = ""
let quadrante = 0
let angulo = 0
let modulo = 0
let Y = 0
let X = 0
radio.setGroup(0)
serial.redirectToUSB()
basic.forever(function () {
    if (true) {
        if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
            radio.sendString("ANTIHORARIO")
            serial.writeLine("ANTIHORARIO")
            basic.showLeds(`
                # # # # #
                . # # . #
                . . # . #
                . . . . #
                # # # # #
                `)
        } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
            radio.sendString("HORARIO")
            serial.writeLine("HORARIO")
            basic.showLeds(`
                # # # # #
                # . # # .
                # . # . .
                # . . . .
                # # # # #
                `)
        } else {
            direcao = retornaDirecao()
            radio.sendString(direcao)
            serial.writeLine(direcao)
        }
    } else {
    	
    }
})
