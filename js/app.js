//crear elemento select
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu con la funcion each
$("#menu a").each(function()
{
	var $anchor = $(this);
	//crear una opcion para el select por cada elemento
	var $option=$("<option></option>");
	//obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada opcion
	$option.text($anchor.text());
	//agregar option al select
	$select.append($option);

	//obtener si el link en la pagina actual (tiene clase selected)
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var sala1 =
{
	ciudad:"Playas",numSalas: 2, direccion:"avda los girasoles"
};
var sala2 =
{
	ciudad:"Guayaquil",numSalas: 3, direccion:"avda 9 de octubre"
};
var sala3 =
{
	ciudad:"Quito",numSalas: 4, direccion:"avda los incas"
};
var sala4 =
{
	ciudad:"Ambato",numSalas: 5, direccion:"avda el ambateño"
};
var sala5 =
{
	ciudad:"Santa Elena",numSalas: 3, direccion:"avda palma junta"
};

var sala =[];
sala.push(sala1);sala.push(sala2);sala.push(sala3);sala.push(sala4);sala.push(sala5);

for (var i=0; i < sala.length; i ++)
{
listHTML = '<ul><li>' + sala[i].ciudad + '<br>'+sala[i].numSalas+ '<br>'+sala[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-locales"); 
				infoDiv.innerHTML+=listHTML;
			}