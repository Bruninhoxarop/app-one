var resp = window.document.getElementById('saida')

//lembre-se que toda variável declarada aqui fora possui escopo global.

function acao1() {
    resp.innerHTML += '<p>Clicou no primeiro botão</p>'

    var a = prompt("Informe um número");
    if (a != "6") {
        resp.innerHTML += '<h1> Diferença de 6 </h1>';
    } else {
        resp.innerHTML += '<h1> Igual de 6 </h1>';
    }
}

function acao2() {
    resp.innerHTML += '<p>Clicou no segundo botão</p>'

    switch (prompt("Como está o tempo? Use chuvoso, ensolarado ou nublado.")) {
        //switch("chuvoso"){}
        case "chuvoso":
            resp.innerHTML += '<h1>Lembresse de trazer guarda-chuva!</h1>';
            break;
        case "ensolarado":
            resp.innerHTML += '<h1>Vista roupas leves!</h1>';
            break;
        case "nublado":
            resp.innerHTML += '<h1>Vá lá fora!!!</h1>';
            break;
        default:
            resp.innerHTML += '<h1>Tempo desconhecido</h1>';
            break;
    }
}

function acao3() {
    resp.innerHTML += '<p>Clicou no terceiro botão</p>'

    var numero = prompt("Informe um número");
    for (i = 0; i < numero; i++) {
        resp.innerHTML += '<p>Paragrafo ' + i + '</p>';
    }
}

function acao4() {
    resp.innerHTML += '<p>Clicou no quarto botão</p>'

    var var1 = prompt("Informe um número");
    while (var1 <= 10) {
        resp.innerHTML += 'linha' + var1 + '<br/>';
        var1++;
    }
}

function acao5() {
    resp.innerHTML += '<p>Clicou no quinto botão</p>'

    var var1 = prompt("Informe um número");
    do {
        resp.innerHTML += 'linha ' + var1 + '<br/>';
        var1++;
    } while (var1 <= 10);
}

function acao6() {
    resp.innerHTML += '<p>Clicou no sexto botão</p>'

    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    myArray.forEach(function (value, key) {
        resp.innerHTML += 'Chave: ' + key + 'Valor: ' + value + '<br/>'
        //document.write(value+ ' ', key + '<br/>');
        //.write reescreve toda página
        //resp.innerhtml pega os dados daqui joga lá pra cima e dps vai pro html
    });
}

function acao7() {

    var entrada = "Bem vindo " + prompt("Informe seu Nome: ");
    var saldacao = document.getElementById('titulo');
    saldacao.textContent = entrada;

    const colletion = document.getElementsByName("animal");
    for (let i = 0; i < colletion.length; i++) {
        if (colletion[i].type == "checkbox") {
            colletion[i].checked = true;
        }
    }
    //marca as caixas com a classe animal neles.

    resp.innerHTML += 'Clicou no sétimo botão'

    document.getElementsByTagName("p")[1].innerHTML = "Texto do paragrafo 2 substituido com sucesso!";
    //pega a tag 'p' a partir de 0 até 1 e modifica ele.

    var teste = document.getElementsByName("paragrafo");
    teste[1].textContent = 'Texto do paragrafo identificado por "paragrafo" na posição 1, substituido com sucesso!';
    //pega a classe 'paragrafo' a partir de 0 até 1 e modifica ele.
}

function acao8() {
    resp.innerHTML += '<p>Clicou no oitavo botão</p>'
}

function acao9() {
    resp.innerHTML += '<p>Clicou no nono botão</p>'
}

function acao10() {
    resp.innerHTML += '<p>Clicou no décimo botão</p>'
}

function acao11() {
    resp.innerHTML += '<p>Clicou no décimo primeiro botão</p>'
}

function acao12() {
    resp.innerHTML += '<p>Clicou no décimo segundo botão</p>'
}

function acao13() {
    resp.innerHTML += '<p>Clicou no décimo terceiro botão</p>'
}

function acao14() {
    resp.innerHTML += '<p>Clicou no décimo quarto botão</p>'
}