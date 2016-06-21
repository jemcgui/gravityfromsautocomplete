jQuery(document).ready(function($) {

	$('#field_css_class').on('click', function() {
		if( $(this).siblings('#gf_atuocomplete_container').length > 0 ) {
			return;
		}
		var fieldType = $(this).parents('#field_settings').siblings('.gfield_admin_icons').children('.gfield_admin_header_title').html();
		console.log(fieldType);
		if ( fieldType.search("Checkboxes") == 0 || fieldType.search("Radio Buttons") == 0 ) {
			//css class options for list items
			$(this).after('<div id="gf_atuocomplete_container"><ul><li>gf_list_2col</li><li>gf_list_3col</li><li>gf_list_4col</li><li>gf_list_5col</li><li>gf_list_inline</li><li>gf_list_height_25</li><li>gf_list_height_50</li><li>gf_list_height_75</li><li>gf_list_height_100</li><li>gf_list_height_125</li><li>gf_list_height_150</li><ul></div>');
		} else if( fieldType.search("Section") == 0 )  {
			//css class options for section breaks
			$(this).after('<div id="gf_atuocomplete_container"><ul><li>gf_scroll_text</li><ul></div>');
		} else if ( fieldType.search("Time") == 0 ) {
			//css class options for time fields
			$(this).after('<div id="gf_atuocomplete_container"><ul><li>gf_left_half</li><li>gf_right_half</li><li>gf_left_third</li><li>gf_middle_third</li><li>gf_right_third</li><li>gf_hide_ampm</li><ul></div>');
		} else if ( fieldType.search("Paragraph Text") == 0 ) {
			//css class options for paragraph fields
			$(this).after('<div id="gf_atuocomplete_container"><ul><li>gf_left_half</li><li>gf_right_half</li><li>gf_left_third</li><li>gf_middle_third</li><li>gf_right_third</li><li>gf_hide_charleft</li><ul></div>');
		} else {
			//css class options for text inputs		
			$(this).after('<div id="gf_atuocomplete_container"><ul><li>gf_left_half</li><li>gf_right_half</li><li>gf_left_third</li><li>gf_middle_third</li><li>gf_right_third</li><ul></div>');
		}
	});

	$( '.css_class_setting' ).on('click', '#gf_atuocomplete_container ul li', function() {
		var selectedValue = $(this).html();
		var currentCSS =  $(this).parent().parent().siblings('input').val();
		console.log(currentCSS);
		if ( currentCSS == '' ) {
			var newCSS = currentCSS + '' + selectedValue;
		} else {
			var newCSS = currentCSS + ' ' + selectedValue;
		}
		//This is a function in gravityforms that actually sets the field to the value on change
		SetFieldProperty('cssClass', newCSS);
		var inputField = $(this).parent().parent().siblings('input');
		$(inputField).focus();
		$(inputField).val(newCSS);

		$(this).parent().parent().remove();
	});

	//listen for keyups
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { // escape key maps to keycode `27'
			//if user hits the escape key and our css list is showing let's hide it.
			if ( $('#gf_atuocomplete_container').length > 0 ) {
				$('#gf_atuocomplete_container').remove();
			}
		}
	});

	$(document).click(function(e) {
		//if the use clicks outside our css list let's hide it.
		if ( $('#gf_atuocomplete_container').length > 0 ) {
			$('#gf_atuocomplete_container').remove();
		}
	});
});