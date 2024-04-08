let celsius=document.querySelector("#Celsius");
let fahrenheit=document.querySelector("#Fahrenheit");
let kelvin=document.querySelector("#Kelvin");
let inp=document.querySelector("input");
// celsius.addEventListener("input",()=>{
//     console.log(celsius.innerText);
// })
// console.log(kelvin.value);
// console.log(celsius.value);
// console.log(fahrenheit.value);

function ComputeTemp(event){
  // console.log("change");
  // console.log(event);
  // console.log(event.target.name);
  // console.log(event.target.value); 

  let currVal=+event.target.value;  // add + sign to convert it into number

  switch (event.target.name) {
    case "Celsius":
      fahrenheit.value=((currVal*1.8)+32).toFixed(2);
      kelvin.value=(currVal+273.15).toFixed(2);      
      break;
    case "Fahrenheit":
      celsius.value=((currVal-32)/1.8).toFixed(2);
      kelvin.value=((currVal-32)/1.8 + 273.15).toFixed(2);
      break;
    case "Kelvin":
      celsius.value=(currVal-273.15).toFixed(2);
      fahrenheit.value=(((currVal-273.15)*1.8)+32).toFixed(2);  
      break;
    default:
      break;
  }
}