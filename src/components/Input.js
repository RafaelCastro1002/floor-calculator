const Input = ({ id, type, placeholder, label = "input", required = false }) => {
    const inputContent = `
        <div class="container-input">
            <label class="input-label">${label}</label> <br />
            <input id="${id}" type="${type}" placeholder="${placeholder}" required="${required}" />
        </div>
        <br />
    `

    return inputContent
}

export default Input