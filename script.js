let but = document.getElementById("throwButton1")
but.textContent = "Throw Dice"

document.addEventListener('DOMContentLoaded', () => {
    let divElem = document?.createElement('div')
    divElem.id = "div1"
})

function handleChange(e) {
    let diceNum = +e.target.value
    let resultsDiv = document.getElementById('resultBox1')
    resultsDiv.innerHTML = ""

    for (let i = 1; i <= diceNum; i ++) {
        const diceRes = Math.floor(Math.random() * 6) + 1
        let divElem = document.createElement('div')
        divElem.id = "div" + i.toString()
        divElem.style.visibility = 'hidden'
        divElem.style.display = "inline"
        let imgElem = document.createElement('img')
        imgElem.src = "./images/" + diceRes.toString() + ".jpg"
        imgElem.style.height = "75px"
        imgElem.style.width = "75px"
        divElem.appendChild(imgElem)
        
        resultsDiv.appendChild(divElem)
    }
}

function handleClick() {
    for (let i = 1; i <= 6; i++ ) {
        let dive = document.getElementById("div" + i.toString())
        dive.style.visibility = 'visible'
    }
}






