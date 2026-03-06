let height = document.getElementById('inputheight')
let weight = document.getElementById('inputweight')
let out = document.getElementById('output')
let age=document.getElementById('inputage')

const result = () => {
    let h = height.value
    let w = weight.value
    let a=inputage.value

    if(a==""){
        alert('Enter Age')
        return
    }
    let gender = document.querySelector('input[name="gender"]:checked')
    if(gender===null){
    alert("Please select gender")
    return
}
    if (h == "" && w == "") {
        alert('enter a valid height and weight')
        return
    }
    else if (h == "" ) {
        alert('enter a valid height')
        return
    }
    else if (w == "") {
        alert('enter a valid  weight')
        return
    }
    
    let heightInMeter = height.value / 100
    let bmi = w / (heightInMeter * heightInMeter)
    let category = ""
    let color = ""

    if (bmi < 18.5) {
        category = `Underweight<i class="fa-solid fa-exclamation"></i>`
        color = "yellow"
    }
    else if (bmi < 24.9) {
        category = `Normal Weight<i class="fa-solid fa-square-check"></i>`
        color = "green"
    }
    else if (bmi < 29.9) {
        category = `Overweight<i class="fa-solid fa-triangle-exclamation"></i>`
        color = "orange"
    }
    else {
        category = `Obese<i class="fa-solid fa-exclamation"></i><i class="fa-solid fa-exclamation"></i>`
        color = "red"
    }

    out.innerHTML = `
<h2>Your BMI</h2>
<h1>${bmi.toFixed(2)}</h1>
<p style="color:${color}; font-size:22px;"><span style=color:white>Status :</span> ${category}</p>
`
}
const clear=()=>{
    out.innerHTML="" 
}