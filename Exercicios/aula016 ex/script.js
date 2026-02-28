let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function IsNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // mudei 'i' para 'l' (lista) para ficar mais claro
    if(l.indexOf(Number(n)) != -1){ // Corrigido: Number e != -1
        return true
    } else {
        return false
    }
}

function adicionar(){
    // Adicionei o ! antes de inLista para significar "NÃO está na lista"
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // Limpa o resultado quando adiciona um novo
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    
    // Dica extra: Limpa o campo e foca o cursor automaticamente
    num.value = ''
    num.focus()
}

function Finalizar(){
    if (valores.length==0){
        window.alert('Adicione valores antes de finalizar!')
    }else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0
    for(let pos in valores){
        soma+= valores[pos]
        if(valores[pos]>maior)
            maior=valores[pos]
        if(valores[pos]<menor)
            menor= valores[pos]
    }
    media= soma / tot
    res.innerHTML=""
    res.innerHTML+=`<p> Ao todo, temos ${tot} número cadastrados</p>`
    res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML+=`<p>Somando todos os valores ${soma}.</p>`
    res.innerHTML+= `<p>A média dos valores digitados é ${media} </p>`
    }   
} 