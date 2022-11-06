OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Polvo (ug/m3): ")
    OLED.writeNum(Environment.ReadDust(DigitalPin.P9, AnalogPin.P10))
    basic.pause(60000)
})
