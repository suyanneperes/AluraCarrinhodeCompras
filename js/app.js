
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

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    /* Este código verifica se a variável produto está vazia, nula ou contém apenas espaços em branco. Vou explicar cada parte detalhadamente:

1. if (!produto || produto.trim() === "")
Este é o início da condição if, que verifica duas situações específicas:
    a. !produto
        O operador ! (negação) inverte o valor booleano da variável produto.
        Quando !produto é verdadeiro:
        produto é falsy, ou seja, tem um valor que, ao ser avaliado em um contexto lógico, resulta em false.
        Portanto, esta parte verifica se produto é nulo, indefinido, ou uma string vazia.
    b. produto.trim() === ""
        produto.trim() remove espaços em branco no início e no final da string.
        A comparação === "" verifica se, depois de remover os espaços, a string é vazia.   
    Juntas: if (!produto || produto.trim() === "")
            A condição avalia se:
            produto é falsy (nulo, indefinido, etc.).
            Ou, se produto, ao remover espaços, é uma string vazia.
            Se qualquer uma dessas condições for verdadeira, o código dentro do if será executado.
2. return;
    O comando return interrompe a execução do código na função atual.
    Quando chamado dentro de uma função, ele impede que qualquer código após ele seja executado.
    No contexto deste código, a execução é interrompida se o produto for inválido.
*/

 // Verificar se a quantidade inserida é válida
 
 if (isNaN(quantidade) || quantidade <= 0) {
    alert("Insira uma quantidade válida.");
    return;
}
/*
1. isNaN(quantidade)
    Função: isNaN() é uma função do JavaScript que verifica se o valor passado como argumento não é um número.
        O que faz: A função retorna true se o valor não for um número válido e false se for.
            Por exemplo:
            isNaN("abc") retorna true (porque "abc" não é um número).
            isNaN(5) retorna false (porque 5 é um número).
    Como é usado aqui: Se o valor de quantidade não for um número, a condição isNaN(quantidade) será true.
2. quantidade <= 0
    Função: Verifica se o valor de quantidade é menor ou igual a zero.
            Exemplo: Se a quantidade inserida for 0 ou um número negativo (como -5), essa condição será true.
            Como é usado aqui: Garante que a quantidade seja positiva. Não faz sentido permitir que a quantidade de um produto seja zero ou negativa.
3. if (isNaN(quantidade) || quantidade <= 0)
    Significado da condição:
            Se a quantidade não for um número válido (como texto ou um valor não numérico), ou
            Se a quantidade for zero ou negativa (como 0, -1, etc.), então a condição será verdadeira.
4. alert("Insira uma quantidade válida.");
    Função: Se a condição if for verdadeira (ou seja, se a quantidade for inválida), um alerta será mostrado ao usuário com a mensagem: "Insira uma quantidade válida."
            Objetivo: Informar o usuário de que o valor inserido não é válido e que ele precisa inserir um valor correto.
5. return;
    Função: O comando return termina a execução da função no ponto em que ele é chamado. Isso significa que, se a condição do if for verdadeira (quantidade inválida), a função não continuará sua execução após o return, ou seja, a quantidade inválida será rejeitada.
            Por exemplo, se a função estiver tentando adicionar o produto ao carrinho, ela não prosseguirá com a adição até que a quantidade seja válida.

*/



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