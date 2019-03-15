// 1. h1 querySelector'la sec

document.querySelector('h1')

// 2. h1'i sec ve mainTitle isimli bir variable'a ata

const mainTitle = document.querySelector('h1')

// 3. mainTitle'i console.log yap

console.log(mainTitle)

// 4. birinci soruda yaptigin seyi console.log yap

console.log(document.querySelector('h1'))

// 5. h1'in icini console.log yap

console.log(document.querySelector('h1').innerHTML)

// 6. mainTitle'in icini console.log yap

console.log(mainTitle.innerHTML)

// 7. mainTitle'in icini "Bu bir baslik olarak degistir"

mainTitle.innerHTML = 'Bu bir baslik'

// 8. yeni bir variable olustur, adini sen sec, "Çok haşin bir kedi"ye esit olsun variable

const yeniBaslik = "Çok haşin bir kedi"

// 9. mainTitle'in icini yeni olusturdugun variable'a esitle

mainTitle.innerHTML = yeniBaslik

// 10. yeni bir variable olustur, degeri, "Bu hasin kedi sadece Himalayalar'in ulasilmasi en zor kisimlarinda yasar." olsun

const yeniP = "Bu hasin kedi sadece Himalayalar'in ulasilmasi en zor kisimlarinda yasar."

// 11. html'deki p'yi sec ve yeni bir variable'a ata, variable'in ismi mainText olsun

const mainText = document.querySelector('p')

// 12. mainText'in innerHTML'ini az once olusturdugun yaziya esitle

mainText.innerHTML = yeniP

// 13. button'u sec ve button isimli bir variable'a ata

const button = document.querySelector('button')

// 14. button'a 'coolButton' class'ini ekle

button.classList.add('coolButton')