//LoadPodcasts
function iniciarApp() {
    fetch("https://justcoffeeserver.onrender.com/get3podcasts")
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function(respond){
                        respond.forEach(block => {
                            podcastzone.innerHTML += '<a href="podcast?watch='+block.id+'" class="titlesPOD separation"><div class="podcastcard"><img src="images/podlogos/'+block.imagen+'" alt="" class="podlogo"><p class="titlesPOD text-center">'+block.nombre+'</p></div></a>';
                        });
                        podcastzone.innerHTML += '<a href="podcast" class="titlesPOD separation"><div class="podcastcard"><img src="images/more.png" alt="" class="podlogo"><p class="titlesPOD text-center">Ver Todo</p></div></a>'
                    })
            }
        })
}


const podcastzone = document.getElementById("podcastzone");
window.addEventListener("load", iniciarApp)