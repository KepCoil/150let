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
			title: '<img src="img/logo-1.svg" alt="S&amp;Milter">'
		},
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

});
