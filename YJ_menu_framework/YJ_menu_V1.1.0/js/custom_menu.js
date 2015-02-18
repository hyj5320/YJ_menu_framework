/*

02/05/2015
created by Youngjun Han, hyj5320@gmail.com

FUNCTIONALITY
dynamic menu resizing library (total up to 3 different resizing available)
*/

// 3 possible cases menu > 1024, 1024 > menu > 768, 768 > menu | add more points if you need


//interesting point
//You can just add hover and click behavior at the same time


//menu for search box in the navbar && 3 way UI conversion
(function($){

	jQuery.fn.custom_menu = function(width){
		var settings = {
			sub_speed	 		:500     			// submenu speed
			,delay				:0					// submenu show delay
			,resizing_point_large:1024				// resizing points
			,resizing_point_small:768
			,logo_location_large:"/assets/img/badalogo.png"
			,logo_location_medium:"/assets/img/badalogo.png"
			,logo_location_small:"/assets/img/badalogo_small.png"
			,menu_right_context1:"      로그인"
			,menu_right_icon1: "<span class='icon-user'></span>"
			,menu_right_context2:"      업로드"
			,menu_right_icon2: "<span class='icon-upload'></span>"
			,logo_large_width: 135 
		}
		$.extend( settings );						//assign setting values to the object? maybe..
		
		var menu = $(".custom_menu");				//selecting custom_menu division
		var lastScreenWidth = windowWidth();		//previous windowWidth
		var bigScreen = false;						//??
		
		//init menu
		init_menu();

		// Navigator for large screen (search box embedded in the nav)
		//done? hilight the specific section can be added (not important)
		function init_menu(){

			//large
			if( lastScreenWidth > settings.resizing_point_large)
			{

				//set logo
				set_logo(settings.logo_location_large);
				
				//set right menu
				//set_right_nav("nav_upload", settings.menu_right_icon2 + settings.menu_right_context2);
				//set_right_nav("nav_login", settings.menu_right_icon1 + settings.menu_right_context1);

	            //on-hover behavior
	            set_hover("nav_large_menu");
				set_search_width(settings.logo_large_width + 25);

	            //set display
	            set_display("nav_large");
				//width ajustment
	            
			}

			//medium
			else if( lastScreenWidth > settings.resizing_point_small)
			{
				//setup logo
				set_logo(settings.logo_location_medium);

				set_right_nav("nav_upload", settings.menu_right_icon2);
				set_right_nav("nav_login", settings.menu_right_icon1);

				//on-click behavior on
				set_click("nav_medium_search");	
				set_click("nav_medium_menu");
				set_display("nav_medium");

			}

			//small
			else
			{

				//set up logo
				set_logo(settings.logo_location_small);
				set_right_nav("nav_upload", settings.menu_right_icon2);
				set_right_nav("nav_login", settings.menu_right_icon1);

				//on-click behavior on
				set_click("nav_small_menu");
				set_click("nav_small_submenu");
				set_click("nav_small_search");
				//display small screen obejct
				set_display("nav_small");
				
			}
		}

		//responsive resizing		
		$(window).resize(function() {

			//resizing search-box within large mode
			if( windowWidth() > settings.resizing_point_large && lastScreenWidth > settings.resizing_point_large )
			{
				set_search_width(settings.logo_large_width + 25);
			}

			//to large
			else if(lastScreenWidth <= settings.resizing_point_large && windowWidth() > settings.resizing_point_large)
			{

				//un-medium and un-small
				set_unbind("nav_medium_search");
				set_unbind("nav_small_search");
				
				//Set large
				set_right_nav("nav_upload", settings.menu_right_icon2 + settings.menu_right_context2);
				set_right_nav("nav_login", settings.menu_right_icon1 + settings.menu_right_context1);

				set_hover("nav_search");	
				set_hover("nav_large_menu");
				set_logo(settings.logo_location_large);
				//display
				set_undisplay("nav_small");
	          	set_undisplay("nav_medium");
	          	set_search_width(settings.logo_large_width + 25);

	          	set_display("nav_large");

			}
				
			//to medium
			else if( (lastScreenWidth <= settings.resizing_point_small && windowWidth() > settings.resizing_point_small) || (lastScreenWidth > settings.resizing_point_large && windowWidth() <= settings.resizing_point_large) )
			{

				//setting
				set_right_nav("nav_upload", settings.menu_right_icon2);
				set_right_nav("nav_login", settings.menu_right_icon1);

				set_logo(settings.logo_location_medium);
				
				set_unbind("nav_large_menu");
				set_click("nav_medium_menu");	
				set_click("nav_medium_search");	
				//display
				set_undisplay("nav_large");
				set_undisplay("nav_small");

	          	set_display("nav_medium");
			}

			//to small
			else if( lastScreenWidth < settings.resizing_point_small && windowWidth() <= settings.resizing_point_small )
			{

				//un large (hide and unbind or whatever large does)
	            set_unbind("nav_search");
	            set_click("nav_search"); 
	            
				//set small
				set_click("nav_small_menu");
				set_logo(settings.logo_location_small);
				set_click("nav_small_submenu");
				//display
				set_undisplay("nav_large");
				set_undisplay("nav_medium");
	          	set_display("nav_small");

			}

			lastScreenWidth = windowWidth();
			
		});

		function set_right_nav(li_id, context)
		{
			switch(li_id)
			{
				case 'nav_upload' :
					$("#" + li_id).children('a').html(context);
					break;

				case 'nav_login' :
					$("#" + li_id).children('a').html(context);
					break;

			//add more if you have more

			}
			
		}

		function set_logo(location_source)
		{
			$(".nav_logo").children('.logo').attr('src',location_source);
		}

		// done but not tested 
		function set_undisplay(class_name)
		{
			target = "li." + class_name;
			$(menu).children(target).hide();
		}

		function set_click(class_name)
		{
			target = "li." + class_name;

			$(menu).find(target).each(function(){	//find nav li which has sub menu

				if($(this).children(".dropdown, .megamenu, .dropdown-sub").length > 0){
					$(this).children("a").bind("click", function(e){
						if($(this).siblings(".dropdown, .megamenu, .dropdown-sub").css("display") == "none"){
							$(this).siblings(".dropdown, .megamenu, .dropdown-sub").delay(settings.delay).slideDown(settings.speed).focus();
							$(this).parent("li").siblings("li").find(".dropdown, .megamenu, .dropdown-sub").slideUp(settings.speed);
						
							return false;
						}
						else{
							$(this).siblings(".dropdown, .megamenu, .dropdown-sub").slideUp(settings.speed).focus();

							//firstItemClick = 1;
							return false;
						}
					});
				}
			});				
			
		}

		//unbind target li
		function set_unbind(class_name)
		{
			target = "li." + class_name;
			$(menu).find(target).unbind();						//find links in the nav bar
			//$(document).unbind("click.menu touchstart.menu");	//?
			//$(menu).find(".dropdown, .megamenu").hide(0);	
		}
		
		//hovering for menu (done)
		function set_hover(class_name)
		{
			target = "li." + class_name;
			$(menu).find(target).bind("mouseenter", function(){	
				$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.sub_speed);
				//adding highlighting attributes

			}).bind("mouseleave", function(){
				$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeOut(settings.sub_speed);
			});	
		}

		//dispaly paramater object (done)
		function set_display(class_name)
		{
			target = "li." + class_name;
			$(menu).children(target).show();
		}

		//measuring windowWidth (done)
		//
		function windowWidth(){

			return $(document).width();
		}
	
		//setting up responsive in-nav search width (large condition, done)
		function set_search_width(logo_size)
		{
			var fixed_width = 0;
			fixed_width += logo_size;

			//nav_large_menu, nav_logo, nav_right
			$(menu).find(".nav_large_menu").each(function() {
				fixed_width += $(this).width();
			});

			fixed_width += $(menu).find("#nav_upload").width();
			fixed_width += $(menu).find("#nav_login").width();

			fixed_width += 170;
			$('.form_search').width( windowWidth() - fixed_width);
		}

		//mycode till here

		// dropdowns...
		function showCollapse(){
			$(menu).children("li:not(.showhide)").hide(0);
			$(menu).children("li.showhide").show(0);
			$(menu).children("li.showhide").bind("click", function(){
				if($(menu).children("li").is(":hidden")){
					$(menu).children("li").slideDown(settings.speed);
				}
				else{
					$(menu).children("li:not(.showhide)").slideUp(settings.speed);
					$(menu).children("li.showhide").show(0);
					$(menu).find(".dropdown, .megamenu").hide(settings.speed);
				}
			});
		}
		
		// dropdownss....
		function hideCollapse(){
			$(menu).children("li").show(0);
			$(menu).children("li.showhide").hide(0);
		}	
		
		// analyzing
		function rightAlignMenu(){
			$(menu).children("li").addClass("jsright");
			var items = $(menu).children("li");
			$(menu).children("li:not(.showhide)").detach();
			for(var i = items.length; i >= 1; i--){
				$(menu).append(items[i]);
			}			
			fixSubmenuRight();
		}
		
		// analyzing
		function fixSubmenuRight(){
			$(menu).children("li").removeClass("last");
			var items = $(menu).children("li");
			for(var i = 1; i <= items.length; i++){
				if($(items[i]).children(".dropdown, .megamenu").length > 0){
					var lastItemsWidth = 0;
					for(var y = 1; y <= i; y++){
						lastItemsWidth = lastItemsWidth + $(items[y]).outerWidth();
					}
					if($(items[i]).children(".dropdown, .megamenu").outerWidth() > lastItemsWidth){
						$(items[i]).addClass("last");
					}
				}
			}
		}
		
		// analyzing
		function fixSubmenuLeft(){
			$(menu).children("li").removeClass("fix-sub");
			var items = $(menu).children("li");
			var menuWidth = $(menu).outerWidth();
			var itemsWidth = 0;
			for(var i = 1; i <= items.length; i++){
				if($(items[i]).children(".dropdown, .megamenu").length > 0){
					if($(items[i]).position().left + $(items[i]).children(".dropdown, .megamenu").outerWidth() > menuWidth){
						$(items[i]).addClass("fix-sub");
					}
				}
			}
		}

	}
}(jQuery));

