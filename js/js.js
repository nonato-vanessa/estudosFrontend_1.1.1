//código para o formulário

//VALIDAR O NOME
//pegar o campo
var nome = document.querySelector("#nome");

//criar a validação
function validaNome(){
	/*console.log("funfou");* testar a função/

	/*pegar o campo nome/ Pegar valor nome*/
	//.value pela o valor do input. O valor é uma string
	/*pegar o valor dele*/
	var valorNome = nome.value;

	
	/*verificar se o valor é vazio*/
	if(valorNome == ""){
	//se for vazio deixa o campo vermelho
	// adiciona uma classe no campo nome
	//className edita o html/ não adiciona 
	nome.parentNode.classList.add("errado");		
	}else{
		nome.parentNode.classList.remove("errado")
	}
}	
	
//executar a validação ao sair do foco do campo
nome.onblur = validaNome;

//VALIDAR A IDADE

//PEGAR O CAMPO QUE VAI SE VALIDADE 
//colocar um valor na caixinha
var idade = document.querySelector("#idade");
//document.querySelector busca ELEMENTO HTML

//CRIAR A FUNÇÃO DA VALIDAÇÃO

function validaIdade(){
	//pegar o valor do input
	var valorIdade = idade.value;

	//verificar se o valor é menor que 18
	if(valorIdade < 18){
		//caso menor que 18 deixa o campo vermelho
		idade.parentNode.classList.add("errado");
		//idade é tipo elemento, parentNode 
		//é para elementos e pega um elemento 
		//nivel superior (pai). 
		//parentNode(é uma tag html) retorna tipo elemento 
	}else{
		idade.parentNode.classList.remove("errado")
	}


}

//EXECUTAR A FUNÇÃO AO DESFOCAR 
//(APLICAR A ALGUM EVENTO, QUANDO SERÁ EXECUTADO )
idade.onblur = validaIdade;



//CAMPO DE TEXTO
//selecionar o formulário
var formulario = document.querySelector("#formSugestoes");

//Criar a função que vai ser executada ao submeter o formulário

//função criarBalao jeito 1
function adicionarBalao(){
	//return false toda vez que queremos 
	//anular o comportamento padrão
	//criar um balao que é um elemento
	var balao = document.createElement("div");
	//adicionar uma class no elemento
		balao.classList.add("balao");
	//inserir dentro da tag "#baloes"

	//dentro do balão tem:
	//<header>
	//<h3>
	//<p></p>
	//</h3>
	//<span>
	//</header>

	//pegar o valor do texto
	var p = document.createElement("p");
    div.appendChild(p); //appendChild coloca um elemento dentro de outro

	var sugestao = document.querySelector("#sugestao");
	var sugestaoValor = sugestao.value;

	//colocando o valor dentro de <p>
	//<p>{sugestaoValor}</p> .innerText é uma propriedade
	p.innerText = sugestaoValor;

	//depois inserir dentro da tag "#baloes"
	var baloes = document.querySelector("#baloes");
	//colocar uma tag dentro de outra
	baloes.appendChild(balao);

	return false;

}
//Atrelar a função a um evento: onsubmit
formulario:onsubmit  = adicionarBalao;


//APARECER O BALÃO AO SUBMETER
//---> NOME
///

//criar balao jeito 2
function adicionarBalao(){
	var div = document.querySelector("div");
	div.classList.add("balao");

	var sugestao = document.querySelector("#sugestao");

	div.innerHTML = "<h3>" + "" + "</h3>";
}


div.innerHTML = <h3>