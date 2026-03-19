hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.Four, 90)
    basic.pause(1000)
    hummingbird.setPositionServo(FourPort.Four, 180)
    basic.pause(1000)
})
basic.forever(function () {
    hummingbird.setRotationServo(FourPort.Three, 90)
    basic.pause(1000)
    hummingbird.setRotationServo(FourPort.Three, 180)
    basic.pause(1000)
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.Two,
    0,
    100,
    100
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.Two,
    0,
    100,
    100
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.Two,
    100,
    100,
    100
    )
    basic.pause(500)
})
basic.forever(function () {
    hummingbird.setTriLED(
    TwoPort.One,
    100,
    0,
    0
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    0,
    100
    )
    basic.pause(500)
    hummingbird.setTriLED(
    TwoPort.One,
    0,
    100,
    0
    )
    basic.pause(500)
})
basic.forever(function () {
    hummingbird.setRotationServo(FourPort.Two, 90)
    basic.pause(1000)
    hummingbird.setRotationServo(FourPort.Two, 180)
    basic.pause(1000)
})
