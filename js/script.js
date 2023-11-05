function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu")
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector(".icon").src = "img/close_white_36dp.svg";
    }
}

function direcao(e){
    var direcao = document.querySelector(".slider")

    if (e == 1){
        //esquerda

        direcao.scrollLeft = direcao.scrollLeft - 200;
    } else {
        //direita

        direcao.scrollLeft = direcao.scrollLeft + 200;
    }
}

function direcao2(e){
    var direcao2 = document.querySelector(".slider2")

    if (e == 3){
        //esquerda

        direcao2.scrollLeft = direcao2.scrollLeft - 200;
    } else if (e == 4){
        //direita

        direcao2.scrollLeft = direcao2.scrollLeft + 200;
    }
}