// 1. sayfadaki input'u sec, ve degerini humanAge adinda bir variable'a ata

const humanAge = document.querySelector('input').value

// 2. humanAge'i su sekilde console log yap "insan yasi: 10" (burda 3 inputta kacsa o olacak)

console.log(`insan yasi: ${humanAge}`)

// 3. bir console log daha yap, bu sefer soyle olsun: "Kopek yasi: 21". Burda 21 humanAge * 3 olmali

console.log(`kopek yasi: ${humanAge * 7}`)

// 4. calculateDogAge isimli bir function yaz. humanAge isimli bir arguman'i olsun ve sonuc olarak 3'te yaptigimiz console.log'u yapsin

function calculateDogAge(humanAge) {
  var dogAge = 7*age;
  console.log(`kopek yasi: ${dogAge}`)
}

// 5. calculateDogAge(5)'i calistir. sonra calculateDogAge(6)'yi calistir

// 6. calculateDogAgeFromHumanBirthday adinda baska bir function yaz. bu sefer iki argumani olsun: humanBirthYear ve currentYear. burdan dog age'i hesapla ve console.log et

function calculateDogAgeFromHumanBirthday(humanBirthYear, currentYear) {
  var dogAge = 7 * (currentYear - humanBirthYear)
  console.log(`kopek yasi: ${dogAge}`)
}

// 7. calculateDogAgeFromHumanBirthday'i test et degisik sayilarla

// 8. calculateDogAgeFromHumanBirthday'i 2050 ve 2020'yle test et

calculateDogAgeFromHumanBirthday(2050, 2020)

// 9. function'un icine bir condition ekle. eger insan daha dogmamissa, kopek yasini hesaplamak yerine console'a sunu yazsin: 'Your human was not born yet. Please try after birth."

function calculateDogAgeFromHumanBirthday(humanBirthYear, currentYear) {
  if(currentYear < humanBirthYear) {
    console.log('Your human was not born yet. Please try after birth."')
  } else {
    var dogAge = 7 * (currentYear - humanBirthYear)
    console.log(`kopek yasi: ${dogAge}`)
  }
}

// 10. calculateDogAgeFromHumanBirthday'i degisik yillarla test et

calculateDogAgeFromHumanBirthday(2050, 2020)
calculateDogAgeFromHumanBirthday(3000, 1000)


// 11: calculateDogAgeFromHumanBirthday'i, "Your human was not born yet. Please try again in X years" yazdiracak sekilde degistir. X insanin dogumuna kalan yil olsun

function calculateDogAgeFromHumanBirthday(humanBirthYear, currentYear) {
  if(currentYear < humanBirthYear) {
    console.log(`Your human was not born yet. Please try again in ${humanBirthYear - currentYear} years`)
  } else {
    var dogAge = 7 * (currentYear - humanBirthYear)
    console.log(`kopek yasi: ${dogAge}`)
  }
}

calculateDogAgeFromHumanBirthday(2050, 2020)
calculateDogAgeFromHumanBirthday(3000, 1000)