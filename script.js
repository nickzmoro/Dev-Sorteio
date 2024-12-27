/*const minCeiled = Math.ceil(0)
const maxFloored = Math.floor(10)

console.log(Math.floor(Math.random() * (maxFloored - minCeiled)))*/

function randomNumberGenerate() {
    const minValue = Math.ceil(document.querySelector("#input-min").value)
    const maxValue = Math.floor(document.querySelector("#input-max").value)

    const result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)

    alert(`Muito bem, seu número sorteado foi: ${result}`)
}