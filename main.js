const apikey = ".......";

function DadosNaTela(dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "ºC";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".text-umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function BuscarCidade(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&lang=pt_br&units=metric`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    console.log(dados);
    DadosNaTela(dados)
}

function ClickButton() {
    const cidade = document.querySelector(".input-city").value;
    console.log(cidade);
    BuscarCidade(cidade); 
}
