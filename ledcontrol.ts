//% color=#5C2D91 icon="\uf205"
//%advanced=true weight=100 
namespace K3LedControl {
    export enum ScreenMode {
        ledOn = 0,
        ledOff = 1
    }
    
    //%blockId="LCplotLedValue"
    //%block="plot led %ledNum value %value"
    //%group=Graphs
    //%ledNum.min=0 ledNum.max=4 value.min=0 value.max=5
    export function plotLedGraph(ledNum: number, value: number) {
        for (let i = 0; i < 5; i++) {
            if (i < value) {
                led.plot(ledNum, i)
            } else {
                led.unplot(ledNum, i)
            }
        }
    }
    //%blockId="LCsetPinLed"
    //%block="set %setpin to led x:%ledx y:%ledy"
    //%advanced=true
    //%group=Hardware
    //%ledx.min=0 ledx.max=4 ledy.min=0 ledy.max=4
    export function setPinLed(setpin: DigitalPin, ledx: number, ledy: number) {
        let pinboolean = 0
        if (led.point(ledx, ledy)) {
            pinboolean = 1
        } else {
            pinboolean = 0
        }
        pins.digitalWritePin(setpin, pinboolean)
    }
    //%blockId="LCtoggleRandomLed"
    //%block="toggle random led ||pause $time serial $write"
    //%group=Leds
    export function toggleRandomLed(time: number = 0, write: boolean = false) {
        time = time * 1000
        let x = randint(0, 4)
        let y = randint(0, 4)
        led.toggle(x, y)
        if (write) {
            serial.writeValue("x", x)
            serial.writeValue("y", y)
        }
        basic.pause(time)
    }
    //%blockId="LCreadLedGraph"
    //%block="read led graph on $ledNum"
    //%group="Graphs"
    //%ledNum.min=0 ledNum.max=4
    export function readLedGraph(ledNum: number) {
        let value = 0
        for (let _index = 0; _index <= 4; _index++) {
            if (led.point(ledNum, _index)) {
                value += 1
            }
        }
        return value
    }
    //%blockId="LClinearPlot"
    //%block="linear plot on $ledNum"
    //%group="Leds"
    //%ledNum.min=0 ledNum.max=24
    export function linearPlot(ledNum: number) {
        let x = Math.floor(ledNum % 5)
        let y = Math.floor(ledNum / 5)
        led.plot(x, y)
    }
    //%blockId="LCclearColumn"
    //%block="clear column $colNum"
    //%group="Leds"
    //%colNum.min=0 colNum.max=4 
    export function clearColumn(colNum: number) {
        for (let i = 0; i < 5; i++) {
            led.unplot(colNum, i)
        }
    }
    //%blockId="LCfillScreen"
    //%block="fill screen $screen"
    //%group="Leds"
    //%colNum.min=0 colNum.max=4 
    export function fillScreen(screen: ScreenMode) {
        switch (screen) {
            case ScreenMode.ledOn:
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                `)
                break
            case ScreenMode.ledOff:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                `)
                break
        }
    }   
}

