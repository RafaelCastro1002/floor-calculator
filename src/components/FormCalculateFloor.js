import Input from "./Input"
import Button from "./Button"
import Select from "./Select"

const $ = document.querySelector.bind(document)

const floorTypeOptions = [
    {
        value: "35",
        description: "Cerâmica"
    },
    {
        value: "125",
        description: "Porcelanato"
    },
    {
        value: "330",
        description: "Madeira"
    }
]

const inputWidthId = "input-width"
const inputLengthId = "input-length"
const selectFloorTypeId = "floor-type"

const Form = () => {
    const inputContent = `
        <form id="form-calculate">
            ${Input({ id: inputWidthId, type: "text", placeholder: "Insira a largura", label: "Largura:", required: true })}
            ${Input({ id: inputLengthId, type: "text", placeholder: "Insira o comprimento", label: "Comprimento:", required: true })}
            ${Select({ id: selectFloorTypeId, name: selectFloorTypeId, options: floorTypeOptions, label: "Selecione o tipo de piso:" })}
            ${Button({ label: "Calcular" })}
        </form>
    `

    insertSubmitFunctionOnForm()

    return inputContent
}

const calculate = (e) => {
    e.preventDefault()

    console.log('aqui')

    const widthValue = Number($(`#${inputWidthId}`).value)
    const lengthValue = Number($(`#${inputLengthId}`).value)
    const floorTypeValue = Number($(`#${selectFloorTypeId}`).value)

    const squareMetersArea = widthValue * lengthValue

    const floorPrice = squareMetersArea * floorTypeValue

    removeResultFromContainerApp()

    insertResultOnContainerApp(squareMetersArea, floorPrice)
}

const insertSubmitFunctionOnForm = () => {
    const interval = setInterval(() => {
        if ($("#form-calculate")) {
            $("#form-calculate").onsubmit = calculate
            clearInterval(interval)
        }
    }, 1)
}

const insertResultOnContainerApp = (squareMetersArea, floorPrice) => {
    const resultArea = document.createElement('div')

    resultArea.id = "#result-content"

    resultArea.innerHTML = `
        <div id="result-content">
            <h3> <b>Resultado:</b> </h3>
            <p> <b>Quantidade de piso:</b> ${squareMetersArea} m²</p>
            <p> <b>Preço:</b> ${floorPrice} reais</p>
        </div>
    `

    $("#app").insertAdjacentElement('beforeend', resultArea)
}

const removeResultFromContainerApp = () => {
    const resultContent = $('#result-content')
    resultContent && resultContent.remove()
}

export default Form