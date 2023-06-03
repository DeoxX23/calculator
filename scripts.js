

const clearDisplay = () => {
    document.querySelector(".display").value = ""
}

const addCaracter = (caracter) => {
    let valorDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = valorDisplay + caracter
}

const resultadoDisplay = () => {
    
    let valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}

const inverte = () => {
    let valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}