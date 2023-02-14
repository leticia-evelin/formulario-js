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

    if((Number(nota1.value) + Number(nota2.value)) / 2 >= 5 ){
        formulario.classList.add('sombraAzul')
        situacao.value = 'Aprovado'
        

    }else if ((Number(nota1.value) + Number(nota2.value)) / 2 < 5){
        formulario.classList.remove('sombraAzul')
        formulario.classList.add('sombraVermelha')
        situacao.value = 'Reprovado'
       
    }   
}
calcular.addEventListener('click', somar)

