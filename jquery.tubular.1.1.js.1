;(function ($, window) {

	// Внимание!!! Данный плагин был переделан под нужды LP. Адекватную работу на обычных сайтах не могу гарантировать. Если нужен оригинал, ищите его в интернете. Аджигельдиева Рушена.
	
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	$.fn.tubular = function (options) {
		
		var playersArray = [],
			$win = $(window),
			defaults = {
				ratio: 16/9,
				mute: true,
				repeat: true,
				wrapperZIndex: 99,
				start: 0
			};
			
			

		this.each(function(index) {
			
			var $this = $(this),
				itemObj = {};
			
			itemObj.id = $this.attr('id');
			itemObj.index = index + 1001;
			itemObj.playerId = 'player' + itemObj.index;
			itemObj.youTubeID = $this.data('yotube');
			itemObj.node = $this;
			
			var tubularContainer = '<div id="tubular-container' + itemObj.index +'" style="overflow: hidden; position: absolute; z-index: 1; width: 100%; height: 100%"><div id="tubular-player' + itemObj.index + '" style="position: absolute"></div></div><div id="tubular-shield' + itemObj.index +'" style="width: 100%; height: 100%; z-index: 2; position: absolute; left: 0; top: 0;"></div>';

			$this.prepend(tubularContainer);
			
			playersArray.push(itemObj);
		});
		
		window.onYouTubeIframeAPIReady = function() {
			playersArray.forEach( function(item) {
				window[item.playerId] = new YT.Player('tubular-player' + item.index, {
					width: defaults.width,
					height: Math.ceil(defaults.width / defaults.ratio),
					playerVars: {
						loop: 1
					},
					videoId: item.youTubeID,
					events: {
						'onReady': function(e) {
							resize();
							if (defaults.mute) e.target.mute();
							e.target.playVideo();
						},
						'onStateChange': function (state) {
							if (state.data === 0 && defaults.repeat) {
								window[item.playerId].seekTo(0);
							}
						}
					}
				});
			});
		}

		// resize handler updates width, height and offset of player after resize/init
		function resize () {
			var width = $win.width(),
				pWidth,
				height = $win.height(),
				pHeight;


			if (width / defaults.ratio < height) {
				pWidth = Math.ceil(height * defaults.ratio)
				playersArray.forEach(function(item) {
					$('#tubular-player' + item.index).width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0});
				});
			} else {
				pHeight = Math.ceil(width / defaults.ratio);
				playersArray.forEach(function(item) {
					$('#tubular-player' + item.index).width(width).height(pHeight).css({left: 0, top: 0});
				});
			}

		}
		
		$(window).on('resize.tubular', function() {
			resize();
		});
		
		
		
		return this;
	}

})(jQuery, window);