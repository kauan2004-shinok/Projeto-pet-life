// elemento duvida

var elementosDuvida = document.querySelectorAll('.duvida')
	
elementosDuvida.forEach((duvida) =>{
	duvida.addEventListner('click', () =>{
		duvida.classList.toggle('ativa');
	})

})

// function nome(argumento){
// 	conteudo da função
// }