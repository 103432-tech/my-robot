hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, 90)
    basic.pause(1000)
    hummingbird.setPositionServo(FourPort.One, 180)
    basic.pause(1000)
})
