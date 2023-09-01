let div = document.getElementById('resposta');
let botao = document.getElementById('botao-api');
async function gerarApi() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json()
    let src = data.message
    console.log(src)
    div.innerHTML = `<img src="${src}" width="500px">`    

}
botao.addEventListener('click', gerarApi)