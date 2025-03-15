function checkPreco(precoFunc){
    const precoMin = document.getElementById('precoMin').value;
    const precoMax = document.getElementById('precoMax').value;
    if(precoMin < precoFunc && precoFunc < precoMax){
        return true
    }else{
        return false
    }
}

function checkTipo(tipoInput){
    const tipoFiltro = document.getElementById('tipoFiltro').value;
    console.log(tipoInput)
    console.log(tipoFiltro)
    if(tipoInput == tipoFiltro){
        return true
    }else{
        return false
    }
}

function filtrar(){
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto =>{
        const precoTexto = produto.querySelector('.card .preco').textContent;
        const precoValor = parseFloat(precoTexto.replace('$', ''));
        const tipoProduto = produto.querySelector('.card .tipoProduto').content;

        const precoGate = checkPreco(precoValor);
        const tipoGate = checkTipo(tipoProduto);

        if(precoGate == false || tipoGate == false){
            produto.style.display = 'none';
        } else{
            produto.style.display = '';
        }
    })
}

function reset() {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = ''; 
    });
}


document.getElementById('aplicarFiltro').addEventListener('click', function(event){
    event.preventDefault();
    const precoMinCheck = document.getElementById('precoMin').value;
    const precoMaxCheck = document.getElementById('precoMax').value;
    const tipoFiltro = document.getElementById('tipoFiltro').value

    if (precoMinCheck.trim() === "" || precoMaxCheck.trim() === "" || tipoFiltro.trim() === "") {
        alert("Por favor, preencha os campos de preço corretamente.");
        return;
    }

    filtrar();

})