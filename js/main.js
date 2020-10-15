$(document).ready(function(){

	($('#prostorija').val()=='' || $('#tuvSelect').val()=='') ? $('#infoReport').hide() : $('#infoReport').show()
	
	$(document).on('keyup','#prostorija',function(){
		let prostorija=parseInt($('#prostorija').val());
		$('#tuvSelect').val('');
		$('#infoReport').hide();
		$('.optimalnaKolicina').html("");
		$('.potrebnaRadijacija').html("");
		let info="<p>За дезинфекција на простор од <span class='prostor'></span>m<sup>2</sup> потребни се <span class='radijacija'></span>W UV-C зрачење</p>";
		radijacijaProstor=parseFloat(prostorija)*0.35*1.25/0.8;

		$('.potrebnaRadijacija').append(info);
		$('.prostor').html(prostorija);
		$('.radijacija').html(radijacijaProstor.toFixed(4));
		$('#infoReport').show();
		// $('.potrebnaRadijacija').html(radijacijaProstor);
	})
	
	$('#tuvSelect').on('change',function(){
		let optimalnaQtyHtml=$('.optimalnaKolicina').html("");
		let radijacija=$(this).val();

		let html = '<p>Одбраната сијалица има <b>'+ radijacija+'W</b> UV-C радијација.</p><br>';
		// html+='<p>За дезинфекција на простор од ' + $('#prostorija').val() + 'm<sup>2</sup> потребни се  ' +radijacijaProstor.toFixed(4) + 'W UV-C зрачење</p>';
		optimalnaQtyHtml.append(html);
		let optQty=Math.ceil(radijacijaProstor/radijacija);
		html='<p>Според одбраната сијалица, оптимална потребна количина би била <b>'+optQty+'</b> ('+(radijacija*optQty).toFixed(2)+'W UV-C)<p>';
		optimalnaQtyHtml.append(html);
		$('#infoReport').show();
	});
});
