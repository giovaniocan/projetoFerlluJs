const URLFooter = 'https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22infoBasicas%22%5D'


window.addEventListener('load', async () => {
    const requisicao = await fetch(URLFooter, {
        method: "GET",
    });
   

    const resposta = await requisicao.json();

    console.log(resposta.result[0])
    criarFooter(resposta.result[0])
})


function criarFooter(info){
    const divWhats = document.querySelector('div.itens-footer#whats')
    const pWhats = document.createElement("p");
    pWhats.innerText = info.whatsapp;
    divWhats.appendChild(pWhats);

    const divInsta = document.querySelector('div.itens-footer#insta')
    const pInsta = document.createElement("p");
    pInsta.innerText = info.instagran;
    divInsta.appendChild(pInsta);


    const divEmail = document.querySelector('div.itens-footer#email')
    const pEmail = document.createElement("p");
    pEmail.innerText = info.email;
    divEmail.appendChild(pEmail);

    const divEndereco = document.querySelector('div.itens-footer#endereco')
    const pEndereco = document.createElement("p");
    pEndereco.innerText = info.endereco;
    divEndereco.appendChild(pEndereco);

    const divHorario = document.querySelector('div.lower-footer#horario')
    const pHorario = document.createElement("p");
    pHorario.innerText = info.horarioAtendimento;
    divHorario.appendChild(pHorario);

}
