function checkPreco(precoFunc){
    const precoMin = document.getElementById('precoMin').value;
    const precoMax = document.getElementById('precoMax').value;
    if(precoMin < precoFunc && precoFunc < precoMax){
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

        const precoGate = checkPreco(precoValor);
        if(precoGate == false){
            produto.style.display = 'none';
        } else{
            produto.style.display = 'block';
        }
    })
}

function reset() {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        produto.style.display = 'block'; 
    });
}


document.getElementById('aplicarFiltro').addEventListener('click', function(event){
    event.preventDefault();
    const precoMinCheck = document.getElementById('precoMin').value;
    const precoMaxCheck = document.getElementById('precoMax').value;


    if (precoMinCheck.trim() === "" || precoMaxCheck.trim() === "") {
        alert("Por favor, preencha os campos de preço corretamente.");
        return;
    }

    filtrar();

})