let output = document.getElementById("output")
let btns = document.getElementsByClassName("btn")
let testCalc = false;

Array.from(btns).forEach(btn =>{
    btn.addEventListener("click", (e) => {
        if(e.target.id === "result") {
            output.innerText= eval(output.innerText)
            testCalc = true;
        } else if(e.target.id === "clear") {
            output.innerText = ""
        } else if(e.target.id ==="delete") {
            output.innerText = output.innerText.slice(0, -1)
        } else if(e.target.id === "percent") {
            output.innerText = eval(output.innerText)/100
            testCalc = true;
        }
        else {
            if(testCalc == true) {
                output.innerText = btn.innerText
                testCalc = false
            } else {
                output.innerText += btn.innerText
            }
        }
    })
})

const pressedKey = (e) =>{
    let key = e.key
    let pattern = "1234567890+-*/%.()"
    if (pattern.includes(key)) {
        if(testCalc == true) {
            output.innerText = key;
            testCalc = false;
        } else {
            output.innerText += key;
        }
        
    } else if (key === "Backspace") {
        output.innerText = output.innerText.slice(0, -1)
    } else if (key === "Enter") {
        output.innerText = eval(output.innerText)
        testCalc = true;
    }
}
document.addEventListener("keydown", pressedKey)
