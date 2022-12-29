let londonBtn = document.getElementById('london')
let tehranBtn = document.getElementById('tehran')
let tokyoBtn = document.getElementById('tokyo')

let cityName = document.getElementById('city')
let caption = document.getElementById('cityCap')
let contry=document.getElementById('contry')

tehranBtn.onclick = function () {
    cityName.innerHTML = cityName.innerHTML.replace(cityName.innerHTML, 'Tehran')
    caption.innerHTML = caption.innerHTML.replace(caption.innerHTML, 'Tehran')
    contry.innerHTML = contry.innerHTML.replace(contry.innerHTML, 'Iran')
}


londonBtn.onclick = function () {
    cityName.innerHTML = cityName.innerHTML.replace(cityName.innerHTML, 'London')
    caption.innerHTML = caption.innerHTML.replace(caption.innerHTML, 'London')
    contry.innerHTML = contry.innerHTML.replace(contry.innerHTML, 'England')
}

tokyoBtn.onclick = function () {
    cityName.innerHTML = cityName.innerHTML.replace(cityName.innerHTML, 'Tokyo')
    caption.innerHTML = caption.innerHTML.replace(caption.innerHTML, 'Tokyo')
    contry.innerHTML = contry.innerHTML.replace(contry.innerHTML, 'Japan')
}