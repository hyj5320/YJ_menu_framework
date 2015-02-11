/*

02/05/2015
created by Youngjun Han, hyj5320@gmail.com

FUNCTIONALITY
dynamic menu resizing library (total up to 3 different resizing available)
*/

// 3 possible cases menu > 1024, 1024 > menu > 768, 768 > menu | add more points if you need

//menu for search box in the navbar && 3 way UI conversion
(function($){

	jQuery.fn.custom_menu = function(width){
		var settings = {
			 indicator	 		:true     			// indicator that indicates a submenu
			,sub_speed	 		:300     			// submenu speed
			,delay				:0					// submenu show delay
			//,hideClickOut		:true     			// hide submenus when click outside menu
			//,align				:"left"				// menu alignment (left/right)
			//,submenuTrigger		:"hover"			// defines if submenu appears after hover/click
			,resizing_point_large:1024				// resizing points
			,resizing_point_small:768
			,fixed_width 		: width
		}
		$.extend( settings );						//assign setting values to the object? maybe..
		
		var menu = $(".custom_menu");				//selecting custom_menu division
		var lastScreenWidth = windowWidth();		//previous windowWidth
		var bigScreen = false;						//??
		
		//? something about submenu (probably not need)
		if(settings.indicator == true){
			$(menu).find("a").each(function(){
				if($(this).siblings(".dropdown, .megamenu").length > 0){
				}
			});
		}
		
		//init menu
		init_menu(lastScreenWidth);

		//resizing		
		$(window).resize(function() {

			//resizing with in large
			if(lastScreenWidth > settings.resizing_point_large && windowWidth() > settings.resizing_point_large )
			{
				set_search_width( settings.fixed_width, windowWidth());
			}

			//need to worked from here

			//resizing from large to medium (not done)
			if(lastScreenWidth > settings.resizing_point_large && windowWidth() <= settings.resizing_point_large )
			{
				
				//un large (hide and unbind or whatever large does)
				set_undisplay("nav_large");
	            set_unbind("nav_search");
	            set_unbind("nav_menu");

				//Set medium
				set_display("nav_medium");
				set_click("nav_search");	
				set_click("nav_menu");
			}

			//resizing from medium to large (not done)
			if(lastScreenWidth <= settings.resizing_point_large && windowWidth() > settings.resizing_point_large )
			{
				//un medium (hide and unbind or whatever medium does)
				set_undisplay("nav_medium");
	            set_unbind("nav_search");
	            set_unbind("nav_menu");

				//Set large
				set_display("nav_large");
				set_hover("nav_search");	
				set_hover("nav_menu");
			}

			//resizing from medium to small (not done)
			if(lastScreenWidth > settings.resizing_point_small && windowWidth() <= settings.resizing_point_small )
			{

				//un medium (hide and unbind or whatever medium does)
				set_undisplay("nav_medium");
	            set_unbind("nav_search");
	            set_unbind("nav_menu");
		
				//set small
				set_display("nav_small");
				set_click("nav_search");	
				set_click("nav_small_menu");

			}
			//resizing from small to medium (not done)
			if(lastScreenWidth <= settings.resizing_point_small && windowWidth() > settings.resizing_point_small )
			{
				
				//un small (hide and unbind or whatever small does)
				set_undisplay("nav_small");
	            set_unbind("nav_search");
	            set_unbind("nav_small_menu");
		
				//set medium
				set_display("nav_medium");
				set_click("nav_search");	
				set_click("nav_menu");
			}

			lastScreenWidth = windowWidth();
			
		});

		//initialization (not done)

		// Navigator for large screen (search box embedded in the nav)
		//done? hilight the specific section can be added (not important)
		function init_menu(screen_width){

			//large
			if( screen_width > settings.resizing_point_large)
			{
				//width ajustment
	            set_search_width(settings.fixed_width, screen_width);
				
				//display large screen obejct
				set_display("nav_large");

	            //on-hover behavior on
	            set_hover("nav_search");
	            set_hover("nav_menu");
			}

			//medium
			else if(screen_width <= settings.resizing_point_large && screen_width > settings.resizing_point_small)
			{

				//display medium screen obejct
				set_display("nav_medium");

				//on-click behavior on
				set_click("nav_search");	
				set_click("nav_menu");
			}

			//small
			else
			{
				//display small screen obejct
				set_display("nav_small");

				//on-click behavior on
				set_click("nav_search");	
				set_click("nav_small_menu");	
			}
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
				if($(this).children(".dropdown, .megamenu").length > 0){
					$(this).children("a").bind("click", function(e){
						if($(this).siblings(".dropdown, .megamenu").css("display") == "none"){
							$(this).siblings(".dropdown, .megamenu").delay(settings.delay).slideDown(settings.speed).focus();
							$(this).parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(settings.speed);
							return false;
						}
						else{
							$(this).siblings(".dropdown, .megamenu").slideUp(settings.speed).focus();
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
		
		// analyzing
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
		
		// analyzing
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

		//hovering for menu (done)
		function set_hover(class_name)
		{
			target = "li." + class_name;

			//for nav_search hovering (only works in large case)
			if(class_name == "nav_search")
			{
				$(menu).find("li.nav_content_search").bind("mouseenter", function(){
					$(".input-group-addon.content_icon").css("background-color","#D7D7D7");
					$(".inputbox.content_inputbox").css("background-color","#D7D7D7");
					$(".inputbox.content_inputbox").css("border-left-width","0px");
				}).bind("mouseleave", function(){
					$(".input-group-addon.content_icon").css("background-color","#333333");
					$(".inputbox.content_inputbox").css("background-color","#333333");
				});

				$(menu).find("li.nav_location_search").bind("mouseenter", function(){
					$(".input-group-addon.location_icon").css("background-color","#D7D7D7");
					$(".inputbox.location_inputbox").css("background-color","#D7D7D7");
					$(".inputbox.location_inputbox").css("border-right-width","0px");
				}).bind("mouseleave", function(){
					$(".input-group-addon.location_icon").css("background-color","#333333");
					$(".inputbox.location_inputbox").css("background-color","#333333");
				});				
			}

			//general cases (adding hovering attributes to the menu)
			else
			{
				$(menu).find(target).bind("mouseenter", function(){	
					$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeIn(settings.sub_speed);
				}).bind("mouseleave", function(){
					$(this).children(".dropdown, .megamenu").stop(true, true).delay(settings.delay).fadeOut(settings.sub_speed);
				});	
			}
			
		}

		//dispaly paramater object (done)
		function set_display(class_name)
		{
			target = "li." + class_name;
			$(menu).children(target).show();
		}

		//measuring windowWidth (done)
		function windowWidth(){
			return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		}
	
		//setting up responsive in-nav search width (large condition, done)
		function set_search_width(fixed_width, screen_width)
		{
			$('.form_search').width( screen_width - fixed_width );
		}
	}
}(jQuery));



/*	original responsive code
    $(window).resize(function() {
        
        var window_size = $( window ).width();
        
        if(window_size > 1024 )
        {     
            search_box_size = window_size - fixed_width;
            $('#content-search-box').width( search_box_size );
            $('#location-search-box').width( 160 );

            //expand login & upload
            $('.right.nav_upload').html("<a id='tight' href='/bada/main/upload'><span class='icon-upload'></span>업로드</a>");
            $('.right.nav_login').html("<a id='tight' href='/bada/main/upload'><span class='icon-user'></span>로그인</a>");

            //set context search and location search
            $('li#content-search-box').css("display","inline");
            $('li#location-search-box').css("display","inline");

            //eliminate mobile search
            $('li.right.search_mobile').css("display","none");

        }
        else if(window_size >= 768 && window_size <= 1024)
        {
            //shrink login& upload
            $('.right.nav_upload').html("<a id='tight' href='/bada/main/upload'><span class='icon-upload'></span></a>");
            $('.right.nav_login').html("<a id='tight' href='/bada/main/upload'><span class='icon-user'></span></a>");

            //eliminate context and location search
            $('li#content-search-box').css("display","none");
            $('li#location-search-box').css("display","none");
            
            //set mobile search
            $('li.right.search_mobile').css("display","inline");
        }
        else
        {

        }
    });
*/