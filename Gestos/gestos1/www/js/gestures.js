var app={
	inicio:function(){
		var botonClaro = document.querySelector('#Claro');
		var botonOscuro = document.querySelector('#Oscuro');
		botonClaro.addEventListener('click',this.ponloClaro,false);
		botonOscuro.addEventListener('click',this.ponloOscuro,false);
	},
	ponloClaro: function(){
		document.body.className = 'Claro';

	},
	ponloOscuro: function(){
		document.body.className = 'Oscuro';

	},
};
if('addEventListener' in document){
	document.addEventListener('DOMContentLoaded',function(){
		FastClick.attach(document.body);
		app.inicio();	
	},false);
}

