const url = "https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22services_type%22%5D%7B%0A++title_service%2C%0A++++service_description%2C%0A++++service_advantages%0A%7D"


window.addEventListener('load', async () => {
    const api = await fetch(url, {
        method: "GET",
    });
    
    const resposta = await api.json();
    const servico = resposta.result;
    //ser.service_advantages
    //ser.service_description
    //ser.title_service

    const section = document.getElementById("content-servicoss")
    let divisao = 0;

    servico.forEach((ser, index) =>{
        let titleh1 = document.createElement("h1");
        titleh1.className = "title-servicos";
        titleh1.textContent = ser.title_service;
        
        let divTitleContent = document.createElement("div");
        divTitleContent.classList.add("content-aluguel");
        let pAluguel = document.createElement("p");
        pAluguel.innerText = ser.service_description;
        divTitleContent.appendChild(pAluguel);

        let divAdvantages = document.createElement("div");
        divAdvantages.className = "vantagens";
        let advantagesh1 = document.createElement("h1");
        advantagesh1.className = "title-vantagens";
        advantagesh1.textContent = "VANTAGENS";
        divAdvantages.appendChild(advantagesh1);
        let advantagesP = document.createElement("p");
        advantagesP.textContent = ser.service_advantages;
        divAdvantages.appendChild(advantagesP);

        if (divisao == 1) {
            const divisaoRosa = document.createElement("hr");
            section.appendChild(divisaoRosa)
            console.log("passou")
            
        }
        console.log(divisao)
        section.append(titleh1, divTitleContent, divAdvantages);
        divisao = 1
    })
});