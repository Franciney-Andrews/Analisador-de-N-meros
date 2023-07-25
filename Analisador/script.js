let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        window.alert(`O valor ${n}, não está entre 1 e 100.`)
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        window.alert(`O valor já foi adicionado ou inexistente`)
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]

        }
        media = parseFloat(soma / tot).toFixed(2)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma de todos os valores é  ${soma}. </p>`
        res.innerHTML += `<p> A média da soma de todos os valores é ${media}. </p>`
    }
}