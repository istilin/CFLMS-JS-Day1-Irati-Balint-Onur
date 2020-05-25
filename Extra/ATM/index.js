console.log('JS is running...')

const noteNames = ['hundred', 'fifties', 'twenties', 'tens']

const calculateBankNotes = (event) => {
    event.preventDefault()
    console.log('Works...')
    document.getElementById('result').innerHTML = ''
    let requestedMoney = event.target.requestedAmount.value
    const bankNotes = [0, 0, 0, 0]

    while (requestedMoney !== 0) {

        if (requestedMoney / 100 >= 1) {
            const hundreds = Math.floor(requestedMoney / 100)
            requestedMoney -= hundreds * 100
            console.log(requestedMoney)
            bankNotes[0] = hundreds
        } else if (requestedMoney / 50 >= 1) {
            const fifties = Math.floor(requestedMoney / 50)
            requestedMoney -= fifties * 50
            bankNotes[1] = fifties
            console.log(requestedMoney)
        } else if (requestedMoney / 20 >= 1) {
            const twenties = Math.floor(requestedMoney / 20)
            requestedMoney -= twenties * 20
            bankNotes[2] = twenties
            console.log(requestedMoney)
        } else if (requestedMoney / 10 >= 1) {
            const tens = Math.floor(requestedMoney / 10)
            requestedMoney -= tens * 10
            bankNotes[3] = tens
            console.log(requestedMoney)
        }
        console.log("MONEY", requestedMoney)
    }
    generateDOM(bankNotes, noteNames)
    event.target.requestedAmount.value = ''
}

const generateDOM = (arrOfBankNotes, noteNames) => {
    const resultDiv = document.getElementById('result')

    arrOfBankNotes.map((note, i) => {
        const p = document.createElement('p')
        p.innerHTML = `${note} ${noteNames[i]}`
        resultDiv.appendChild(p)
    })
}
