/*const minCeiled = Math.ceil(0)
const maxFloored = Math.floor(10)

console.log(Math.floor(Math.random() * (maxFloored - minCeiled)))*/

function randomNumberGenerate() {
    const minValue = Math.ceil(document.querySelector("#input-min").value)
    const maxValue = Math.floor(document.querySelector("#input-max").value)

    const showResult = document.querySelector(".show-result")

    if (minValue >= maxValue) {
        showResult.innerHTML = "O valor mínimo tem que ser MENOR que o valor máximo"
    } else if (minValue < 0) {
        showResult.innerHTML = "O valor mínimo tem que ser MAIOR que 0"
    } else {
        const result = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
        showResult.innerHTML = `Muito bem, seu número sorteado foi: ${result}`
    }
}
