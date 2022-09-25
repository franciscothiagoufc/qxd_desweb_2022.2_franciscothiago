console.log("Usuário está digitando");

let publicacao = document.getElementById("publicacao");
let contador = document.getElementById("counter");
let botao = document.getElementById("btn-enviar");

publicacao.value = ""

publicacao.addEventListener("input", function ()
{
    let available = publicacao.value.length < 140 ? 140-publicacao.value.length : 0 ;
    contador.innerHTML = available ;
    if(available==140)
    {
        contador.className = "none";
    }
    else if(available <= 40 && available > 0 )
    {
        contador.className = "critico bd-highlight";
    }
    else if(available <= 0 )
    {
        contador.className = "desativado bd-highlight";
    }
    else
    {
        contador.className = "normal bd-highlight";
    }
});

publicacao.addEventListener("input", function ()
{
    if(publicacao.value.length == 0)
    {
        botao.className="btn btn-primary rounded-pill disabled"
    }
    else
    {
        botao.className="btn btn-primary rounded-pill"
    }
});
