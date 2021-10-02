const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkButton = document.querySelector("#check-button")
const errorMessage = document.querySelector("#error-message")
const noOfNotes = document.querySelectorAll('.no-of-notes')

const notes = [2000, 500, 100, 50, 20, 10, 1]

checkButton.addEventListener("click", () => {
  hideMessage()
  if (billAmount.value > 0 && billAmount.value.length > 0) { 
    console.log(billAmount.value.length)
    if (cashGiven.value >= billAmount.value) { 
      let amountToBeReturned = cashGiven.value - billAmount.value 
      calculateChange(amountToBeReturned)
    } else {
      showErrorMessage("Do you wanna hand-grind some rice in our Kitchen?")
    } 
  } else {
    showErrorMessage("Enter a valid number")
  }
})

const hideMessage = () => {
  errorMessage.style.display = "none"
}

const calculateChange = amountToBeReturned => {
  // go over all the available
  for( let i = 0; i<notes.length; i++) {
    // no of notes need for the denomination
    const numberOfNotes = Math.trunc(amountToBeReturned / notes[i])

    // amount left after calculating the number of notes needed
    amountToBeReturned = amountToBeReturned % notes[i]

    noOfNotes[i].innerText = numberOfNotes
    console.log(numberOfNotes)
  }
  
}

const showErrorMessage = message => {
  errorMessage.style.display = "block"
  errorMessage.innerText = message
}

