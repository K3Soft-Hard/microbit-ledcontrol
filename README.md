>  Otvoriť túto stránku na [https://k3soft-hard.github.io/microbit-ledcontrol/](https://k3soft-hard.github.io/microbit-ledcontrol/)

## Introduction
![icon](https://github.com/K3Soft-Hard/microbit-ledcontrol/raw/master/icon.png)

This extension allows better control of the 5x5 display
on a micro:bit

## Usage Example

* Test code
```blocks
basic.forever(function () {
    K3LedControl.fillScreen(K3LedControl.ScreenMode.chessboard)
    basic.pause(200)
    K3LedControl.fillScreen(K3LedControl.ScreenMode.invertedChessboard)
    basic.pause(200)
})

```

* Fill screen
```blocks
K3LedControl.fillScreen(K3LedControl.ScreenMode.ledOn)
```

* Show value on column
```blocks
K3LedControl.plotLedGraph(0, 0)
```

* Read value on column
```blocks
(K3LedControl.readLedGraph(0)
```

* Linear Plot
```blocks
K3LedControl.linearPlot(0, K3LedControl.Direction.horizontal)
```

* Test code for automated pin switching
```blocks
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 0)
})
basic.forever(function () {
    K3LedControl.setPinLed(DigitalPin.P0, 0, 0)
})
```

* Plot rectangle
```blocks
K3LedControl.plotRectangle(1,1,3,3)
```






## Použiť ako rozšírenie

Tento odkladací priestor možno pridať ako **rozšírenie** v aplikácii MakeCode.

* otvoriť [https://makecode.microbit.org/](https://makecode.microbit.org/)
* kliknite na **Nový projekt**
* kliknite na **Rozšírenia** v ponuke ozubeného kolieska
* vyhľadať **https://github.com/k3soft-hard/microbit-ledcontrol** a importovať

## Upraviť tento projekt

Ak chcete upraviť tento odkladací priestor v aplikácii MakeCode.

* otvoriť [https://makecode.microbit.org/](https://makecode.microbit.org/)
* kliknite na **Importovať** a potom na **Importovať adresu URL**
* prilepte **https://github.com/k3soft-hard/microbit-ledcontrol** a kliknite na tlačidlo importu

#### Metadáta (používané na vyhľadávanie, vykresľovanie)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
