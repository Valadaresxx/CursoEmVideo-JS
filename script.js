const numero = document.getElementById("inpNum");
const botao = document.getElementById("btnAdd");
const lista = document.getElementById("lista");
const resultado = document.getElementById("rest");
const listaToda = [];

function verificarNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 200) {
        return true;
    } else {
        return false;
    }
}
function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
function adicionar() {
    if (verificarNumero(numero.value) && !naLista(numero.value, listaToda)) {
        listaToda.push(Number(numero.value));
        let item = document.createElement("option");
        item.text = `valor ${numero.value} add`;
        lista.appendChild(item);
        resultado.innerHTML = "";
    } else {
        alert("Ja adicionado ou não está entre os pedidos");
    }
    numero.value = "";
    numero.focus();
}
function finalizar() {
    if (listaToda.length == 0) {
        alert("Não dá pra finalizar o nada");
    } else {
        let total = listaToda.length;
        let soma = 0;
        let media = 0;
        let maior = listaToda[0];
        let menor = listaToda[0];
        for (let pos in listaToda) {
            soma += listaToda[pos];
            if (listaToda[pos] > maior) {
                maior = listaToda[pos];
            }
            if (listaToda[pos] < menor) {
                menor = listaToda[pos];
            }
        }
        media = soma / total;
        resultado.innerHTML = "";
        resultado.innerHTML += `<p>Temos ${total} numeros adicionado </p>`;
        resultado.innerHTML += `<p>O maior numero dentre eles é o ${maior}</p>`;
        resultado.innerHTML += `<p>O menor numero dentre eles é o ${menor}</p>`;
        resultado.innerHTML += `<p>A soma dos numeros são ${soma}</p>`;
        resultado.innerHTML += `<p>A media dos numeros são ${media}</p>`;
    }
}
