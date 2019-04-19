// 1. Sayfadaki buton'u sec ve buton isimli bir variable'a ata

const button = document.querySelector('button')

// 2. logClick isimli bir function olustur, function'un icinde console.log('click') olsun

function logClick() {
  console.log('click!')
}

// 3. button'a bir 'click' event listener'i ekle, 'click'ten sonraki kisma logClick'i koy. buton'a tikla ve console'a bak

button.addEventListener('click', logClick)

// 4. Yukardaki event listener'i comment-out et, tekrar aynisini yaz, ama button yerine document.querySelector('button') yaz. test et.

document.querySelector('button').addEventListener('click', logClick)

// 5. yeni bos bir function yaz, ismi changeButtonTextToClickMe olsun

function changeButtonTextToClickMe() {

}

// 6. changeButtonTextToClickMe'in icinde, sectigin button'un innerHTML'ini "Click me!" olarak degistir

function changeButtonTextToClickMe() {
  button.innerHTML = 'Click me'
}

// 7. button'a bir event listener daha ekle. bu sefer event'in 'mouseover' olsun, functipn'in da changeButtonTextToClickMe. Test et

button.addEventListener('mouseover', changeButtonTextToClickMe)

// 8. bir variable olustur, ismi originalButtonText olsun, bunu 'This is a button'a esitle

let originalButtonText = 'This is a button'

// 9. 5 ve 6'da yaptigin gibi yeni bir function olustur, function'un adi restoreButtonText olsun. icinde de button'un innerHTML'ini originalButtonText'e esitle

function restoreButtonText() {
  console.log('hey')
  button.innerHTML = originalButtonText
}

// 10. button'a bir event listener daha ekle. bu sefer event mouseout olsun, function olarak da restoreButtonText'i ekle

button.addEventListener('mouseout', restoreButtonText)

// 11. yeni bir variable daha olustur. ismi anotherCatURL olsun, ve suna esitle: 'https://cdn2.thecatapi.com/images/bh5.jpg'

const anotherCatURL = 'https://cdn2.thecatapi.com/images/bh5.jpg'

// 12. catImg isimli bir variable daha olustur ve saydaki <img>'i secerek ona esitle

const catImg = document.querySelector('img')

// 13. catImg'i ve catImg.src'yi console.log et, ne olduklarini yorumla

console.log(catImg)
console.log(catImg.src)

// 14. changeCatUrl isimli bir function olustur ve icine sunu yaz: catImg.src = anotherCatURL. function'i changeCatUrl() diye calistirip test et, sonra bu son satiri sil

function changeCatUrl() {
  catImg.src = anotherCatURL
}

// 15. button'a bir click eventlistenerekle ve changeCatUrl'i gec function olarak

button.addEventListener('click', changeCatUrl)


// 16. 8'deki satira donup originalButtonText'in degerini 'Show me another cat' degistir.

// 17. restoreButtonText() yaz en sona ve bunun ne yaptigini acikla
