function convertion(){
  let celsiusInput = document.getElementById('celsiusInput').value
  let fahrenheitInput = document.getElementById('fahrenheitInput').value

  let celsiusToFahrenheit = Number(celsiusInput) * 9/5 + 32
  let fahrenheitToCelsius = (Number(fahrenheitInput) - 32) * 5/9

  try{
    if(celsiusInput == '' && fahrenheitInput == '') throw "Fill the blank"
    if(isNaN(celsiusInput || fahrenheitInput)) throw "Must to be a number"

    if(celsiusInput == ''){
      document.getElementById('celsiusInput').value = fahrenheitToCelsius.toFixed(2)
      document.getElementById('convertionToFahrenheit').innerHTML = 'The temperature converted is: ' + fahrenheitToCelsius.toFixed(2) + '°C'
    } else if(fahrenheitInput == ''){
      document.getElementById('fahrenheitInput').value = celsiusToFahrenheit.toFixed(2)
      document.getElementById('convertionToCelsius').innerHTML = 'The temperature converted is: ' + celsiusToFahrenheit.toFixed(2) + '°F'
    }

  } catch(error){
    document.getElementById('errorMsg').innerHTML = error
  }
}
  
function clearResult(){
  document.getElementById('celsiusInput').value = ''
  document.getElementById('fahrenheitInput').value = ''
  document.getElementById('convertionToCelsius').innerHTML = ''
  document.getElementById('convertionToFahrenheit').innerHTML = ''
  document.getElementById('errorMsg').innerHTML = ''
}
