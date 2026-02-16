;(function($) {
	
	var $win = $(window),
		$doc = $(document),
		$html = $(document.documentElement),
		$htmlLang = $('html').attr('lang'),
		iOs = /iPhone|iPad|iPod/i.test(navigator.userAgent),
		clickEvent = iOs ? 'touchend' : 'click',
		lp_template = {};
		
	window.lp_template = lp_template;

	lp_template.matchHeightArrayElements = [
		'.pr_block1_wrapper .pr_block1_item .pic', '.pr_block1_wrapper .pr_block1_item .title', '.pr_block1_wrapper .pr_block1_item .text', '.pr_block1_wrapper .pr_block1_item .pr_title', '.pr_block1_wrapper .pr_block1_item .pr_price', '.products-with-pic--theme9 .product .pic', '.products-with-pic--theme9 .product .title', '.products-with-pic--theme9 .product .text', '.products-with-pic--theme9 .product .price', '.products--theme9 .product .top-part .name', '.products--theme9 .product .top-part .price', '.products--theme9 .product .bottom-part ul', '.tariff-blocks_block-height', '.multy_blocks_block-height', '.reviews--theme9 .review .text', '.reviews--theme9 .review-inner .top-part', '.tm_block2_wrapper .tm_block2_item .pic', '.tm_block2_wrapper .tm_block2_item .tm_title', '.tm_block2_wrapper .tm_block2_item .tm_desc', '.tm_block1_wrapper .tm_block1_item .tm_title', '.tm_block1_wrapper .tm_block1_item .tm_desc', '.tm_block1_wrapper .tm_block1_item .tm_text', '.txt_bl3_wrapper_txt_item_text'
	];
	
	lp_template.datepicker_range = function() {
		this.datepicker({
			minDate: new Date(),
			range: true,
			multipleDatesSeparator: ' - '
		});
	}
	
	lp_template.dropdownMenu = function() {
		
		if (this.length) {
			this.s3MenuAllIn({
				type: 'bottom',
				showTime: 250,
				hideTime: 250,
				activateTimeout: 250
			});  
		}
	}
	
	lp_template.datepicker = function() {
		this.datepicker({
			minDate: new Date(),
			autoClose: true
		});
	}
	
	lp_template.youTubeBackground = function () {
		if (this.length) {
			this.tubular();
		}
	}
	
	lp_template.wordsTimer = {
		days: ($htmlLang == 'en') ? 'days' : ($htmlLang == 'de') ? 'Tage' : 'Дни',
		hours: ($htmlLang == 'en') ? 'hours' : ($htmlLang == 'de') ? 'stunden' : 'часы',
		minutes: ($htmlLang == 'en') ? 'minutes' : ($htmlLang == 'de') ? 'minuten' : 'минуты',
		seconds: ($htmlLang == 'en') ? 'seconds' : ($htmlLang == 'de') ? 'sekunden' : 'секунды'
	};
	
	lp_template.firstTimer = function() {
		var tm = lp_template.wordsTimer;
		
		this.timer({
			format_in: "%d.%M.%y %h:%m",
			format_out: '<span>%d<em>' + tm.days + '</em></span><span>%h<em>' + tm.hours + '</em></span><span>%m<em>' + tm.minutes + '</em></span><span>%s<em>' + tm.seconds + '</em></span>',
			language: 'no',
			wrapChar: 'ins',
			update_time: 1000,
			onEnd: function() {
				this.hide();
				this.siblings('.cntdwn-title').hide();
				this.siblings('.countdown-end').show();
			}
		});
	};
	
	lp_template.secondTimer = function() {
		var tm = lp_template.wordsTimer;
		
		this.timer({
			format_in: "%d.%M.%y %h:%m",
			wrapChar: 'ins',
			format_out: '<span>%d<br />' + tm.days + '</span><span>%h<br />' + tm.hours + '</span><span>%m<br />' + tm.minutes + '</span><span>%s<br />' + tm.seconds + '</span>',
			update_time: 1000,
			onEnd: function() {
				this.hide();
				this.siblings('.timer_title').hide();
			}
		});
	};

	lp_template.matchHeight = function (inFuncInit) {
		var self = this;
		for (var i = 0; i < self.length; i++) {
			if (inFuncInit) {
				inFuncInit.find(self[i]).matchHeight();
			} else {
				$(self[i]).matchHeight();
			}
		}
	};	
	
	lp_template.buttonTop = function(){
		var self = this;
		
		self.on('click', function(e) {
			e.preventDefault();
			
			$('html, body').animate({
				scrollTop: 0
			});
		});
		
		function buttonToggleShow () {
			var documentScrollTop = $(document).scrollTop(),
				meta;
			if (documentScrollTop > 200 && meta != 'show') {
				self.addClass('show');
				meta = 'show';
			} else if (documentScrollTop < 201 && meta != 'hide') {
				self.removeClass('show');
				meta = 'hide';
			}
		}
		
		$(window).on('scroll', buttonToggleShow);

	};
	
	lp_template.lightGallery = function(selector, loop){
		if (!this.hasClass('no-init-lightgallery')) {
			this.lightGallery({
				thumbnail: false,
				download: false,
				loop: loop || false,
				selector: selector || ''
			});
		}
	};
	
	lp_template.oneLineMenu = function() {
		this.oneLineMenu();
	}
	
	lp_template.menuLP = function(height, elementClass, parent){
		this.menuLP({
			menuHeight: height || 50,
			fixedClass: elementClass || 'fixed-menu',
			fixedMenuElement: parent || null
		});
	}

	lp_template.phone_mask = function() {
		this.mask("+7 (999) 999-99-99");
	};
	
	lp_template.photoSliderWithPreview = function(){
		
		this.each(function() {

			var $this = $(this),
				$pictureSlider = $this.find('.gallery-with-preview_Slider'),
				pictureSliderAutoplay = $pictureSlider.data('autoplay'),
				$pagers = $this.find('.gallery-with-preview_Pager'),
				$pagersChild = $pagers.find('.gallery-with-preview_pagerElement'),
				sliderOptions = {
					items: 3,
					loop: true,
					nav: true,
					dots: false,
					navSpeed: 500,
					responsive: {
						601 : {
							items: 4,
							loop: true,
							nav: true,
							dots: false,
							navSpeed: 500
						},
						951: {
							items: 1,
							loop: true,
							nav: true,
							dots: false,
							navSpeed: 500
						}
					}
				},
				modeResize;
				
			var picSlider = $pictureSlider.bxSlider({
				controls: false,
				touchEnabled: false,
				pager: false,
				auto: pictureSliderAutoplay ? true : false,
				mode: 'fade'
			});
				
			function resizePhotoGallery(){
				
				if ($win.width() < 951 && modeResize != 'phone') {
					
					if ($pagersChild.length > 3) {
						$pagers.trigger('destroy.owl.carousel');
						$pagersChild.unwrap();
						$pagers.owlCarousel(sliderOptions);
					}
					modeResize = 'phone'
					
				} else if ($win.width() >= 951 && modeResize != 'pc') {
					
					if ($pagersChild.length > 8) {
						$pagers.trigger('destroy.owl.carousel');
						
						var pagersChildDOM = $pagersChild.get();
						if (modeResize == 'phone') {
							for(var i = 0; i < $pagersChild.length; i += 8){
							    $(pagersChildDOM.slice(i, i+8)).wrapAll('<div></div>');
							}
						}
						
						$pagers.owlCarousel(sliderOptions);
					}
					
					modeResize = 'pc'
				}
			}

			$this.on("click", '.gallery-with-preview_pagerElement', function(event) {
				event.preventDefault();
				
				var $this = $(this),
					thisDataIndex = $this.data('slide-index');

				$pagersChild.removeClass('shadow');
				$this.addClass('shadow');
				picSlider.goToSlide(thisDataIndex);
			});
			
			$win.on('resize', resizePhotoGallery);
			
		});
	};
	
	lp_template.productSlider = function() {
		
		var slickSlider = this.find('.one-good-form_productSlider'),
			slickNav = this.find('.one-good-form_pager-wrap');
			
		if (slickSlider.length) {
			slickSlider.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: slickNav
			});
		}

		if (slickNav.length) {
			slickNav.slick({
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: slickSlider,
				dots: false,
				autoplay: false,
				autoplaySpeed: 1500,
				centerMode: false,
				vertical: true,
				focusOnSelect: true,
				responsive: [{
						breakpoint: 940,
						settings: {
							slidesToShow: 4,
							vertical: true,
							centerMode: false
						}
					},

					{
						breakpoint: 750,
						settings: {
							vertical: false,
							slidesToShow: 4,
							centerMode: false

						}
					}, {
						breakpoint: 721,
						settings: {
							slidesToShow: 3,
							vertical: false,
							centerMode: false,
							infinite: true
						}
					}, {
						breakpoint: 450,
						settings: {
							slidesToShow: 4,
							vertical: false,
							centerMode: false,
							infinite: true,
						}
					}, {
						breakpoint: 400,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
							vertical: false,
							infinite: true,

						}
					}

				]
			});
		}
	};
	
	lp_template.lightGalleryVideo = function() {
		this.lightGallery({
			thumbnail: false,
			download: false,
			loop: false,
			zoom: false,
			actualSize: false,
			selector: '.button',
			youtubePlayerParams: {
				autoplay: 0,
				modestbranding: 1,
				showinfo: 0,
				rel: 0
			},
			vimeoPlayerParams: {
				byline: 0,
				portrait: 0,
				color: 'A90707'
			}
		});
	};
	
	lp_template.reviewsSlider = function() {
		this.each(function() {
			var $this = $(this),
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			$this.owlCarousel({
				items: 1,
				loop: true,
				nav: true,
				smartSpeed: thisSpeed || 600,
				autoplay: thisAutoplay || false,
				autoplayTimeout: thisPause || 5000,
				dots: false
			});
		});
	}
	
	lp_template.teamSlider1 = function() {
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('.tm_block1_item').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					dots: true,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 5000,
					autoHeight: false,
					responsive: {
						0: {
							margin: 0,
							items: 1
						},
						520: {
							margin: 15,
							items: 2
						},
						768: {
							margin: 15,
							items: 3
						},
						980: {
							margin: 15,
							items: 2
						}
					}
				});
			}
		});
	}
	
	lp_template.productsSlider2 = function(){
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('.pr_block1_item').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('slider-speed');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					dots: true,
					center: true,
					items: 3,
					autoWidth: true,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 4000,
					responsive: {
						0: {
							margin: 7
						},
						380: {
							margin: 15
						},
						640: {
							margin: 24
						}
					}
				});
			}
		});
	}
	
	lp_template.productsSlider3 = function(){
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('.pr_block2_item').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					nav: true,
					dots: true,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 5000,
					responsive: {
						0: {
							margin: 13,
							autoWidth: true,
							center: true,
							loop: false
						},
						380: {
							margin: 20,
							autoWidth: true,
							center: true,
						},
						831: {
							margin: 25,
						},
						900: {
							loop: true,
							items: 1,
							autoWidth: false,
							margin: 25,
							center: false
						}
					}
				});
			}
		});
	}
	
	lp_template.reviewsSlider2 = function(){
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('> div').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					items: 1,
					loop: true,
					nav: true,
					dots: false,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 5000,
					navSpeed: 500
				});
			}
		});
	}
	
	lp_template.gallerySlider = function() {
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('> div').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 5000,
					responsive: {
						0: {
							items: 1,
							margin: 0
						},
						400: {
							items: 2,
							margin: 20,
							mouseDrag: thisSlidesLength <= 2 ? false : true,
							nav: thisSlidesLength > 2 ? true : false
						},
						641: {
							items: 3,
							margin: 30,
							mouseDrag: thisSlidesLength <= 3 ? false : true,
							nav: thisSlidesLength > 3 ? true : false
						},
						769: {
							items: 4,
							margin: 40,
							mouseDrag: thisSlidesLength <= 4 ? false : true,
							nav: thisSlidesLength > 4 ? true : false
						}
					}
				});
			}
		});
	}
	
	lp_template.sertificatSlider = function() {
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('> div').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					smartSpeed: thisSpeed ? thisSpeed : 600,
					autoplay: thisAutoplay ? true : false,
					autoplayTimeout: thisPause ? thisPause : 5000,
					responsive: {
						0: {
							items: 1,
							margin: 0
						},
						359: {
							items: 2,
							margin: 10
						},
						400: {
							items: 3,
							margin: 15
						},
						479: {
							items: 4,
							margin: 20
						},
						641: {
							items: 5,
							margin: 30
						},
						769: {
							items: 6,
							margin: 40
						}
					}
				});
			}
		});
	}
	
	lp_template.partnersSlider = function() {
		this.each(function() {
			var $this = $(this),
				thisSlidesLength = $this.find('> div').length,
				thisAutoplay = $this.data('autoplay'),
				thisSpeed = $this.data('speed'),
				thisPause = $this.data('pause');

			if (thisSlidesLength > 1) {
				$this.owlCarousel({
					loop: true,
					nav: true,
					dots: false,
					smartSpeed: thisSpeed || 600,
					autoplay: thisAutoplay || false,
					autoplayTimeout: thisPause || 5000,
					responsive: {
						0: {
							items: 2,
							margin: 25
						},
						400: {
							items: 3,
							margin: 25
						},
						479: {
							items: 4,
							margin: 25
						},
						641: {
							items: 5,
							margin: 30
						},
						769: {
							items: 6,
							margin: 35
						}
					}
				});
			}
		});
	}
	
	lp_template.FAQblock = function() {
		var activeClass = 'active',
			shadowClass = 'shadow';

		this.on(clickEvent, 'div[class^="button"]', function() {
			var $this = $(this);
			
			$this.removeClass(activeClass).siblings('div[class^="button"]').addClass(activeClass);
			$this.parent().prev('.faq-item_text').slideToggle(200);
			$this.closest('.faq-item').toggleClass(shadowClass);
		});
	}
	
	lp_template.accordeon = function() {
		this.on('click', '.item .title', function() {
			$(this).toggleClass('opened').next().slideToggle();
		})
	}
	
	lp_template.multyOfficesMap = function() {
		var officesMapButton = this.find(".multy_offices_map_button"),
			officesMapClose = this.find(".multy_offices_map_close");
			
		officesMapButton.on(clickEvent, function() {
			$(this).closest('.single-office_wrap').find(".multy_offices_map-wrap").addClass("expand");
		});

		officesMapClose.on(clickEvent, function() {
			$(".multy_offices_map-wrap").removeClass("expand");
		});
	}
	
	lp_template.tabsWithSlider = function() {
		
		// ToDo: Чуток потом переписать табы. То, что сейчас не канает!
		
		this.each(function(){
			var $tabsWrap = $(this),
				$tabsItems = $tabsWrap.find('li'),
				$tabsBoxes = $tabsWrap.closest('.tabs_block').find('.box'),
				tabsCountTotal = $tabsItems.length,
				tabsWrapWidth = $tabsWrap.width(),
				tabsWidth = 0,
				tabAverage, tabsCountInWrap;
				
			$tabsItems.each(function() {
				tabsWidth += $(this).outerWidth();
			});
			
			tabAverage = tabsWidth / tabsCountTotal;
			tabsCountInWrap = Math.floor(tabsWrapWidth / tabAverage);
			
			if (tabsWrapWidth <= tabsWidth) {
				$tabsWrap.slick({
					infinite: false,
					variableWidth: true,
					slidesToShow: tabsCountInWrap
				});
			}
			
			$tabsWrap.on('click', 'li', function() {
				var $this = $(this);
				if ($this.hasClass('active')) return;
				
				$tabsItems.removeClass('active opened');
				$this.addClass('active opened');
				$tabsBoxes.removeClass('open_tab').hide().eq($this.index()).show();
			});
			
		});
	}
	
	lp_template.arrowDown = function() {
		this.on('click', '.arrow-down', function(){
			var $this = $(this),
				blockPosition = $this.closest('.sale-block-two, .sale-block-three').offset().top,
				blockHeight = $this.closest('.sale-block-wrapper').height(),
				newScroll = blockPosition + blockHeight;

			$('html, body').animate({
				scrollTop: newScroll
			}, 850);
			
		});
	}
	
	lp_template.popupForm = function() {
		this.on(clickEvent, '[data-api-type=popup-form]', function(e) {
			var $this = $(this);

			if (myo.show) {
				myo.show({
					json: $this.data('api-url'),
					onContentLoad: function(w) {
						s3LP.initForms($(this.bodyDiv));
					},
					afterOpen: function() {
						$('html').addClass('overflowHidden');
						if (iOs) {
							$('body').addClass('overflowHidden')
						}
					},
					afterClose: function() {
						$('html, body').removeClass('overflowHidden');
					}
				});
			} else if (myo.open) {
				myo.open({
					json: $this.data('api-url'),
					onLoad: function(w) {
						s3LP.initForms($(this.bodyDiv));
					},
					afterOpen: function() {
						$('html').addClass('overflowHidden');
						if (iOs) {
							$('body').addClass('overflowHidden')
						}
					},
					afterClose: function() {
						$('html, body').removeClass('overflowHidden');
					}
				});
			}
			
			e.preventDefault();
		});
	}

	lp_init = function(block_wrapper) {

		if (/MSIE 10|rv:11.0/i.test(navigator.userAgent)) {
			document.documentElement.className = "ie";
		}

		var $body = $(document.body);

		block_wrapper.find('table').wrap('<div class="table-wrapper"></div>');

		if (block_wrapper.find('.reviews-slider').length && typeof lp_template.reviewsSlider == 'function') {
			lp_template.reviewsSlider.call(block_wrapper.find('.reviews-slider'));
		};

		if (block_wrapper.find('.tm_block1_slider').length && typeof lp_template.teamSlider1 == 'function') {
			lp_template.teamSlider1.call(block_wrapper.find('.tm_block1_slider'));
		};

		if (block_wrapper.find('.pr_block1').length && typeof lp_template.productsSlider2 == 'function') {
			lp_template.productsSlider2.call(block_wrapper.find('.pr_block1'));
		};
		
		if (typeof lp_template.youTubeBackground == 'function') {
			lp_template.youTubeBackground.call(block_wrapper.find('[id^=video-player-block]'));
		}

		if (block_wrapper.find('.pr_block2.pr2-init').length && typeof lp_template.productsSlider3 == 'function') {
			lp_template.productsSlider3.call(block_wrapper.find('.pr_block2.pr2-init'));
		};

		if (block_wrapper.find('.reviews-and-feedback_inner').length && typeof lp_template.reviewsSlider2 == 'function') {
			lp_template.reviewsSlider2.call(block_wrapper.find('.reviews-and-feedback_inner'));
		};

		if (block_wrapper.find('.gallery-slider').length && typeof lp_template.gallerySlider == 'function') {
			lp_template.gallerySlider.call(block_wrapper.find('.gallery-slider'));
		};

		if (block_wrapper.find('.sertificats-slider').length && typeof lp_template.sertificatSlider == 'function') {
			lp_template.sertificatSlider.call(block_wrapper.find('.sertificats-slider'));
		};

		if (block_wrapper.find('.partners-slider').length && typeof lp_template.partnersSlider == 'function') {
			lp_template.partnersSlider.call(block_wrapper.find('.partners-slider'));
		};
		
		if (block_wrapper.find(".popup_video_block_wrap").length && typeof lp_template.lightGalleryVideo == 'function') {
			lp_template.lightGalleryVideo.call(block_wrapper.find(".popup_video_block_wrap"));
		};
		
		if (block_wrapper.find('.link-top').length && typeof lp_template.buttonTop == 'function') {
			lp_template.buttonTop.call(block_wrapper.find('.link-top'));
		};

		if (block_wrapper.find('.countdown, .countdown2').length && typeof lp_template.firstTimer == 'function') {
			lp_template.firstTimer.call(block_wrapper.find('.countdown, .countdown2'));
		};

		if (block_wrapper.find('.top_bl1_timer').length && typeof lp_template.secondTimer == 'function') {
			lp_template.secondTimer.call(block_wrapper.find('.top_bl1_timer'));
		};
		
		if (block_wrapper.find('.faq_ver2_wrapper').length && typeof lp_template.FAQblock == 'function') {
			lp_template.FAQblock.call(block_wrapper.find('.faq_ver2_wrapper'));
		};

		if (block_wrapper.find('.gallery-with-preview').length && typeof(lp_template.photoSliderWithPreview) == 'function') {
			lp_template.photoSliderWithPreview.call(block_wrapper.find('.gallery-with-preview'));
		};
		
		if (block_wrapper.find('.single-office_wrap') && typeof lp_template.multyOfficesMap == 'function') {
			 lp_template.multyOfficesMap.call(block_wrapper.find('.single-office_wrap'));
		};
		
		if (block_wrapper.find('.tabs-block_wrap_tabs').length && typeof lp_template.tabsWithSlider == 'function') {
			lp_template.tabsWithSlider.call(block_wrapper.find('.tabs-block_wrap_tabs'));
		}
		
		if (typeof lp_template.popupForm == 'function') {
			lp_template.popupForm.call(block_wrapper);
		}
		
		if (typeof lp_template.arrowDown == 'function') {
			lp_template.arrowDown.call(block_wrapper.find('.sale-block-two, .sale-block-three'));
		}
		
		block_wrapper.find('.one-good-form_inner, .one-good-form2_inner').on('click', '.button', function() {
			$(this).closest('.one-good-form_inner, .one-good-form2_inner').find('.tpl-anketa-popup').addClass('expand');
		});
		
		block_wrapper.find(".one-good-form_inner, .one-good-form2_inner").on(clickEvent, '.tpl-anketa_close', function() {
			$(this).closest(".one-good-form_inner, .one-good-form2_inner").find(".tpl-anketa-popup").removeClass("expand");
		});

		$(document).on(clickEvent, function(formClose) {
			if ($(formClose.target).closest('.tpl-anketa_wrap').length || $(formClose.target).closest('.button').length) return;
			$('.tpl-anketa-popup').removeClass('expand');
		});
		
		lp_template.dropdownMenu.call(block_wrapper.find('.js-dropdown-menu'));

		$(this).keydown(function(eventObject) {
			if (eventObject.which == 27)
				$(".tpl-anketa-popup").removeClass("expand");
		});

		block_wrapper.find('.show-map').on('touchend', function(event) {
			event.preventDefault();
			$(this).next('.map-inner').addClass('fixed');
			$('html').addClass('overflowHidden');
			$(window).trigger('resize');
		});

		block_wrapper.find('.all-map a').on('touchend', function(event) {
			event.preventDefault();
			$(this).closest('.map-with-contacts-wrapper').find('.map-fixed').addClass('fixed');
			$('html').addClass('overflowHidden');
			$(window).trigger('resize');
		});

		block_wrapper.find('.close-map').on('touchend', function(event) {
			block_wrapper.find('.map-inner').removeClass('fixed');
			$('html').removeClass('overflowHidden');
		});

		block_wrapper.find('.close-map2').on('touchend', function(event) {
			block_wrapper.find('.map-fixed').removeClass('fixed');
			$('html').removeClass('overflowHidden');
		});
		
		if (block_wrapper.find('.accordion').length && typeof lp_template.accordeon == 'function') {
			lp_template.accordeon.call(block_wrapper.find('.accordion'));
		}
		
		var topMenu = block_wrapper.find('.top-menu');

		if (topMenu.length) {
			
			if (typeof lp_template.oneLineMenu == 'function') {
				lp_template.oneLineMenu.call(topMenu);
			}
			
			if (typeof lp_template.menuLP == 'function') {
				lp_template.menuLP.call(topMenu, 50, 'fixed', '.menu-wrapper');
			}
			
			topMenu.on('click', 'a', function() {
				$(this).closest('[data-block-layout]').find('.menu-fixed').removeClass('opened');
				$('html').removeClass('overflowHidden');
				block_wrapper.find('.menu-button').removeClass('active');
			});

			block_wrapper.find('.menu-button').on('click', function() {
				$(this).toggleClass('active');
				block_wrapper.find('.menu-fixed').toggleClass('opened').addClass('animit');
				$html.toggleClass('overflowHidden');
			});

			$doc.on(clickEvent, function(event) {
				if ($(event.target).closest('.menu-fixed, .menu-button, .popover-wrap').length) return;
				block_wrapper.find('.menu-button').removeClass('active');
				block_wrapper.find('.menu-fixed').removeClass('opened');
				$html.removeClass('overflowHidden');
			});
		}
		
		if (typeof lp_template.productSlider == 'function' && block_wrapper.find('.one-good-form_wrapper').length) {
			lp_template.productSlider.call(block_wrapper.find('.one-good-form_wrapper'));
		}

		block_wrapper.find('.one-good-wrapper .good-desc-block .buy-good').goodNameForForm({
			parent: '.good-desc-block',
			title: '.good-title'
		});

		block_wrapper.find('.one-good-icon__list .one-good-icon__buy').goodNameForForm({
			parent: '.one_good_wrap',
			title: '.one-good-icon__title'
		});

		block_wrapper.find('.one-good-horizontal__wrapper .buy-good').goodNameForForm({
			parent: '.one-good-horizontal__wrapper',
			title: '.good-title'
		});

		block_wrapper.find('.products--theme9 .button a').goodNameForForm({
			parent: '.product-inner',
			title: '.name'
		});

		block_wrapper.find('.products-with-pic--theme9 .button a').goodNameForForm({
			parent: '.bottom-part',
			title: '.title'
		});

		block_wrapper.find('.pr_block2_wrapper .but_wr .pr_button').goodNameForForm({
			parent: '.text_wrap',
			title: '.title'
		});

		block_wrapper.find('.only-one-product .button a').goodNameForForm({
			parent: '.text-part',
			title: '.title'
		});

		block_wrapper.find('.pr_block1_wrapper .pr_button').goodNameForForm({
			parent: '.text_wrap',
			title: '.title'
		});

		block_wrapper.find('.tariff-blocks_wrapper .block .button').goodNameForForm({
			parent: '.block',
			title: '.tariff-name'
		});

		block_wrapper.find('.mirrored-products_wrapper .text-part .button').goodNameForForm({
			parent: '.text-part',
			title: '.subtitle'
		});

		block_wrapper.find('.horizontal_blocks .service-desc-block .order').goodNameForForm({
			parent: '.service-desc-block',
			title: '.service-title'
		});

		block_wrapper.find('.multy_blocks .service-desc-block .buy-button').goodNameForForm({
			parent: '.service-desc-block',
			title: '.service-title'
		});

		$doc.on(clickEvent, function(e) {
			if ($(e.target).closest('.one-screen .contacts-part').length) return;
			block_wrapper.find('.one-screen .contacts-part input[type="radio"]').removeAttr('checked');
		});

		if (typeof(lp_template.lightGallery) == 'function') {
			lp_template.lightGallery.call(block_wrapper.find('.gallery-slider'), 'div > a');
			lp_template.lightGallery.call(block_wrapper.find('.sertificats-slider'), 'div > a');
			lp_template.lightGallery.call(block_wrapper.find(".horizontal-gallery"), '.horizontal-gallery .picture');
			lp_template.lightGallery.call(block_wrapper.find(".single-office_inner"), '.single-office_picture');
			lp_template.lightGallery.call(block_wrapper.find('.good-img'), '.good-img a');
			lp_template.lightGallery.call(block_wrapper.find('.one-good-icon__img'), '.one-good-icon__img a');
			lp_template.lightGallery.call(block_wrapper.find('.pic-part'), '.pic-part a');
			lp_template.lightGallery.call(block_wrapper.find('.roundpic_inner'), '.roundpic-part a');
			lp_template.lightGallery.call(block_wrapper.find(".service-item"), '.service-img a');
			lp_template.lightGallery.call(block_wrapper.find(".gallery-with-preview_slider-wrap"), '.gallery-with-preview_img a');
			lp_template.lightGallery.call(block_wrapper.find(".square-photo-blocks_inner"), '.square-photo-blocks_picture');
			lp_template.lightGallery.call(block_wrapper.find(".tabs-block_wrap_box"), '.box-inner .img_wrap a');
			lp_template.lightGallery.call(block_wrapper.find('.gallery-inline'), '.item .pic a');
			lp_template.lightGallery.call(block_wrapper.find('.vertical-gallery'), '.vertical-gallery a');
		}

		if (typeof lp_template.matchHeight == 'function') {
			lp_template.matchHeight.call(lp_template.matchHeightArrayElements, block_wrapper);
		};
		
		(function() {
			var newWin = '';
			block_wrapper.find('.js-close-popup-map-key').on('click', function(e) {
				e.preventDefault();
				$(this).closest('.not-map-key').hide();
			});
			
			block_wrapper.find('.not-map-key div a').on('click', function(e) {
				e.preventDefault();
				newWin = window.open();
				newWin.location = this.href;
				newWin.focus();
			});
		})();
		
		$win.trigger('resize').trigger('scroll');
	}

	function coords(str) {
		return str.split(',');
	}
	
	function initYandexMap(options) {
		var map = new ymaps.Map(options.id, {
			center: options.center,
			zoom: options.zoom,
			behaviors: ['drag', 'rightMouseButtonMagnifier'],
		});

		map.controls.add(
			new ymaps.control.ZoomControl()
		);

		$('.show-map').on('click touchend', function(event) {
			map.container.fitToViewport();
		});
		
		$('.close-map').on('click touchend', function(event) {
			map.container.fitToViewport();
			return false;
		});

		$(window).resize(function() {
			map.container.fitToViewport();

			$('#' + options.id).parent().find('.close-map').on('click', function(event) {
				map.container.fitToViewport();
			});

			$('#' + options.id).parent().find('.close-map2').on('click', function(event) {
				map.container.fitToViewport();
			});
		});

		var MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
			'<div class="baloon-content" style="padding: 0 10px;">' +
			'<h3 style="margin: 0;">$[properties.name]</h3>' +
			'<p>$[properties.desc]</p>' +
			'</div>'
		);

		var myCollection = new ymaps.GeoObjectCollection();

		$.each(options.data, function(key, item) {
			myCollection.add(new ymaps.Placemark(
				item.coords,
				item, {
					balloonContentLayout: MyBalloonContentLayoutClass
				}
			));
		});

		map.geoObjects.add(myCollection);
	}

	function init(options) {
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		options.center = coords(options.center);

		$.each(options.data, function(key, item) {
			item.coords = coords(item.coords);
		});

		if (options.type == "google") {
			
			if (typeof google == 'undefined') {
				$.getScript('//maps.googleapis.com/maps/api/js?v=3&key=' + options.googleKey, function() {
					google.maps.event.addDomListener(window, 'load', function() {
						initGoogleMap(options);
					});
				});
			} else {
				initGoogleMap(options);
			}

		} else {
		
			if (typeof ymaps == 'undefined' && options.yandexKey) {
				$.getScript('//api-maps.yandex.ru/2.1/?apikey=' + options.yandexKey + '&lang=ru_RU', function() {
					ymaps.ready(function() {
						initYandexMap(options);
					});
				});
				console.log('with key');
			} else if (typeof ymaps == 'undefined') {
				$.getScript('//api-maps.yandex.ru/2.0-stable/?load=package.full&lang=ru', function() {
					ymaps.ready(function() {
						initYandexMap(options);
					});
				});
			} else {
				ymaps.ready(function() {
					initYandexMap(options);
				});
			}
			
		}
	}
	
	function initGoogleMap(options) {
		var map = new google.maps.Map(document.getElementById(options.id), {
			zoom: parseInt(options.zoom),
			scrollwheel: false,
			mapTypeId: options.mapTypeId ? options.mapTypeId : "roadmap",
			center: new google.maps.LatLng(options.center[0], options.center[1])
		});

		$.each(options.data, function(key, item) {

			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(item.coords[0], item.coords[1]),
				map: map,
				title: item.name
			});

			var infowindow = new google.maps.InfoWindow({
				content: '<div class="baloon-content">' +
					'<h3 style="margin: 0; padding-bottom: 3px;">' + item.name + '</h3>' +
					item.desc +
					'</div>'
			});

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});

		});
	}

	window.mjsMap = init;

})(jQuery);