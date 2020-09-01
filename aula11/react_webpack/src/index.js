const body = document.querySelector('body');

async function cep(cepValue) {
    result = await fetch('https://api.postmon.com.br/v1/cep/' + cepValue);

    return await result.json();
}

console.log(cep('01102000'));

document.querySelector('body').innerHTML = cep('01102000'); 