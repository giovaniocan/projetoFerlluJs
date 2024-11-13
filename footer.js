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

/*
 <div class="main-content-footer">
        <section class="section-footer">
            <div class="itens-footer" id="whats">
                <img src="imagens/icons8-whatsapp-50.png" alt="WhatsApp" class="logos">
                <p>45 991145983</p>
            </div>
            <div class="itens-footer" id="insta">
                <img src="imagens/icons8-instagram-50.png" alt="Instagram" class="logos">
                <p>@ferllufloricultura</p>
            </div>
            <div class="itens-footer" id="email">
                <img src="imagens/icons8-nova-mensagem-50.png" alt="Email" class="logos">
                <p>ferllufloricultura@gmail.com</p>
            </div>
        </section>
        <section class="section-footer">
            <div class="itens-footer" id="location">
                <img src="imagens/icons8-local-50.png" alt="Location" class="logos">
                <p>Av. Sen. Attilio Fontana, 2783 Jardim Panorama, Toledo - PR, 85912-140, Brasil</p>
            </div>
            <div class="itens-footer" >
                <img src="imagens/icons8-loja-50.png" alt="Store" class="logos">
                <p>Ferllu - Floricultura</p>
            </div>
        </section>
    </div>
    <div class="section-bottom-footer">
        <div class="lower-footer">
            <h4>Horário de atendimento:</h4>
            <p id="horario">Segunda a sexta 08:30 as 18h<br>Sábados 08:30 as 17h</p>
        </div>
        <div class="lower-footer">
            <span class="pink-text">A beleza está no detalhe!</span>
        </div>
    </div>
    <button id="botao-fixo">
        <img src="imagens/icons8-whatsapp-50.png" alt="icon-whats">
    </button>*/
