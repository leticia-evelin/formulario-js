'use strict'

// 1 - const
// 2 - let
// 3 - var

const nota1 = document.getElementById('nota1')
const nota2 = document.getElementById('nota2')
const calcular = document.getElementById('calcular')
const situacao = document.getElementById('situacao')
const media = document.getElementById('media')
const formulario = document.getElementById('formulario')

function somar (){
    // situacao.value = (Number(nota1.value) + Number(nota2.value))
    // formulario.classList.add('sombraVerde')
}
 function situacao(){
    media.value = (Number(nota1.value) + Number(nota2.value)) / '2' ;

        if(media >= 5 ){
            situacao.value = 'Aprovado'
            formulario.classList.add('sombraAzul')

        }else(media < 5){
            situacao.value = 'Reprovado'
            formulario.classList.add('sombraVermelha')
        }   

    }

calcular.addEventListener('click', situacao)

