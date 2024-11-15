
let totalGeral = 0;
limpar(); //Como a função limpar zera tudo e substitui o texto do 'valor-total' por 'R$ 0', posso chamá-la no início e deixar tudo já limpo. 
//document.getElementById('lista-produtos').innerHTML = ''; Zero o elemento lista-produtos
//document.getElementById('valor-total').textContent = 'R$ 0'; Substituo o texto que tem em valor-total pelo texto que eu escolhi 
function adicionar() {
    //recuperar valores nome do produtom quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //.split() é usado para dividir uma string em partes, criando um array com os pedaços resultantes. O parâmetro passado dentro dos parênteses define o delimitador, ou seja, o que será usado para fazer a separação. Agora, o uso de [] após .split() indica que queremos acessar um elemento específico, no caso o número que eu colocar é o da posição do item nesse array. 
    //A variável com id "produto" possui duas informações "protuto - preço", por isso a necessidade dessa split.
    let valorUnitario = produto.split('R$')[1]; // A split vai usar o R$ como "corte", por que no texto esse R$ aparece antes do valor, e como eu defini esse como sendo o elemento de corte, agora é só "pegar" o que tiver a posteriori, que no caso é o item [1], pois os arrays se iniciam por zero.
    let quantidade = document.getElementById('quantidade').value;
    //calcular o preço, o nosso subtotal.
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>`;
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}


function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    }