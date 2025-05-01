import { validaPlaca, diaSemana } from "./exec"

const form = document.querySelector("#form")
const input = document.querySelector("#placa")
const pRec = document.querySelector("#rec")
const dia = document.querySelector("#dia")

form.addEventListener( "submit" ,(e)=>{
    e.preventDefault()
    printInfo(validaPlaca(input.value))
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