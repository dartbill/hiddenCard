const form = document.querySelector("form")
const card = document.querySelector("div")

const cardTitle = document.querySelector("#cardTitle")
const checkBirthday = document.querySelector("#birthday")
const checkChristmas = document.querySelector("#christmas")
const checkAnniversary = document.querySelector("#anniversary")

const greetingTitle = document.querySelector("h2")
const greeting = document.querySelector("#greeting")

const addMessage = document.querySelector("#message")
const messagePara = document.querySelector("p")

checkBirthday.addEventListener( 'change', function() {
    if(this.checked) {
       cardTitle.textContent = "Happy Birthday"
    } 
});

checkChristmas.addEventListener( 'change', function() {
    if(this.checked) {
       cardTitle.textContent = "Merry Christmas"
    } 
});

checkAnniversary.addEventListener( 'change', function() {
    if(this.checked) {
       cardTitle.textContent = "Happy Anniversay"
    } 
});

form.addEventListener('submit', (e) =>{
	e.preventDefault()
    
    const newgreeting = greeting.value
	greetingTitle.textContent = newgreeting

    const newMessage = addMessage.value
    messagePara.textContent = newMessage

    form.style.display = "none"
    card.style.display = "block"

    greeting.value = " "
    addMessage.value = " "
})