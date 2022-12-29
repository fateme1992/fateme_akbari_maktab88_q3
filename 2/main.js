console.log("hello");
let prog = document.getElementById('prog')
prog.style.width = '10%'


// let number = document.getElementById('number');
let btn = document.getElementById('btn')



btn.onclick = function () {
    console.log(prog.style.width);
    if (parseInt(prog.style.width) < 100) {
        prog.style.width = parseInt(prog.style.width) + 10 + '%'
        prog.innerHTML = prog.style.width
    }

}