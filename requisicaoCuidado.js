const URLCuidados = 'https://bz06fi12.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27cuidado%27%5D%7B%0A++cuidados%5B%5D%7B%0A++++titulo%2C%0A++++descricao%0A++%7D%0A%7D%0A&perspective=published'

const divPrincipal = document.getElementById('jsContent')

window.addEventListener('load', async () => {
    const requisicao = await fetch(URLCuidados, { method: "GET" });
    const resposta = await requisicao.json();
    const cuidados = resposta.result;
    console.log(cuidados)
    cuidados.forEach((cuidado, index) => {
        criarCuidado(cuidado, index);
    });
});

function criarCuidado(cuidado, index) {
    cuidado.cuidados.forEach((cuids) => {
        criarDeVerdadeCuidado(cuids, index)
        index += 1;
    })
}

function criarDeVerdadeCuidado(cuids, ind) {
    const lista = document.getElementById('accordion-id');

    const listItem = document.createElement("li");
    const inputRadio = document.createElement("input");
    const label = document.createElement("label");
    const content = document.createElement("div");
    const paragraph = document.createElement("p");

    inputRadio.type = "radio";
    inputRadio.name = "accordion";
    inputRadio.id = `input-${ind}`;

    label.textContent = cuids.titulo;
    label.setAttribute("for", `input-${ind}`);

    content.classList.add("content");
    paragraph.textContent = cuids.descricao;

    content.appendChild(paragraph);
    listItem.appendChild(inputRadio);
    listItem.appendChild(label);
    listItem.appendChild(content);

    lista.appendChild(listItem);
}
