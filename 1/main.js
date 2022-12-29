let main = document.getElementById('main')

let darkBtn = document.getElementById('darkBtn')

let lightBtn = document.getElementById('lightBtn')


darkBtn.onclick = function () {
    main.style.backgroundColor = '#111d2b'
    main.style.color = '#eee'
}


lightBtn.onclick = function () {
    main.style.backgroundColor = '#ddd'
    main.style.color = '#000'
}