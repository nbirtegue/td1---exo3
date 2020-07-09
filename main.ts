input.onButtonPressed(Button.A, function () {
    nb += 1
})
let nb = 1
basic.forever(function () {
    while (nb <= 10) {
        basic.showNumber(nb)
    }
})
