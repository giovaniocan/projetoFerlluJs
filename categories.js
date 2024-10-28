const url = "https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22category_type%22%5D%7B%0A++category_name%2C%0A++products%5B%5D%7B%0A++++image%7B%0A++++++asset-%3E%7B%0A++++++++url%0A++++++%7D%0A++++%7D%2C%0A++++description%0A++%7D%0A%7D%0A";



const divs = document.getElementById("conteudojavascript")
window.addEventListener('load', async () => {
    const api = await fetch(url, {
        method: "GET",
    });
    
    const resposta = await api.json();
    const categorias = resposta.result;
    console.log(categorias);

    let section_geral = document.createElement("section");

    categorias.forEach(categoria => {
        let category_name = document.createElement("h1");
        category_name.textContent = categoria.category_name;
        category_name.classList.add("titulo1");
        
        let div_secao_2 = document.createElement("div");
        div_secao_2.classList.add("secao2");

        categoria.products.forEach(prod => {
            let div_destaques = document.createElement("div");
            div_destaques.classList.add("destaques");

            let button_destaques = document.createElement("button");
            button_destaques.classList.add("botao-destaques"); 

            let img_button_destaques = document.createElement("img");
            img_button_destaques.setAttribute("src", `${prod.image.asset.url}`);
            img_button_destaques.classList.add("img-destaques");
            button_destaques.appendChild(img_button_destaques);

            let product_name = document.createElement("h1");
            product_name.textContent = prod.description;
            product_name.classList.add("titulo");

            div_destaques.appendChild(button_destaques);
            div_destaques.appendChild(product_name);
            div_secao_2.appendChild(div_destaques);
        });

        section_geral.appendChild(category_name);
        section_geral.appendChild(div_secao_2);
        console.log(section_geral);
    });

    divs.appendChild(section_geral);
});
