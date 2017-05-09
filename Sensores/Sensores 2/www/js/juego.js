var app ={
		inicio: function(){
			DIAMETRO_BOLA = 50;
			
			velocidadX=0;
			velocidadY=0;
			puntuacion=0;
			
			alto = document.documentElement.clientHeight;
			ancho = document.documentElement.clientWidth;
			
			app.vigilaSensores();
			app.iniciaJuego();	
		},
		
		iniciaJuego: function(){
			
			function preload(){
				game.physics.startSystem(Phaser.Physics.ARCADE);
				
				game.stage.backgroundColor = '#f27d0c';
				game.load.image('bola', 'assets/bola.png');
			}

			function create(){
				scoreText = game.add.text(16, 16, puntuacion, { fontSize: '100px', fill: '#757676' });
				bola = game.add.sprite(app.inicioX(), app.inicioY(), 'bola');
				game.physics.arcade.enable(bola);
				bola.body.collideWorldBounds = true;
				bola.body.onWorldBounds = new Phaser.Signal();
				bola.body.onWorldBounds.add(app.decrementaPuntuacion, this);
			}
			
			function update(){
				bola.body.velocity.y = (velocidadY * 300);
				bola.body.velocity.x = (velocidadX * -300);
			}
			
			var estados = { preload: preload, create: create, update: update };
			var game = new Phaser.Game(ancho, alto, Phaser.CANVAS, 'phaser', estados);
		},
		
		decrementaPuntuacion: function(){
			puntuacion = puntuacion -1;
			scoreText.tex = puntuacion;
		},
		
		inicioX: function(){
			return app.numeroAleatorioHasta(ancho - DIAMETRO_BOLA);
		},	
		
		inicioY: function(){
			return app.numeroAleatorioHasta(alto - DIAMETRO_BOLA);
		},
		
		numeroAleatorioHasta: function(limite){
			return Math.floor(Math.random() * limite);
		},
		
		vigilaSensores: function(){
			function onError(){
				console.log('onError');
			
			}
			function onSuccess(datosAceleracion){
				app.detectaAgitacion(datosAceleracion);
				app.registraDireccion(datosAceleracion);
				// alert('con exito');
			}
			options = {frequency: 10};
			navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		},

		detectaAgitacion: function(datosAceleracion){
			var agitacionX = datosAceleracion.x > 10;
			var agitacionY = datosAceleracion.y > 10;
			
			if(agitacionX || agitacionY){
				setTimeout(app.recomienza, 1000)
			}
		},	
		
		recomienza: function(){
			document.location.reload(true);
		},
		
		registraDireccion: function(datosAceleracion){
			velocidadX = datosAceleracion.x ;
			velocidadY = datosAceleracion.Y ;
		}
	};
if('addEventListener' in document){
	document.addEventListener('deviceready', function(){
		app.inicio();
	},false);
}