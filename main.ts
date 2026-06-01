function first_tripleMission () {
    block1 = item_list.shift()
    block2 = item_list.shift()
    block3 = item_list.shift()
    check_process += 1
    basic.showNumber(check_process)
    if (block1 == "red") {
        DropR()
        wait_slide = 0
        radio.sendString("red")
        basic.pause(300)
    } else if (block1 == "green") {
        DropR()
        wait_slide = 0
        radio.sendString("green")
        basic.pause(300)
    } else if (block1 == "blue") {
        DropR()
        wait_slide = 0
        radio.sendString("blue")
        basic.pause(300)
    }
    if (block2 == "red") {
        DropR()
        wait_slide = 0
        radio.sendString("red")
        basic.pause(300)
    } else if (block2 == "green") {
        DropR()
        wait_slide = 0
        radio.sendString("green")
        basic.pause(300)
    } else if (block3 == "blue") {
        DropR()
        wait_slide = 0
        radio.sendString("blue")
        basic.pause(300)
    }
    if (block3 == "red") {
        DropR()
        wait_slide = 0
        radio.sendString("red")
        basic.pause(300)
    } else if (block3 == "green") {
        DropR()
        wait_slide = 0
        radio.sendString("green")
        basic.pause(300)
    } else if (block3 == "blue") {
        DropR()
        wait_slide = 0
        radio.sendString("blue")
        basic.pause(300)
    }
}
function sho_digitalSensor () {
    while (true) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showNumber(pins.digitalReadPin(DigitalPin.P8))
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
    }
}
function sho_spinRGyro () {
    while (true) {
        current = input.compassHeading()
        GigoMotor.motorControl2(GigoMotor.MotorChannel.E, GigoMotor.MotorShaftDirection.LOW, 50)
        GigoMotor.motorControl2(GigoMotor.MotorChannel.F, GigoMotor.MotorShaftDirection.LOW, 50)
        if (current >= 300) {
            GigoMotor.motorStop1(GigoMotor.MotorChannel.E)
            GigoMotor.motorStop1(GigoMotor.MotorChannel.F)
            break;
        }
    }
}
function before_trackingline () {
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    200
    )
    basic.pause(400)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    0
    )
    basic.pause(300)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    150
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    150
    )
    basic.pause(900)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    0
    )
    basic.pause(300)
}
function first_mission () {
    current_color = item_list.shift()
    check_process += 1
    basic.showNumber(check_process)
    if (current_color == "red") {
        DropR()
        wait_check = 0
        radio.sendString("redtoauto")
        basic.pause(300)
    } else if (current_color == "green") {
        DropR()
        wait_check = 0
        radio.sendString("greentoauto")
        basic.pause(300)
    } else if (current_color == "blue") {
        DropR()
        wait_check = 0
        radio.sendString("bluetoauto")
        basic.pause(300)
    }
}
input.onButtonPressed(Button.A, function () {
    before_trackingline()
    sho_trackingline()
})
function sho_checkSensor () {
    while (true) {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P8))
    }
}
function sho_trackingline () {
    while (true) {
        if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            sensors.DDMmotor(
            AnalogPin.P15,
            0,
            AnalogPin.P16,
            0
            )
            sensors.DDMmotor(
            AnalogPin.P13,
            1,
            AnalogPin.P14,
            200
            )
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            sensors.DDMmotor(
            AnalogPin.P15,
            0,
            AnalogPin.P16,
            160
            )
            sensors.DDMmotor(
            AnalogPin.P13,
            1,
            AnalogPin.P14,
            0
            )
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            sensors.DDMmotor(
            AnalogPin.P15,
            0,
            AnalogPin.P16,
            0
            )
            sensors.DDMmotor(
            AnalogPin.P13,
            0,
            AnalogPin.P14,
            0
            )
            basic.pause(100)
            if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
                sensors.DDMmotor(
                AnalogPin.P15,
                0,
                AnalogPin.P16,
                0
                )
                sensors.DDMmotor(
                AnalogPin.P13,
                0,
                AnalogPin.P14,
                0
                )
                basic.showLeds(`
                    . # # # .
                    # . . . .
                    . # # # .
                    . . . . #
                    . # # # .
                    `)
                basic.pause(300)
                first_mission()
                basic.pause(300)
                mission_loop()
            }
        } else {
            sensors.DDMmotor(
            AnalogPin.P15,
            0,
            AnalogPin.P16,
            150
            )
            sensors.DDMmotor(
            AnalogPin.P13,
            1,
            AnalogPin.P14,
            150
            )
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    DropL()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "red") {
        item_list.push("red")
        count_list += 1
        basic.showNumber(count_list)
    } else if (receivedString == "green") {
        item_list.push("green")
        count_list += 1
        basic.showNumber(count_list)
    } else if (receivedString == "blue") {
        item_list.push("blue")
        count_list += 1
        basic.showNumber(count_list)
    }
    if (receivedString == "task") {
        wait_check = 1
    }
})
input.onButtonPressed(Button.B, function () {
    DropR()
})
function DropL () {
    GigoMotor.continuousServo(GigoMotor.ServoChannel.P16, GigoMotor.SvconShaft.Right)
    basic.pause(350)
    GigoMotor.continuousServo(GigoMotor.ServoChannel.P16, GigoMotor.SvconShaft.Left)
    basic.pause(350)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function mission_loop () {
    while (true) {
        if (wait_check == 1) {
            current_color = item_list.shift()
            check_process += 1
            basic.showNumber(check_process)
            if (check_process <= 5) {
                if (current_color == "red") {
                    DropR()
                    wait_check = 0
                    radio.sendString("redtoauto")
                    basic.pause(300)
                } else if (current_color == "green") {
                    DropR()
                    wait_check = 0
                    radio.sendString("greentoauto")
                    basic.pause(300)
                } else if (current_color == "blue") {
                    DropR()
                    wait_check = 0
                    radio.sendString("bluetoauto")
                    basic.pause(300)
                }
            } else if (check_process >= 6) {
                if (current_color == "red") {
                    DropL()
                    wait_check = 0
                    radio.sendString("redtoauto")
                    basic.pause(300)
                } else if (current_color == "green") {
                    DropL()
                    wait_check = 0
                    radio.sendString("greentoauto")
                    basic.pause(300)
                } else if (current_color == "blue") {
                    DropL()
                    wait_check = 0
                    radio.sendString("bluetoauto")
                    basic.pause(300)
                }
            }
            basic.pause(100)
        } else if (wait_check == 0) {
            basic.showIcon(IconNames.No)
        }
    }
}
function tripleMission_loop () {
    while (true) {
        if (wait_slide == 1) {
            block1 = item_list.shift()
            block2 = item_list.shift()
            block3 = item_list.shift()
            check_process += 1
            basic.showNumber(check_process)
            if (check_process <= 5) {
                if (block1 == "red") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block1 == "green") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block1 == "blue") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
                if (block2 == "red") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block2 == "green") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block2 == "blue") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
                if (block3 == "red") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block3 == "green") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block3 == "blue") {
                    DropR()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
            } else if (check_process >= 6) {
                if (block1 == "red") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block1 == "green") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block1 == "blue") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
                if (block2 == "red") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block2 == "green") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block2 == "blue") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
                if (block3 == "red") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("red")
                    basic.pause(300)
                } else if (block3 == "green") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("green")
                    basic.pause(300)
                } else if (block3 == "blue") {
                    DropL()
                    wait_slide = 0
                    radio.sendString("blue")
                    basic.pause(300)
                }
            }
            basic.pause(100)
        } else if (wait_slide == 0) {
            basic.showIcon(IconNames.No)
        }
    }
}
function sho_trackingline1 () {
    while (true) {
        if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            basic.pause(5000)
            if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
                GigoMotor.motorStop1(GigoMotor.MotorChannel.E)
                GigoMotor.motorStop1(GigoMotor.MotorChannel.F)
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    # # . # #
                    # # . # #
                    # # . # #
                    `)
                basic.pause(300)
                mission_loop()
            }
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            basic.showLeds(`
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                # # . . .
                `)
            GigoMotor.motorControl2(GigoMotor.MotorChannel.F, GigoMotor.MotorShaftDirection.HIGH, 60)
            GigoMotor.motorStop1(GigoMotor.MotorChannel.E)
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . # #
                . . . # #
                . . . # #
                `)
            GigoMotor.motorControl2(GigoMotor.MotorChannel.E, GigoMotor.MotorShaftDirection.LOW, 60)
            GigoMotor.motorStop1(GigoMotor.MotorChannel.F)
        } else if (pins.digitalReadPin(DigitalPin.P8) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            GigoMotor.motorControl2(GigoMotor.MotorChannel.E, GigoMotor.MotorShaftDirection.LOW, 60)
            GigoMotor.motorControl2(GigoMotor.MotorChannel.F, GigoMotor.MotorShaftDirection.HIGH, 60)
        }
    }
}
function DropR () {
    GigoMotor.continuousServo(GigoMotor.ServoChannel.P1, GigoMotor.SvconShaft.Left)
    basic.pause(350)
    GigoMotor.continuousServo(GigoMotor.ServoChannel.P1, GigoMotor.SvconShaft.Right)
    basic.pause(350)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
let wait_check = 0
let current_color = ""
let current = 0
let wait_slide = 0
let block3 = ""
let block2 = ""
let block1 = ""
let check_process = 0
let count_list = 0
let item_list: string[] = []
radio.setGroup(24)
radio.setTransmitPower(7)
item_list = []
count_list = 0
let check_inList = 0
check_process = 0
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.showLeds(`
    . # # # .
    # . . . .
    . # # # .
    . . . . #
    . # # # .
    `)
let directionR = 90
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
    	
    } else if (input.buttonIsPressed(Button.B)) {
    	
    } else if (count_list > 8) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showNumber(count_list)
        basic.clearScreen()
        basic.showLeds(`
            . # # # .
            # . . . .
            . # # # .
            . . . . #
            . # # # .
            `)
        before_trackingline()
        basic.pause(300)
        sho_trackingline()
    }
})
