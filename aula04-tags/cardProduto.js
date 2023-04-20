'use strict'

class card extends HTMLElement{
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'})
        this.name = 'Produto'
        this.image = null
        this.description = null
        this.price = ""
    }

    static get observedAttributes(){
        return['name', 'image', 'description', 'price']
    }

    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue //colchetes para mandar variavel
    }

    connectedCallback(){
        //metodos/função
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles(){
        const css = document.createElement('style')
        css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: 0;
        }
        .card{
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 10px;
            cursor: pointer;
        }
        
        .card:hover{
            box-shadow: 0px 0px 8px plum;
        }
        
        .card__image{
            width: 200px;
            height: 200px;
            object-fit: contain;
            background-image: url(${this.image});
            background-size: cover;
        }
        
        .card__title{
            font-size: 1.5rem;
            color: purple;
        }
        
        .card__description{
            font-size: 1rem;
            text-align: justify;
        }
        
        .card__price{
            width: 100%;
            font-size: 1.5rem;
            font-weight: 900;
            color: green;
        }
        `
        return css
    }
    component(){
        const card = document.createElement ( 'div' )
        card.classList.add('card')
    
        const img = document.createElement ( 'img' )
        img.classList.add('card__image')
    
        const titulo = document.createElement ( 'h5' )
        titulo.classList.add('card__title')
        titulo.textContent = this.name
    
        const descricao = document.createElement ( 'p' )
        descricao.classList.add('card__description')
        descricao.textContent = this.description
    
        const preco = document.createElement ( 'span' )
        preco.classList.add('card__price')
        preco.textContent = this.price
    
    
        card.append(img, titulo, descricao, preco)
    
        return card
    }
}

customElements.define('card-produto', card)