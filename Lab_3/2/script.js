function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {

  const maxSize = Number(document.getElementById("max").value)
  const minSize = Number(document.getElementById("min").value)
  const hasCapitalLetters = document.getElementById("capi").checked
  const hasSpecialLetters = document.getElementById("spec").checked

  if (maxSize < minSize || minSize < 0 || maxSize < 0 || minSize == "" || maxSize == ""){
    alert("Podaj poprawne dane!");
    return; 
  }

  const lower = "abcdefghijklmnopqrstuvwxyz0123456789"
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const special = "!@#$%^&*()_-+=<>?"

  var range = lower

  if(hasCapitalLetters){
    range += upper
  }
  if(hasSpecialLetters){
    range += special
  }

  var password = ""
  const length = Number(randomInt(minSize, maxSize))
  for (let i = 0; i < length; i++) {
    const randomIndex = randomInt(0, range.length-1);
    password += range[randomIndex];
  }

  alert(password)
}