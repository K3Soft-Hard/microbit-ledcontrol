//% color=#5C2D91 icon="\uf205"
//%advanced=true weight=100 
namespace LedControl {

    //%blockId="LCplotLedValue"
    //%block="plot led %led value %value"
    //%group=Graphs
    export function plotLedGraph(ledNum: number, value: number) {
        led.unplot(ledNum, 0)
        led.unplot(ledNum, 1)
        led.unplot(ledNum, 2)
        led.unplot(ledNum, 3)
        led.unplot(ledNum, 4)
        for (let _index = 0; _index <= value; _index++) {
            led.plot(ledNum, 4 - (_index - 1))
        }
    }
    //%blockId="LCsetPinLed"
    //%block="set %setpin to led x:%ledx y:%ledy"
    //%advanced=true
    //%group=Hardware
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
    export function readLedGraph(ledNum: number) {
        let value = 0
        for (let _index = 0; _index <= 4; _index++) {
            if (led.point(ledNum, _index)) {
                value += 1
            }
        }
        return value
    }
}

