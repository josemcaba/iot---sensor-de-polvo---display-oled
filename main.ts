OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Polvo (ug/m3): ")
    OLED.writeNum(Environment.ReadDust(DigitalPin.P6, AnalogPin.P1))
    basic.pause(2000)
})
