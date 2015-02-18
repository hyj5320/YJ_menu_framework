<!DOCTYPE html>
<html>
<head>
<title>Bada.tv New!</title>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta content="" name="description" />
<meta content="" name="author" />
<!-- 검색엔진 차단 -->
<meta name="robots" content="noindex,nofollow" />
<!-- NEED TO WORK ON -->

<link href="/assets/css/jetmenu.css" rel="stylesheet">
<link href="/assets/plugins/pace/pace-theme-flash.css" rel="stylesheet" type="text/css" media="screen" />
<link href="/assets/plugins/jquery-slider/css/jquery.sidr.light.css" rel="stylesheet" type="text/css" media="screen" />
<link href="/assets/plugins/boostrapv3/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
<link href="/assets/plugins/boostrapv3/css/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />

<link href="/assets/plugins/font-awesome/css/font-awesome.css" rel="stylesheet" type="text/css" />
<link href="/assets/css/animate.min.css" rel="stylesheet" type="text/css" />


<link href="/assets/plugins/dropzone/css/dropzone.css" rel="stylesheet" type="text/css"/>
<link href="/assets/plugins/bootstrap-select2/select2.css" rel="stylesheet" type="text/css" media="screen"/>
<link href="/assets/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.css" rel="stylesheet" type="text/css"/>


<link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
<link href="/assets/css/style-new.css" rel="stylesheet" type="text/css" />

<link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
<link href="/assets/css/custom-icon-set.css" rel="stylesheet" type="text/css" />
<link href="/assets/less/style.less" rel="stylesheet" type="text/less"/>
<link href="/assets/less/responsive.less" rel="stylesheet" type="text/less"/>

<!-- custom css -->
<link href="/assets/css/custom_menu.css" rel="stylesheet" type="text/css" />

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places"></script>
<link href="/assets/css/flat-ui.css" rel="stylesheet">

<!-- Media Box  -->
<link href="/assets/css/mediaBoxes.css" rel="stylesheet" type="text/css" />
<!-- SCRIPTS FOR THE PLUGIN -->

<script src="/assets/js/jquery-1.10.2.min.js"></script>
<script src="/assets/js/rotate-patch.js"></script>
<script src="/assets/js/waypoints.min.js"></script>
<script src="/assets/js/jquery.qtip-1.0.0.min.js"></script>
<!-- if you wont use the Lazy Load feature erase this line -->
<script src="/assets/js/mediaBoxes.js"></script>
<script>
    $(function () {
        try {
            $('#grid').mediaBoxes({
                columnWidth: 160,
                columnMinWidth: 160,
                imagesToLoadStart: 30,
                loadMoreWord: "LOAD MORE",
                horizontalSpaceBetweenBoxes : 7
            });

            $('#adv').mediaBoxes({
                columnWidth: 330,
                columnMinWidth: 330,
            });
        } catch (e) {
            console.log(e);
        }
    });
</script>

<!-- custom_menu JS files based on Jetmenu -->
<script type="text/javascript" src="/assets/js/custom_menu.js"></script>

<script>
    $(document).ready(function () {
        $().custom_menu();
    });
</script>

<style>
	html, body {
			height: 100%;
	}
		body
        {
			background: #b3d4fc;
			margin: 0;
			padding: 0;
			font-family: 'Calibri', sans-serif;
			font-size: 14px;
							
		}
		.header{
			/*margin: 30px 100px;*/
			display: block;
		}
					.header div{
							/*padding : 15px 0 0 30px;*/
					}
		.panel{
			position: absolute;
			padding: 5px;
			height: 20px;
			width: 250px;
			height: 64px;
			left: 50%;
			margin: 150px 0 0 -125px;
			z-index: 1;
		}
		.panel a{
			display: inline-block; 
			width: 30px; 
			margin: 0;
			height: 30px; 
			outline: none; 
			background: #45484d;
			border: solid 1px #333;
		}
		.panel a:nth-child(1){ background: #e0e0e0; }
		.panel a:nth-child(2){ background: #111111; }
		.panel a:nth-child(3){ background: #82837E; }
		.panel a:nth-child(4){ background: #02b8fa; }
		.panel a:nth-child(5){ background: #008C9E; }
		.panel a:nth-child(6){ background: #88c425; }
		.panel a:nth-child(7){ background: #2ecc71; }
		.panel a:nth-child(8){ background: #C21A01; }
		.panel a:nth-child(9){ background: #FA023C; }
		.panel a:nth-child(10){ background: #ff670f; }
		.panel a:nth-child(11){ background: #D46D22; }
		.panel a:nth-child(12){ background: #febf01; }
		.panel a:nth-child(13){ background: #a849a3; }
		.panel a:nth-child(14){ background: #F56991; }
		.jetmenu{
			margin: 0 0 0 0;
			z-index: 99;
		}
					.wrap { padding-bottom:1.9em;min-height: 100%;}
					.footer { margin-top:-1.9em;height:1.9em}

		/* 테이블 요소 */
		table { border-spacing:2px; border-collapse:separate; margin-top:0px; margin-bottom: 0px; text-indent:0; }
		caption { text-align : center;}
		td { padding:1px;}
		th { color:#999999;font:NanumGothic;font-size:13px;font-weight:bold; padding:1px;}
		tbody, thead, tfoot { vertical-align:middle;}

		#search-box{margin:14px;text-align:left;border:1px solid #999;background-color:#fff;height:30px;padding:0 10px;
								-moz-border-radius:5px;-webkit-border-radius:px;-khtml-border-radius:5px;border-radius:5px;overflow:hidden

		}#search-box input[type="text"]{background-color:#fff;padding:0 0 0 15px;margin:0;text-align:left;color:#bbb;
																		font-size:14px;border:0}
		 #search-box form[name=search-for-item] input[type="text"]{width:180px}
		 /*#search-box form[name=search-for-location] input[type="text"]{width:120px;color:#666;border-left:1px solid #bbb}*/
</style>

    <script>
        // This is called with the results from from FB.getLoginStatus().
        function statusChangeCallback(response) {
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                testAPI();
            } else if (response.status === 'not_authorized') {
                // The person is logged into Facebook, but not your app.
                document.getElementById('status').innerHTML = 'Please log ' +
                  'into this app.';
            } else {
                // The person is not logged into Facebook, so we're not sure if
                // they are logged into this app or not.
                document.getElementById('status').innerHTML = 'Please log ' +
                  'into Facebook.';
            }
        }

        // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.
        function checkLoginState() {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }

        window.fbAsyncInit = function () {
            FB.init({
                appId: '753680094704294',
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.0' // use version 2.0
            });

            // Now that we've initialized the JavaScript SDK, we call
            // FB.getLoginStatus().  This function gets the state of the
            // person visiting this page and can return one of three states to
            // the callback you provide.  They can be:
            //
            // 1. Logged into your app ('connected')
            // 2. Logged into Facebook, but not your app ('not_authorized')
            // 3. Not logged into Facebook and can't tell if they are logged into
            //    your app or not.
            //
            // These three cases are handled in the callback function.

            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });

        };

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&appId=753680094704294&version=v2.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Here we run a very simple test of the Graph API after login is
        // successful.  See statusChangeCallback() for when this call is made.
        function testAPI() {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me', function (response) {
                $('input[name=facebook_id]').val(response.id);
                $('input[name=facebook_email]').val(response.email);
                $('input[name=facebook_name]').val(response.name);
                $('#facebook_login').submit();
            });
        }
</script>

</head>
<body class=" breakpoint-1024 pace-done" style="background-color:#E5E9EC;">

		
