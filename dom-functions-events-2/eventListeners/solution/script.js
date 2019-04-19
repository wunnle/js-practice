function calculateDogAge(humanAge) {
  var dogAge = 7*humanAge;
  console.log(`kopek yasi: ${dogAge}`)
}

// 1. calculateDogAge'i biraz degistirelim. console log satirini su sekilde degistir: return dogAge

function calculateDogAge(humanAge) {
  var dogAge = 7*humanAge;
  return dogAge
}

// 2. calculateDogAge(10)'u dene. Hic bir sey olmayacak

// 3. console.log(calculateDogAge(2)) ve alert(calculateDogAge(4) + 2)'yi dene. bunlarin sonuclarini acikla.

// 4. const dogAge = calculateDogAge(2) ve console.log(dogAge)'i dene

// 5. input'u sec ve humanAgeInput diye bir variable'a ata

const humanAgeInput = document.querySelector('input')

// 6. alertDogAge adinda bir function olustur. 
// iki sey yapsin. once humanAgeInput'un value'sunu calculateDogAge'e gecip sonucu bir variable'e kaydetsin
// sonra bu variable'i kullanarak sunu alert etsin: "Kopeginiz insan yasiyla x yasinda"

function alertDogAge() {
  const calculatedDogAge = calculateDogAge(humanAgeInput.value) 
  alert(`Kopeginiz insan yasiyla ${calculatedDogAge} yasinda`)
}

// 7. Asagidakileri kullanarak yeni fonksiyonunu test 

// humanAgeInput.value = 5
// alertDogAge() 

// 8. form'u sec ve dogForm adinda yeni bir variable'a ata

const dogForm = document.querySelector('form')

// 9. form'a submit event'i ekle, function olarak da alertHumanAge'i gec

dogForm.addEventListener('submit', alertDogAge)