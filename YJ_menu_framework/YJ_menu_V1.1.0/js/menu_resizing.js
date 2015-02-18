/*

02/05/2015
created by Youngjun Han, hyj5320@gmail.com

FUNCTIONALITY
dynamic menu resizing library (total up to 3 different resizing available)
*/

var resizing_point = { 1024, 768 }		// 3 possible cases menu > 1024, 1024 > menu > 768, 768 > menu | add more points if you need



function document.ready
{
	var window_size = window.size()..


	if( window_size > resizing_point[0] )
	{
		set_large();
	}
	else if( window_size > resizing_point[1] )
	{
		set_medium();
	}
	else
	{
		set_small();
	}

}

function document.resize()
{
	if(large)
	{
		to_large();
	}
	else if(medium)
	{
		set_medium();	//to_medium is not applicable since there need to be two methods that to_medium_from_large & to_medium_from_small
	}
	else
	{
		to_small();
	}	
}

function set_large()
{

}

function set_medium()
{
	
}

function set_small()
{
	
}

function to_large()
{
	
}

function to_small()
{
	
}