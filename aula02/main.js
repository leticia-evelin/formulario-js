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

    if(nota >= 5){
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('aprovado')
    } else {
        novaDiv.classList.remove('aluno')
        novaDiv.classList.add('reprovado')
    }

    novaDiv.innerHTML = `<h2 class = "aluno__title">${aluno}</h2> + <h2 class = "mediaDiv">${nota}</h2>`

    console.log(typeof(nota))

    //const notaDiv = document.createElement('mediaDiv')
    //notaDiv.classList.add('nota')
    //notaDiv.innerHTML = `<p class = "nota__media">${nota}</p>`

    //novaDiv.append(notaDiv)
    container.appendChild(novaDiv)
    //container.appendChild(notaDiv)
    return 'teste'

    
}

const handleClick = () => {
    const nomeAluno = prompt('Digite um nome para o card')
    const notaAluno =  prompt('Digite a média')
       

    console.log(notaAluno)

    if(notaAluno == "" ){
        alert('ERRO: Por favor, preencha todos os campos!')
    } else if ( isNaN(notaAluno)){
        alert('ERRO: Por favor, digite apenas números!')
    }   else if (notaAluno < 0 || notaAluno > 10) {
        alert('ERRO: Digite notas de 0 até 10')
    } else {
        adicionarCard(nomeAluno, notaAluno)
    }
  
}
adicionar.addEventListener('click', handleClick)

//SOLID - Responsabilidade unica
// funções puras