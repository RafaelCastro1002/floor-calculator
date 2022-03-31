import FormCalculateFloor from './src/components/FormCalculateFloor'
import './style.css'

const $ = document.querySelector.bind(document)

$("#app").innerHTML = `
  <h1 id="title-floor-calc">Calculadora de Pisos</h1>
  ${FormCalculateFloor()}
`

