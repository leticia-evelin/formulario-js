'use strict' //mostrar possiveis erros

//receber o botao
const adicionar = document.getElementById('add')

//const adicionarCard = () => alert ('Olá Mundo!')

//ou

// function adicionarCard() {
//     alert('Olá mundo!')
// }

// const adicionarCard = () => {
//     // -const container = document.getElementById('container')

//     //qualquer tipo de seleção do css
//     //const container = document.querySelector('container')

//     // - container.innerHTML += '<div class="items">Leticia Evelin</div>'
//     // container.innerHTML = container.innerHTML + '<div class="items"> Leticia Evelin </div>'
// }
  
const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')

    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class = "aluno__title">${aluno}</h2>`

    const notaDiv = document.createElement('mediaDiv')
    notaDiv.classList.add('nota')
    notaDiv.innerHTML = `<p class = "nota__media">${nota}</p>`

    novaDiv.append(notaDiv)
    container.appendChild(novaDiv)
    //container.appendChild(notaDiv)
    return 'teste'

    
}

const handleClick = () => {
    const aluno = {

        nome :  prompt('Digite um nome para o card'),
        nota : prompt('Digite a média')
    }
    
    adicionarCard(nomeAluno, notaAluno)

   

     if(notaAluno >= 5 ){
         novaDiv.classList.add('aprovado')
     }else(notaAluno < 5)
         novaDiv.classList.add('reprovado')
}
adicionar.addEventListener('click', handleClick)

//SOLID - Responsabilidade unica
// funções puras