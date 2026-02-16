;(function($, undefined) {
	
	/***/
	var objs = {
		'.block-9' : 'fadeInDown',
		'.block-7' : 'fadeInUp',
		'.blocklist-54 .header' : 'fadeInLeft',
		'.blocklist-54 .item-outer' : 'fadeInRight',
		'.widget-38' : 'fadeInUp',
		'.widget-14' : 'fadeInUp',
		'.widget-18' : 'fadeInUp',
		'.widget-19' : 'fadeInLeft',
		'.widget-39' : 'fadeInRight'
	};
	/***/
	
	
	$(function() {
		for (var i in objs) {
			$(i).attr('data-s3-animator', objs[i]);
		}
	})
	var url = '/g/s3/misc/animator/1.0.0/css/s3.animator.scss.css';
	$.get(url, function(){
                    $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                    if (!window.s3Animator) {
					$.getScript('/g/s3/misc/animator/1.1.0/js/s3.animator.js').done(function() {
						window.s3Animator.once = true;
					});
	}
    });
})(jQuery)