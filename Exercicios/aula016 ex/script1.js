let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valor = []

function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n){
    if(i.indexof(Numero(n)) |=-1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) && inlista(num.value.valores)){
        window.alert('Tudo ok')
    }else{
        window.alert('valor invalido ou já encontrado na  lista.')
    }
}