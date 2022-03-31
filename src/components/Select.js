const Select = ({ id, name, options, label = "select" }) => {
    const inputContent = `
        <div>
            <label class="input-label">${label}</label> <br />
            <select id="${id}" name="${name}">
                ${options.map(({ value, description }) => (`<option value="${value}">${description}</option>`))}
            </select>
        </div>
        <br />
    `

    return inputContent
}

export default Select