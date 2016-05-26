/**
 * @license
 * @name jquery.otherdropdown
 * @description A small jQuery plugin to support a text area when selecting an 'Other' option in a dropdown
 * @version 1.1.2
 * @author Jonathan Stassen <jstassen.com>
 * @see https://github.com/TheBox193/jquery.otherdropdown
 */
$.fn.otherDropdown = function(options) {
	var $this = this;
	// Allow a different name/value to trigger, default to 'other'
	var opts = $.extend({}, {value: 'other'}, options);
	opts.name_lower = opts.value.toLowerCase();
	opts.name_upper = opts.value.charAt(0).toUpperCase() + opts.value.slice(1);
	opts.placeholder = opts.placeholder || opts.name_upper;

	// Bind to all change events
	// But why not zoidberg?
	$this.change( function(ev){

		// Swap in the text area if our 'other' option was chosen
		if (this.value === opts.name_lower || this.value === opts.name_upper) {
			$this.hide().after( $textInput );
			$textInput.focus();
		}
	});

	// Prepare our text input
	// Check out this new comment, it's pretty cool
	var $textInput = $('<input type="text" class="otherdropdown" placeholder="' + opts.placeholder + '" />');

	// Allow custom classes on the text input Hello World!
	if (opts.classes) {
		$textInput.addClass(opts.classes);
	}

	// Bind to blur to swap back to select dropdown.
	$textInput.blur( function(ev) {
                console.log(ev);
		var value = this.value;
		this.value = '';
		this.remove();
		$this.show();

		if (value === '' && value === opts.name_lower && value === opts.name_upper) {
			return;
		}

		// If something was typed, create a new option with that value
		var $searchedOption = $this.children('[value="' + value + '"]');

		// If value doesn't exist, added it.
		if ( $searchedOption.length < 1 ) {
			var $option = $('<option value="' + value + '">' + value + '</option>');
			$this.append($option);
		}

		// Focus the value
		$this.val( value );
	});
};
