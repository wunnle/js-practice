// 1. p'yi querySelector'la sec ve dogText adinda bir variable'a ata

const dogText = document.querySelector('p')

// 2. mainText'in innerText'ini "Bu kopekler yaslarini hic bilmiyorlar (ozellikle arkadaki)." olarak degistir

dogText.innerText = 'Bu kopekler yaslarini hic bilmiyorlar (ozellikle arkadaki).'

// 3. createElement ile yeni bir input olustur, bunu insanYasiInput diye bir variable'a ata

const insanYasiInput = document.createElement("input");

// 4. form'u sec ve dogForm diye bir variable'a ata

const dogForm = document.querySelector('form')

// 5. insanYasiInput'u form'a ekle (appendChild)

dogForm.appendChild(insanYasiInput)

//  6. insanYasiInput'un type attribute'unu setAttribute kullanarak "text" olarak degistir

insanYasiInput.setAttribute("type", "text")

// 7. insanYasiInput'un placeholder attribute'unu setAttribute kullanarak "Insan yasi" olarak degistir

insanYasiInput.setAttribute("placeholder", "Insan yasi")

// 8. createElement kullarak yeni bir button olustur, bunu dogButton isimli bir variable'a ata

const dogButton = document.createElement('button')

// 9. dogButton'u dogForm'un icine append et

dogForm.appendChild(dogButton)

// 10. dogButton'a coolButton class'ini ekle

dogButton.classList.add('coolButton')

// 11. dogButton'un icindeki yaziyi: 'Kopek yasini hesapla' olarak degistir

dogButton.innerHTML = 'Kopek yasini hesapla'

// 12. insanYasiInput'unun value'sunu 3 olarak degistir

insanYasiInput.value = 10