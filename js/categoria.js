// Código feito por Erik Suguiyama

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
        
        const precoMinCheck = document.getElementById('precoMin').value.trim();
        const precoMaxCheck = document.getElementById('precoMax').value.trim();
        const tipoFiltro = document.getElementById('tipoFiltro').value.trim();
        const marcaCheck = document.getElementById('marcaFiltro').value.trim();
        
        let precoGate = true
        let tipoGate = true
        let marcaGate = true
        

        if(precoMinCheck != "" && precoMaxCheck != ""){
            precoGate = checkPreco(precoValor);
        }
        if(tipoFiltro != ""){
            tipoGate = checkTipo(tipoProduto);
        }
        if(marcaCheck != ""){
            marcaGate = checkMarca(marcaProduto);
        }


        if(precoGate == false || tipoGate == false || marcaGate == false){
            produto.style.display = 'none';
        } else{
            produto.style.display = '';
        }
    })
}



document.getElementById('aplicarFiltro').addEventListener('click', function(event){
    event.preventDefault();

    filtrar();

})