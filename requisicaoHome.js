const url = "https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27recentes%27%5D%7B%0A++recent_products%5B%5D%7B%0A++++description%2C%0A++++image%7Basset-%3E%7Burl%7D%7D%0A++%7D%0A%7D&perspective=published";
const urlDestaque = "https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27destaques%27%5D%7B%0A++highlight_products%5B%5D%7B%0A++++image%7Basset-%3E%7Burl%7D%7D%2C%0A++++product%0A++%7D%0A%7D&perspective=published";

const divPrincipal = document.getElementById('contentJs')
const divPrincipalDestaques = document.getElementById('contentJsDestaques')
window.addEventListener('load', async () => {
    try {
        const requisicao = await fetch(url, { method: 'GET' });
        const resposta = await requisicao.json();
        const recentes = resposta.result;

        recentes.forEach(recente => {
            const divContainer = document.createElement('div');
            divContainer.classList.add('recentes-container');

            recente.recent_products.forEach(product => {
                const divRecentes = document.createElement('div');
                divRecentes.classList.add('recentes');

                const buttonRecentes = document.createElement('button');
                buttonRecentes.classList.add('botao-recentes');

                const imgBtn = document.createElement('img');
                imgBtn.setAttribute("src", `${product.image.asset.url}`);
                imgBtn.classList.add('img-recentes')
                buttonRecentes.appendChild(imgBtn);

                const h1Recentes = document.createElement('h1');
                h1Recentes.classList.add('titulo');
                h1Recentes.innerText = product.description;

                const btnVejaMais = document.createElement('button');
                btnVejaMais.classList.add('veja-mais');
                btnVejaMais.innerText = "Veja Mais";

                divRecentes.appendChild(buttonRecentes);
                divRecentes.appendChild(h1Recentes);
                divRecentes.appendChild(btnVejaMais);

                divContainer.appendChild(divRecentes);
            });

            divPrincipal.appendChild(divContainer);
        });

        const requisicaoDestaque = await fetch(urlDestaque, { method: 'GET'})
        const respostaDestaque = await requisicaoDestaque.json()
        const destaques = respostaDestaque.result;

        destaques.forEach(destaque => {
            console.log(destaque.highlight_products)

            const divSecao2 = document.createElement('div')
            divSecao2.classList.add('secao2')

            destaque.highlight_products.forEach(product => {
                const divDestaques = document.createElement('div')
                divDestaques.classList.add('destaques')

                const btnDestaques = document.createElement('button')
                btnDestaques.classList.add('botao-destaques')
                const imgDestaques = document.createElement("img")
                imgDestaques.setAttribute('src', `${product.image.asset.url}`)
                imgDestaques.classList.add('img-destaques')
                btnDestaques.append(imgDestaques)

                const h1 = document.createElement("h1")
                h1.classList.add('titulo')
                h1.innerText = product.product.product_title
                
                const p = document.createElement('p')
                p.innerText = product.product.product_description

                const btnVejaMais = document.createElement("button")
                btnVejaMais.classList.add('veja-mais')
                btnVejaMais.innerText = "Veja Mais"

                divDestaques.appendChild(btnDestaques)
                divDestaques.appendChild(h1)
                divDestaques.appendChild(p)
                divDestaques.appendChild(btnVejaMais)
                
                divSecao2.appendChild(divDestaques)
            })
            divPrincipalDestaques.append(divSecao2)
        })

    } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
    }
    console.log(divPrincipal);
});
