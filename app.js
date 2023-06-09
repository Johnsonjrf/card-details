const holderMonthofBirth = document.getElementById("month")
const holderYearofBirth = document.getElementById("year")
const cvc = document.getElementById("cvc")
const cardNumber = document.getElementById("card-number")
const holderName = document.getElementById("older-name")
var pattern = /^[0-9]+$/;



function holderNameChange () {
    var nameValue = document.getElementById("holder-name").value
    document.getElementById("holder-name-value").innerText = nameValue
    
    
    
    
}

function cardDigit() {

    var cardDigit = document.getElementById("card-number").value
    if(cardDigit.match(pattern)) {
        
         document.getElementById("card-digit").innerHTML = cardDigit
    } else {
        document.getElementById("card-digit").innerHTML = ""
    }
    
}

function monthInputValue() {
    var monthInput = document.getElementById("month").value

    console.log(monthInput)

    document.getElementById("month-value").innerHTML = monthInput
}

function yearInputValue() {
    var yearInput = document.getElementById("year").value

    document.getElementById("year-value").innerHTML = yearInput
}

function handleCvcChange () {
    var cvcValue = document.getElementById("cvc").value

    document.getElementById("cvc-value").innerHTML = cvcValue
}




document.getElementsByTagName("button")[0].addEventListener("click", (event) => {
   
    event.preventDefault()
    if(!cvc.value) {
        document.getElementsByClassName("cvc-error")[0].innerHTML = "cant be blank"
        
    } else {
        document.getElementsByClassName("cvc-error")[0].innerHTML = ""

        if(cardNumber.value.match(pattern)) {
            document.getElementsByClassName("card-number-error")[0].innerHTML = ""

            if(!holderMonthofBirth.value) {
                document.getElementsByClassName("month-error")[0].innerHTML = "cant be blank"
            } else {
                document.getElementsByClassName("month-error")[0].innerHTML = ""
                if(!holderYearofBirth.value) {
                    document.getElementsByClassName("year-error")[0].innerHTML = "cant be blank"
                } else {
                    document.getElementsByClassName("year-error")[0].innerHTML = ""

                    document.getElementsByClassName("form")[0].style.display = "none"

                    document.getElementsByClassName("completed")[0].style.display = "initial"
                    
                    
                }
            }
        
        } else {
            document.getElementsByClassName("card-number-error")[0].innerHTML = "enter numbers only"
        }
    
    }

    
    
    
    

    
    
})



// document.getElementsByTagName("button")[0].addEventListener("click", (event) => {
   
//     event.preventDefault()
//     if(!cvc.value) {
//         document.getElementsByClassName("cvc-error")[0].innerHTML = "cant be blank"
        
//     } else {
//         document.getElementsByClassName("cvc-error")[0].innerHTML = ""
//     }

//     if(cardNumber.value.match(pattern)) {
//         document.getElementsByClassName("card-number-error")[0].innerHTML = ""
//     } else {
//         document.getElementsByClassName("card-number-error")[0].innerHTML = "enter numbers only"
//     }

//     if(!holderMonthofBirth.value) {
//         document.getElementsByClassName("month-error")[0].innerHTML = "cant be blank"
//     } else {
//         document.getElementsByClassName("month-error")[0].innerHTML = ""
//     }

//     if(!holderYearofBirth.value) {
//         document.getElementsByClassName("year-error")[0].innerHTML = "cant be blank"
//     } else {
//         document.getElementsByClassName("year-error")[0].innerHTML = ""
//     }
    

    
    
// })

