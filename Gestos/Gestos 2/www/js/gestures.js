var app={
	inicio:function(){
		this.inicioBotones();
		this.iniciaFastClick();
		this.iniciaHammer();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},
	inicioBotones: function(){
		var botonClaro = document.querySelector('#Claro');
		var botonOscuro = document.querySelector('#Oscuro');
		
		botonClaro.addEventListener('click',this.ponloClaro, false);
		botonOscuro.addEventListener('click',this.ponloOscuro, false);
	},
	
	iniciaHammer: function(){
		var zona = document.getElementById('zona-gestos');
		var hammertime = new Hammer(zona);
		
		hammertime.get('pinch').set({enable: true});
		hammertime.get('rotate').set({enable: true});
		
		// hammertime.on('tap doubletap pan swipe press pinch rotate', function(ev){ //si se asigna pan con el resto de declaraciones no nos detectara swipe /borrar pan**
		// hammertime.on('tap doubletap swipe press pinch rotate', function(ev){ //si se asigna pinch con el resto de declaraciones no nos detectara  rotate  /borrar pinch**
		hammertime.on('tap doubletap swipe press rotate', function(ev){
			document.querySelector('#info').innerHTML = ev.type+'!';
		});
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
		app.inicio();	
	},false);
}

