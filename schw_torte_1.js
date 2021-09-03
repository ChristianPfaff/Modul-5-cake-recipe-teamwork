// ------------section-2------------------------------------

let inputField = document.querySelector('#inputField')
inputField.addEventListener('click', add)

let ingredientList = [
  4, 0.25, 2, 100,
  75, 30, 1, 0.5,
  50, 20, 1, 3, 3,
  2, 0.5, 1, 1,
  1, 12, 100
]


function add() {
  let item = document.getElementById('inputField').value

  for (let i in ingredientList) {
    let factor = ingredientList[i]
    let result = item * factor
    result = result.toFixed(2)

    document.getElementById('item-' + String(Number(i) + 1)).innerHTML = `${result}`
  }
}
