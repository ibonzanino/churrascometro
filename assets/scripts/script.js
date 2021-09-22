let inputAdults = document.getElementById('adults')
let inputKids = document.getElementById('kids')
let inputDuration = document.getElementById('duration')

let result = document.getElementById('results')

function calculate() {
    console.log('calculating...')

    let adults = inputAdults.value
    let kids = inputKids.value
    let duration = inputDuration.value

    let amountMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2 * kids)
    let amountDrink = drinkPerPerson(duration) * adults + (drinkPerPerson(duration) / 2 * kids)
    let amountBeer = beerPerPerson(duration) * adults
    
    result.innerHTML = `<p><span>${amountMeat / 1000}</span> Kilos de Carne</p>`
    result.innerHTML += `<p><span>${amountDrink / 1000}</span> Litros de Refrigerante</p>`
    result.innerHTML += `<p><span>${Math.ceil(amountBeer / 355)}</span> Latas de Cerveja</p>`

}

function meatPerPerson(duration) {
    if (duration >= 6) {
        return 650
    }else {
        return 400
    }
}

function drinkPerPerson(duration) {
    if (duration >= 6) {
        return 1500
    }else {
        return 1000
    }
}

function beerPerPerson(duration) {
    if (duration >= 6) {
        return 2000
    }else {
        return 1200
    }
}
