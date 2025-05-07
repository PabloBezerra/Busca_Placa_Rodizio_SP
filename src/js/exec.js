const modelPlaca = /^[a-z]{3}\d([a-j]|\d)\d{2}$/i

export function validaPlaca(placa){
    if (modelPlaca.test(placa)){
        return {
            sucesso : true,
            valor: lastNumber(placa)
        }
    }
    return {
        sucesso : false, 
        valor: 'Dados inválidos! Por favor corrija as informações'
    }
}

function lastNumber(placa){
    return placa.slice(-1)
}

export function clear(dom){
    dom.innerText = ''
}

export function diaSemana(num){
    if(num == 1 | num == 2)return "Segunda-feira"
    if(num == 3 | num == 4)return "Terça-feira"
    if(num == 5 | num == 6)return "Quarta-feira"
    if(num == 7 | num == 8)return "Quinta-feira"
    if(num == 9 | num == 0)return "Sexta-feira"
}