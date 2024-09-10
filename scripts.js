const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonmapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')

function formatCurrrency (value) {
const newValue = value.toLocaleString('pt-br',{
    style:'currency',
    currency: 'BRL',
})
return newValue


}
function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += ` 
        <li>
           <img src=  ${product.src}>  
            <p> ${product.name}</p>
            <p class= 'item-price'>r$  ${ formatCurrrency(product.price)} </p>
        </li>
        `

    })


    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, // 10% de desconto


    }))


    showAll(newPrices)

}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
   
        <li>
          <p>O valor total dos itens é  ${ formatCurrrency(totalValue)} </p>
        </li>
    `
    console.log(totalValue)

}

function filterAllItems() {
    const filterjustVegan = menuOptions.filter((product) => product.vegan == true)


    showAll(filterjustVegan)

}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonmapAll.addEventListener('click', mapAllItems)

sumAll.addEventListener('click',sumAllItems)

filterAll.addEventListener('click ', filterAllItems)