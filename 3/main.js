let username = document.getElementById('username')


username.onkeyup = function () {
    for (let i = 0; i < username.value.length; i++) {

        if (username.value[i] === '.'||username.value[i] === '-') {


            console.log(username.value);

            username.value = username.value.substring(0, i) +
                "_" +
                username.value.substring(i + 1, username.value.length);
        }
    }
}

