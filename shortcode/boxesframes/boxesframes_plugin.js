var boxesframes={
    title:"Boxframe Shortcode",
    id :'oscitas-form-boxesframes',
    pluginName: 'boxesframes',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(boxesframes);
})();

function create_oscitas_boxesframes(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="gallery-shadow">Shadow Type</label></th>\
				<td><select name="type" id="gallery-shadow">\
				    <option value="">None</option>\
					<option value="left-perspective">Left Perspective</option>\
					<option value="right-perspective">Right Perspective</option>\
					<option value="two-side-perspective">Two Side Perspective</option>\
					<option value="left-lifted-corner">Left Lifted Corner</option>\
					<option value="right-lifted-corner">Right Lifted Corner</option>\
					<option value="both-lifted-corner">Both Lifted Corner</option>\
					<option value="raised-box">Raised Box</option>\
					<option value="vertical-curves">Vertical Curves</option>\
					<option value="single-horizontal-curves">Single Horizontal Curves</option>\
					<option value="horizontal-curves">Horizontal Curves</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="gallery-bgcolor">Background Color</label></th>\
				<td><input type="text" name="bgcolor" class="gallerycolor" id="gallery-bgcolor" value="#ffffff" /><br />\
				</td>\
			</tr>\
        <tr>\
				<th><label for="gallery-fgcolor">Foreground Color</label></th>\
				<td><input type="text" name="fgcolor" class="gallerycolor" id="gallery-fgcolor" value="#000000" /><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-boxframe-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-boxframe-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="gallery-submit" class="button-primary" value="Insert Boxframe" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();

    jQuery('.gallerycolor').wpColorPicker();

    // handles the click event of the submit button
    form.find('#gallery-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = {
            'bgcolor'     : '',
            'fgcolor'     : '',
            'shadow'     : ''
        };
        var cusclass='',shadclass='';
        if(table.find('#oscitas-boxframe-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-boxframe-class').val()+'"';
        }
        var shortcode = '[frame';

        for( var index in options) {
            var value = table.find('#gallery-' + index).val();

            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            if(value!=''){
                if(index=='shadow'){
                    shadclass='ebs_shadow shadow';
                } else{
                    shadclass='';
                }
            shortcode += ' ' + index + '="' +shadclass+' ' + value + '"';
            }
        }
        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content)
            var selected_content = 'Your Content';
        shortcode += cusclass+']'+selected_content+'[/frame]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.selection.setContent(shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

