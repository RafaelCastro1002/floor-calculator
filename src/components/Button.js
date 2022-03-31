const Button = ({ id = "button-submit", type = "submit", label = "button" }) => {
    const inputContent = `
        <button id="${id}" type="${type}">${label}</button>
        <br />
    `

    return inputContent
}

export default Button