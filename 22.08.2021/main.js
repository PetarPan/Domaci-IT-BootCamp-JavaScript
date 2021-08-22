// 1 zadatak
const main = document.createElement('div')
document.body.append(main)

const table = document.createElement('table')
const tableHead = document.createElement('th')
tableHead.textContent = 'Table Head'
const tableRow = document.createElement('tr')
const tableData = document.createElement('td')
tableData.style.border = "1px solid black"
tableData.textContent = ('Some table data')

const dodaj = document.createElement('button')
dodaj.textContent = "Dodaj red"

dodaj.addEventListener('click', () => {
    const newTableRow = document.createElement('tr')
    const newTableData = document.createElement('td')
    newTableData.textContent = 'New Table Row'
    newTableData.style.border = "1px solid blue"
    table.append(newTableRow, newTableData)
})
main.append(dodaj, table)
table.append(tableHead, tableRow)
tableRow.append(tableData)

// 2 zadatak
const div = document.createElement('div')
div.textContent = "Klikni na checkbox da se vidi kalkulator"
const checkbox = document.createElement('input')
checkbox.setAttribute('type', 'checkbox')

main.append(div, checkbox)
const main2 = document.createElement('div')
document.body.append(main2)
const input1 = document.createElement('input')
input1.setAttribute("type", "number")

const input2 = document.createElement('input')
input2.setAttribute("type", "number")

const saberi = document.createElement('button')
saberi.textContent = 'Saberi'

const rezultat = document.createElement('p')

main2.classList.add('pokazi')
checkbox.addEventListener('click', () => {
    main2.classList.toggle('pokazi') = 'block'
})

main2.append(input1, input2, saberi)

saberi.addEventListener('click', () => {
    rezultat.innerHTML = `Zbir dva input polja je: ${Number(input1.value) + Number(input2.value)}`
    main2.append(rezultat)

})