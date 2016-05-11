var $select = $("<select></select>");
$("#peliculaname").append($select);

//recorrer el menu con la funcion each
$("#peliculaname").each(function()
{
	var $select = $(this);
	var $option=$("<option>Transformers</option>");
	$select.append($option);
	var $option=$("<option>Gardfiel</option>");
	$select.append($option);
var $option=$("<option>Pixel</option>");
	$select.append($option);
	var $option=$("<option>American Pie</option>");
	$select.append($option);
	var $option=$("<option>Steve Job</option>");
	$select.append($option);
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select2 = $("<select></select>");
$("#localname").append($select2);

$("#localname").each(function()
{
	var $select = $(this);
	var $option=$("<option>Playas</option>");
	$select.append($option);
	var $option=$("<option>Guayaquil</option>");
	$select.append($option);
var $option=$("<option>Quito</option>");
	$select.append($option);
	var $option=$("<option>Ambato</option>");
	$select.append($option);
	var $option=$("<option>Santa Elena</option>");
	$select.append($option);
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});

var $select3 = $("<select></select>");
$("#imagenpeli").append($select3);

$("#imagenpeli").each(function()
{
	var $select = $(this);
	var $option=$('<option><a href="img/peli1.jpg">Imagen pelicula Transformers</a></option>');
	$select.append($option);
	if($(this).hasClass("selected"))
	{
		$option.prop("selected",true);
	}

});