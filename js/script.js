$(document).ready(function(){

    $("#barras").click(function(){
        $("#menu").toggleClass("#menu-ativo")
})
})

$(document).ready(function(){
    $("#carrosel img:eq(0)").addClass("banner-ativo").show()

})

setInterval(slide,1500)

function slide(){
      

    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrosel img:eq(0)").addClass("banner-ativo").show()
    }
}

//     $("#barras").click(function(){
//         if($("#menu").hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("#menu-ativo")
//         }
//     })
// })

// function mostrarPopup(){
//     window.alert("Sejam Bem Vindos ao Melhor Site de Games do Universo!")
// }

let email = document.getElementById("campo-email");

function enviaEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaNoticias = [
   {
       titulo: "Brasil perde partida primeira de LOL",
       descricao: "A equipe não trabalhou de forma correta"
   },
   {
        titulo: "LOL - Mario jogo de todos os tempos",
        descricao: "BBC após entrevistas, considera LOL como melhor Jogo"
   },
   {
       titulo: "Proximas Partidas na Europa",
       descricao: "Brasil se prepara para novas aventuras além mar"
   },
   {
        titulo: "LOL - Mario jogo de todos os tempos",
        descricao: "BBC após entrevistas, considera LOL como melhor Jogo"
   },
   {
       titulo: "Brasil perde partida primeira de LOL",
       descricao: "A equipe não trabalhou de forma correta"
   },
   {
        titulo: "LOL - Mario jogo de todos os tempos",
        descricao: "BBC após entrevistas, considera LOL como melhor Jogo"
   },
]

function reenderizarNoticias() {
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];
        
        template += `<div class="cardnews">
        <img src="img/noticias.png" alt="Imagem da Notícia">
        <h3>${noticias.titulo}</h3>
        <p>${noticias.descricao}</p>
      </div>`
    }
    
    espaco.innerHTML = template;
}