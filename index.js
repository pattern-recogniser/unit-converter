/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

const convertBtn = document.getElementById("convert-btn")
const inputText = document.getElementById("number_input")

let lengthText = document.getElementById("length-section-text")
let volumeText = document.getElementById("volume-section-text")
let MassText = document.getElementById("mass-section-text")

let spanList = document.getElementsByClassName("number-entered")

convertBtn.addEventListener("click", function(){
    const ValueToConvert = inputText.value
    ValueInfeet = (parseFloat(ValueToConvert) * meterToFeet).toFixed(2)
    ValueInMeters = (parseFloat(ValueToConvert) / meterToFeet).toFixed(2)
    ValueInLiters = (parseFloat(ValueToConvert) * literToGallon).toFixed(2)
    ValueInGallons = (parseFloat(ValueToConvert) / literToGallon).toFixed(2)
    ValueInKilograms = (parseFloat(ValueToConvert) * kilogramToPound).toFixed(2)
    ValueInPounds = (parseFloat(ValueToConvert) / kilogramToPound).toFixed(2)

    lengthText.innerHTML = 
        `${ValueToConvert} meters = 
        ${ValueInfeet} feet |
        ${ValueToConvert} feet = 
        ${ValueInMeters} meters`

    volumeText.innerHTML = 
        `${ValueToConvert} liters = 
        ${ValueInGallons} gallons |
        ${ValueToConvert} gallons = 
        ${ValueInLiters} liters`

    MassText.innerHTML = 
        `${ValueToConvert} kilos = 
        ${ValueInPounds} pounds |
        ${ValueToConvert} pounds = 
        ${ValueInKilograms} kilos`   

})

