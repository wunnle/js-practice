const famousDogs = [
  {
    name: 'Scooby Doo',
    breed: 'Great Dane',
    photo: 'https://static.comicvine.com/uploads/scale_small/11/111746/4579604-characterart-scooby-sd.jpg'
  },
  {
    name: 'Snoopy',
    breed: 'Beagle',
    photo: 'https://cdn.theatlantic.com/assets/media/img/2015/09/30/BOB_Boxer_Peanuts_Opener_HP/1920.jpg?1443632690'
  },
  {
    name: 'Pluto',
    breed: 'Dane?' ,
    photo: 'https://i.pinimg.com/originals/84/e6/52/84e65278d7abbb61ea2201756ce3ebd5.jpg'
  },
  {
    name: 'Rantanplan',
    breed: 'Great dane',
    photo: 'https://i.pinimg.com/originals/0c/d6/ec/0cd6ec661eb16c2f26d17b65496024d8.jpg'
  }
]

// * actually some moon of Jupiter. Jupiter has 79 knows moons
const moonsOfJupiter = [
  {
    name: 'Io',
    diameter: '3600'
  },
  {
    name: 'Europa',
    diameter: '3121'
  },
  {
    name: 'Ganymede',
    diameter: '5262'
  },
  {
    name: 'Callisto',
    diameter: '4820'
  }
]


// 1. some() kullanarak Jupiter'in diameter'i 5000'den buyuk uydusu var mi diye kontrol et

// 2. every() kullanarak Jupiter'in buyun uydulari'nin diameter'i 3000'den buyuk mu diye kontrol et

// 3. filter() kullanarak Jupiter'in sadece 3000'den buyuk diameterli uydularinin yeni bir array'ini olustur, ismi bigMoons olsun.

// 4. map() kullanarak moonNames isimli bir array olustur, icinde sadece uydularin isimleri olsun

// 5. famousDogs'u kullanarak bir dogNames array'i olustur, icinde sadece kopeklerin isimleri olsun

// 6. map() kullanarak dogGreetings isimli bir array olustur. her bir item'i su sekilde ilerlesin: "I'm Scooby Doo and I'm a Great Dane!"

// 7. sadece breed'inde dane gecen kopeklerin array'ini olustur

// 8. her bir item'i <a href="photo">name</a> olan bir array olustur

// 9. inclues'i kullnarak dogNames'de 'snoopy' var mi diye kontrol et.

// 10. neden olmadigini acikla. 

// bonus: sonra kelime nasil yazilirsa yazilsin kontrol eden bir doesArrayHave(x) function'u yaz

// homework: forEach kullanarak kopeklerin listesini html'de olustur. isimler h2 icinde, photo'lar img'de ve breed'ler <p><strong>Breed:<strong>breed</p> seklinde olsun