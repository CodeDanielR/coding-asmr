const sendElement = document.getElementById("send")
const txtElement = document.getElementById("txt")

sendElement.addEventListener("click", (event) => {
    event.preventDefault()
    const { value } = txtElement
    if(!value || value === "") return alert("Invalid input!")
    alert(`[SYSTEM]: ${value}`)
})