'use strict'

//const nome = ['Leticia', 18, jandira]

import { produtos } from "./produtos.js"

// desestruturação
// const [nota1, nota2, nota3, nota4] = [4, 8, 7, 5]
// const [nota1] = {nome:"Leticia", nota:8 }

//console.log(produtos[5].name)

// ex:
//const precos = [10, 25, 57, 51]

// const limite = precos.length
// const precosFrete = []
// for(let i = 0; i < limite; i++){
//     precosFrete[i] = precos[i] + 2
// }

// ou 
// const limite = precos.length
// const precosFrete = []
// let i = 0
// while ( i < limite ){
//     precosFrete[i] = precos[i] + 2
//     i++
// }
//  ou
// const adicionarFrete = (preco) => preco + 2
// const precosFrete = precos.map(adicionarFrete)

// console.log(precosFrete)


const criarCard = ( produto ) => {
    const card = document.createElement ( 'div' )
    card.classList.add('card')

    const img = document.createElement ( 'img' )
    img.classList.add('card__image')
    img.src = `./img/${produto.image}`

    const titulo = document.createElement ( 'h5' )
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement ( 'p' )
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preco = document.createElement ( 'span' )
    preco.classList.add('card__price')
    preco.textContent = produto.price


    card.append(img, titulo, descricao, preco)

    return card

}


const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map( criarCard )

    //container.replaceChildren(...cards)
    container.append(...cards)
}


carregarProdutos()

