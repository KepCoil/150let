$(function() {

	// Mmenu
	$('#my-menu').mmenu({
		extensions: {
			all: ["theme-white", 
					"pagedim-black",
					"fx-menu-slide"
			]
	  },
		navbar: {
			title: '<a href="/"><img src="img/logo-white.svg" class="mm-navbar__img" alt="СибГУ им. М.Ф. Решетнева"/></a>'
		},
		"navbars": [
			{
				'position': 'bottom',
				'content': [
					'<button id="js-spec-vers" class="spec-vers">Версия для слабовидящих</button>'
				]
			}
		],
		sidebar: {
			collapsed: {
				 use: 992,
				 hideNavbar: !0,
				 hideDivider: !0
			},
			expanded: {
				 use: 993,
				 initial: "remember"
			}
	  },
		offCanvas: {
			position: 'left'
		}
	});

	
	var apiMmenu = $('#my-menu').data('mmenu');
	apiMmenu.bind('opened', function() {
		console.log('opened');
		$('#js-menu-btn').addClass('is-active');
	}).bind('closed', function() {
		console.log('closed');
		$('#js-menu-btn').removeClass('is-active');
	});



	// Ссылка ВКЛ./ВЫКЛ. версии для слабовидящих
	$("#js-spec-vers").click(function() { 

		if ( ($.cookie("CecutientCookie")=="on") || ($(this).hasClass("active")) ) {
			CecutientOff();
		}
		else {
			CecutientOn();
			mediumFontSize();
			whiteTheme();
			imageOn();
			$(this).addClass("active");
			$('#js-spec-version').addClass('special-version--active');
		}

		return false;
	});


	// Кнопка отключения версии для слабовидящих
	$("#js-spec-vers_close").click(function() {
		CecutientOff();
		return false;
	});


	// Отключении версии для слабовидяших
	function CecutientOff() {
		$.cookie("CecutientCookie", null, { expires: 365, path: '/' });
		$.cookie("font-size",  		 null, { expires: 365, path: '/' });
		$.cookie("theme", 			 null, { expires: 365, path: '/' });
		$.cookie("letter-spacing",  null, { expires: 365, path: '/' });
		$.cookie("state-images",  	 null, { expires: 365, path: '/' });


		$("html").removeAttr("data-spec-vers", "data-font-size", "data-theme","data-img");
		$("#img-disable").attr('checked', 'checked');
		$("#js-button-spec-version .fa").removeClass('fa-eye-slash').addClass('fa-eye');
	
		window.location.reload();
	}
	
	// Проверяем акивацию версии для слабовидящих (т.е. если пользователь ранее включал ее) и добавляем необходимые прессеты
	if ($.cookie("CecutientCookie")=="on") {

		CecutientOn();
		
		if ($.cookie("font-size")=="normal")  { normalFontSize(); };
		if ($.cookie("font-size")=="medium")  { mediumFontSize(); };
		if ($.cookie("font-size")=="large")   { largeFontSize(); };

		if ($.cookie("theme")=="white") { whiteTheme(); };
		if ($.cookie("theme")=="black") { blackTheme(); };
		if ($.cookie("theme")=="blue")  { blueTheme(); };

		if ($.cookie("letter-spacing")=="default") { defaultLetterSpacing(); };
		if ($.cookie("letter-spacing")=="medium")  { mediumLetterSpacing(); };
		if ($.cookie("letter-spacing")=="large")   { largeLetterSpacing(); };

		if ($.cookie("state-images")=="on")  { imageOn(); };
		if ($.cookie("state-images")=="off") { imageOff(); };

		$("#js-button-spec-version").addClass("active");
		$("#js-button-spec-version .fa").removeClass('fa-eye').addClass('fa-eye-slash');
		$('#js-spec-version').addClass('special-version--active');

	}


	// Активации версии для слабовидящих
	function CecutientOn() {

		$("#js-spec-version").removeClass("hidden");
		$("html").attr('data-spec-vers', 'enable');
		$.cookie("CecutientCookie", "on", {
			expires: 365,
			path: '/'
		});

	}

	// Кнопка показа панели настроек версии для слабовидящих
	$('#js-button-toggle').click(function(e) {
		e.preventDefault();

		if ( $('#js-spec-version').hasClass("special-version--active") ) {
			$('#js-spec-version').removeClass('special-version--active');
		} 
		else {
			$('#js-spec-version').addClass('special-version--active');
		}

		return false;
	});


	/* Обработчики клика */
	$("#fz-normal").click(function()   { normalFontSize(); });
	$("#fz-medium").click(function()   { mediumFontSize(); });
	$("#fz-large").click(function()    { largeFontSize(); });

	$("#theme-white").click(function() { whiteTheme(); });
	$("#theme-black").click(function() { blackTheme(); });
	$("#theme-blue").click(function()  { blueTheme(); });

	$("#letter-spacing-default").click(function() { defaultLetterSpacing(); });
	$("#letter-spacing-medium").click(function()  { mediumLetterSpacing(); });
	$("#letter-spacing-large").click(function()   { largeLetterSpacing(); });
	
	$("#img-disable").click(function (){
		if ( $("#img-disable").prop("checked") ) {
			imageOn();
		} 
		else {
			imageOff();
		}
	});

	// Переинициализация плагинов
	$(".special-version__button").click(function() { 
		// equalHeightElements();
		// stickyBlocks();
	});
	/* Конец обработчики клика */


	/* Картинки */
	function imageOn() {

		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-img', 'enable');
			$("#img-disable").attr('checked', 'checked');
			$.cookie("state-images", "on", {
				expires: 365,
				path: '/'
			});
		}
	}

	function imageOff() {

		if ($.cookie("CecutientCookie")=="on") {
			
			$("html").attr('data-img', 'disable');
			$("#img-disable").removeAttr("checked");
			$.cookie("state-images", "off", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец картинки */


	/* Размер шрифта */
	function normalFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'default');

			$.cookie("font-size", "normal", {
				expires: 365,
				path: '/'
			});

		}
	}

	function mediumFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'medium');

			$.cookie("font-size", "medium", {
				expires: 365,
				path: '/'
			});

		}
	}

	function largeFontSize() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-font-size', 'large');

			$.cookie("font-size", "large", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец размер шрифта */


	/* Цветовые схемы */
	function whiteTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'white');

			$.cookie("theme", "white", {
				expires: 365,
				path: '/'
			});

		}
	}

	function blackTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'black');

			$.cookie("theme", "black", {
				expires: 365,
				path: '/'
			});

		};	
	}

	function blueTheme() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-theme', 'blue');

			$.cookie("theme", "blue", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец цветовые схемы */


	/* Межстрочный интервал */
	function defaultLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'standart');


			$.cookie("letter-spacing", "standart", {
				expires: 365,
				path: '/'
			});

		}
	}

	function mediumLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'medium');

			$.cookie("letter-spacing", "medium", {
				expires: 365,
				path: '/'
			});

		};	
	}

	function largeLetterSpacing() {
		if ($.cookie("CecutientCookie")=="on") {

			$("html").attr('data-letter-spacing', 'large');

			$.cookie("letter-spacing", "large", {
				expires: 365,
				path: '/'
			});

		}
	}
	/* Конец межстрочного интервала */


	/* Отключаем версию для слабовидящих для мобильных устройств, ширина <= 992px */
	$(window).resize(function() {
		var windowWidthCecutient = $(window).width();
		if ( (windowWidthCecutient <= 992) && ($.cookie("CecutientCookie")=="on") ) {
			CecutientOff();
		}
	});


	// Функции при скролее окна
	$(window).scroll(function() {
		if ( $('#js-spec-version').hasClass("special-version--active") ) {
			$('#js-spec-version').removeClass('special-version--active');
		}
		
	});

});
