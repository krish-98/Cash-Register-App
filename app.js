const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#error-message")
const showChange = document.querySelector("#show-change")
const noOfNotes = document.querySelectorAll('.no-of-notes')

const notes = [2000, 500, 100, 50, 20, 10, 1]

checkButton.addEventListener("click", () => {
  validateUserInput() 
})

const validateUserInput = () => {
    hideMessage()
    if (billAmount.value > 0 && billAmount.value.length > 0) { 
    console.log(billAmount.value.length)
    if (cashGiven.value >= billAmount.value) { 
      let amountToBeReturned = cashGiven.value - billAmount.value 
      showChange.innerText = amountToBeReturned
      calculateChange(amountToBeReturned)
    } else {
      showErrorMessage("The amount given should be equivalent or greater than the bill amount ")
    } 
  } else {
    showErrorMessage("Enter a valid number")
  }
}

const hideMessage = () => {
  errorMessage.style.display = "none"
}

const calculateChange = amountToBeReturned => {
  for( let i = 0; i < notes.length; i++) {
    // no of notes need for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / notes[i])

    // amount left after calculating the number of notes needed
    amountToBeReturned = amountToBeReturned % notes[i]

    noOfNotes[i].innerText = numberOfNotes
  } 
}

const showErrorMessage = message => {
  errorMessage.style.display = "block"
  errorMessage.innerText = message
}

