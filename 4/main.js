let input = document.getElementById('input')
console.log('he');

let suggestion = document.getElementById('suggestion')

let ol = document.createElement('ol')
suggestion.appendChild(ol)
ol.style.listStyle = 'none';
ol.style.padding = '0px'

let array = ['a', 'b', 'c', 'c', 'arman', 'armin', 'hello world']

for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li')
    ol.appendChild(li)
    li.style.paddingBottom = '1rem'
    li.style.borderBottom = '1px solid gray'
    li.innerHTML = array[i]
}

input.onkeyup = function () {
    console.log(array.filter(element => {
        console.log(input.value, element, input.value.startsWith(element));
        return input.value.startsWith(element)
    }))
}