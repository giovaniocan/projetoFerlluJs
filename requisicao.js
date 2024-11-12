const URL = 'https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22historia%22%5D%7B%0A++historia%0A%7D';

window.addEventListener('load', async () => {
    const requisicao = await fetch(URL, {
        method: "GET",
    });

    const resposta = await requisicao.json();

    const historia = resposta.result;

    historia.forEach(item => {
        criarHistoria(item.historia)
    });

})

function criarHistoria(historia){
    const p = document.getElementById('historiaEmpresa');
    p.innerText = historia;
}