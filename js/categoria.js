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
    if(tipoInput == tipoFiltro){
        return true
    }else{
        return false
    }
}

function checkMarca(marcaInput){
    const marcaFiltro = document.getElementById('marcaFiltro').value;
    if(marcaFiltro == marcaInput){
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
        const marcaProduto = produto.querySelector('.card .marca').textContent;

        const precoGate = checkPreco(precoValor);
        const tipoGate = checkTipo(tipoProduto);
        const marcaGate = checkMarca(marcaProduto);

        if(precoGate == false || tipoGate == false || marcaGate == false){
            produto.style.display = 'none';
        } else{
            produto.style.display = '';
        }
    })
}



document.getElementById('aplicarFiltro').addEventListener('click', function(event){
    event.preventDefault();
    const precoMinCheck = document.getElementById('precoMin').value;
    const precoMaxCheck = document.getElementById('precoMax').value;
    const tipoFiltro = document.getElementById('tipoFiltro').value
    const marcaCheck = document.getElementById('marcaFiltro').value

    if (precoMinCheck.trim() === "" || precoMaxCheck.trim() === "" || tipoFiltro.trim() === "" || marcaCheck.trim() === "") {
        alert("Por favor, preencha os campos de preço corretamente.");
        return;
    }

    filtrar();

})