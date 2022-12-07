let output = document.getElementById("output_screen")
let btns = document.getElementsByClassName("btn")
let history = document.getElementById("result_history")
let testCalc = false;

Array.from(btns).forEach(btn =>{
    btn.addEventListener("click", (e) => {
        if(e.target.id === "result") {
            fillHistory(output.innerText)
            output.innerText= eval(output.innerText)
            testCalc = true
        } else if(e.target.id === "clear") {
            output.innerText = ""
        } else if(e.target.id ==="delete") {
            output.innerText = output.innerText.slice(0, -1)
        } else if(e.target.id === "percent") {
            fillHistory(output.innerText)
            output.innerText = eval(output.innerText)/100
        } else if (e.target.id === "parentheses") {
            if(output.innerText.includes("("))
            {
                output.innerText += ")"
            }
            else {
                output.innerText += "("
            }
        }
        else {
            if(testCalc == true) {
                output.innerText = btn.innerText
                testCalc = false
            } else {
                output.innerText += btn.innerText
            }
        }
        btn.blur();
    })
})

const pressedKey = (e) =>{
    let key = e.key
    let pattern = "1234567890+-*/%.()"
    if (pattern.includes(key)) {
        if(testCalc == true) {
            output.innerText = key
            testCalc = false
        } else {
            output.innerText += key
        }
        
    } else if (key === "Backspace") {
        output.innerText = output.innerText.slice(0, -1)
    } else if (key === "Enter") {
        fillHistory(output.innerText)
        output.innerText = eval(output.innerText)
        testCalc = true
    }
}
document.addEventListener("keydown", pressedKey)

//result history functions

const resultHistory = () =>{
    if(history.style.display == "none" || !history.style.display){
        history.style.display = "block"
    } else {
        history.style.display = "none"
    }
}
document.querySelector("i").addEventListener("click", resultHistory)

const fillHistory = (op) => {
    let paragraph = document.createElement("p")
    let outcome = eval(op)
    let result = `${op} = ${outcome}`
    paragraph.innerText =  result;
    history.appendChild(paragraph)
}