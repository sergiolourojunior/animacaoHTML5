var canvas;
var numeroInteracoes = 0;
var corNuvem = ["#CCC", "#DDD", "#EEE"];

function posicaoPingo() {
	return Math.floor(Math.random() * ($("#screen").width() - 4));
}

function moverNuvem() {

	if(numeroInteracoes == 5)
	{
		canvas.append('<div class="nuvem"></div>');
	}
	else if(numeroInteracoes == 10)
	{
		canvas.append('<div class="nuvem"></div>');
	}
	else if(numeroInteracoes == 15)
	{
		canvas.append('<div class="nuvem"></div>');
	}

	for(var i = 0; i < $("#screen .nuvem").length; i++)
	{
		var nuvem = $("#screen .nuvem")[i];

		$(nuvem).css({
			width: (i+1)*100,
			marginTop: (i+1)*5,
			backgroundColor: corNuvem[Math.floor(Math.random() * 3)]
		});

		$(nuvem).css('margin-left', Math.floor(Math.random() * (-1 * (canvas.width() - $(nuvem).width())) + (canvas.width() - $(nuvem).width())));
	}
}

function adcPingo() {

	var pingosExistentes = $("#screen .pingo");

	moverNuvem();

	/* nuvem com imagem
	var posicaoBg = canvas.css('background-position-x').replace('px', '');

	if(posicaoBg >= canvas.width())
	{
		canvas.css('background-position-x', -100);
	}
	else
	{
		canvas.css('background-position-x', parseInt(posicaoBg) + parseInt(25));
	}
	*/

	for(var i=0; i < pingosExistentes.length; i++)
	{
		var alturaAtual = $(pingosExistentes[i]).css('margin-top').replace('px', '');
		var alturaNova = parseInt(Math.floor(Math.random() * 15)) + parseInt(alturaAtual);

		if((alturaNova) + $(pingosExistentes[i]).height() > canvas.height())
		{
			$(pingosExistentes)[i].remove();
		}

		$(pingosExistentes[i]).css('margin-top', alturaNova);
	}

	for(var i=0; i<10; i++)
	{
		var left = posicaoPingo();
		var pingo = '<div class="pingo" style="margin-left:'+left+'px"></div>';
		canvas.append(pingo);
	}

}

$(document).ready(function() {

	canvas = $("#screen");

	$(document).keydown(function(){
		numeroInteracoes++;

       adcPingo();
    });

});