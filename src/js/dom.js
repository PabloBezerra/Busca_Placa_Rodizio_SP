import { validaPlaca, diaSemana, clear } from "./exec"

const form = document.querySelector("#form")
const input = document.querySelector("#placa")
const pRec = document.querySelector("#rec")
const dia = document.querySelector("#dia")

form.addEventListener( "input" ,(e)=>{
    e.preventDefault()
    if(input.value.length === 7 ) return printInfo(validaPlaca(input.value))
    clear(pRec)
    clear(dia)
})

function printInfo(obj){
    if (obj.sucesso){
        pRec.innerHTML = 'O dia de rodízio do seu carro é na'
        dia.innerHTML = diaSemana(obj.valor)
        return
    }
    pRec.innerHTML = obj.valor
    return
}