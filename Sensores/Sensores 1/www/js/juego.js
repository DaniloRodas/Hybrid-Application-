var app ={
		inicio: function(){
			function onError(){
			console.log('onError!');
			}
		navigator.accelerometer.watchAcceleration(this.onSuccess, onError,{frequency: 1000});
	},
	onSuccess: function(datosAceleration){
		app.representaValores(datosAceleration);
		app.detectaAgitacion(datosAceleration);
		
	},
	detectaAgitacion: function(datosAceleration){
		agitacionX = datosAceleration.x > 10;
		agitacionY = datosAceleration.y > 10;
		
		if(agitacionX || agitacionY){
			document.body.className = 'agitado';
		}else{
				document.body.className = '';
		}
	},	
		
	representaValores: function(datosAceleration){
		app.representa(datosAceleration.x, '#valorx');
		app.representa(datosAceleration.y, '#valory');
		app.representa(datosAceleration.z, '#valorz');
	},
	
	representa: function(dato, elementoHTML){
		redondeo = Math.round(dato * 100) / 100
		document.querySelector(elementoHTML).innerHTML = redondeo;
	}
};
if('addEventListener' in document){
	document.addEventListener('deviceready', function(){
		app.inicio();
	},false);
}