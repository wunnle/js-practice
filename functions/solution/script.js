// 1. wakeUpAlert isimli bir fonksiyon olustur, simdilik ici bos olsun

function wakeUpAlert() {

}

// 2. wakeUpAlert'un icine alert('WAKE UP!!! ⌚') ekle

function wakeUpAlert() {
  alert('WAKE UP!!! ⌚') 
}

// 3. wakeUpAlert'i calistir 

wakeUpAlert()

// 4. titleLog isminde baska bir fonksiyon olustur, bu sefer de icine console.log('title') ekle

function titleLog() {
  console.log('title')
}

// 5. titleLog'u calistir

titleLog()

// 6. logAnything isimli bir fonksiyon olustur, isminin yanindaki parantezin icine anything yaz, function'in icine de console.log(anything) yaz

function logAnything(anything) {
  console.log(anything)
}

// 7. logAnything'i calistir, console'daki sonunun neden undefined oldugunu acikla

logAnything()

// 8. logAnything'i icine bir sey yazarak calistir, bir de simdi acikla

logAnything('hello')

// 9. sayfadaki h1'i sec, ve icindeki yaziyi sayfaBasligi isiminde yeni bir variable'a ata

const sayfaBasligi = document.querySelector('h1').innerHTML

// 10. logAnything'i icine sayfaBasli koyarak calistir.

logAnything(sayfaBasligi)

// 11. sayfaYazisi isminde bir variable olustur ve sayfadaki p'nin icini ona ata

const sayfaYazisi = document.querySelector('p').innerHTML

// 12. logAnything'e sayfaYazisi'ni gecip calistir

logAnything(sayfaYazisi)

// 13. Benzer mantikli bir alertAnything function'u yaz

function alertAnything(anything) {
  alert(anything)
}