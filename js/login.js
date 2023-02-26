const searchinput = document.getElementById("searchinput");
const searchbutton = document.getElementById("login");
const error = document.getElementById("error");
searchbutton.addEventListener("click", Login)

function Login() {
    password = searchinput.value
    if (password != "") {
        fetch("https://justcoffeeserver.onrender.com/login/"+password)
        .then(function (res) {
        if (res.ok) {
            res.json()
                .then(function(respond){
                    if (respond == true) {
                        document.cookie = "password="+password;
                        location.href = 'justadmin';
                    }else{
                        error.innerHTML = '<p class="titles2 text-center">Contraseña incorrecta!</p>'
                    }
                })
            }
        })
    }
}