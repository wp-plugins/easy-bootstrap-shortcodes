var video={
    title:"Video Shortcode",
    id :'oscitas-form-video',
    pluginName: 'video',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(video);
})();

function create_oscitas_video(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-type">VideoServer</label></th>\
				<td><select name="type" id="oscitas-type">\
					<option value="youtube">Youtube</option>\
					<option value="vimeo">Vimeo</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-link">Link</label></th>\
				<td><input type="text" name="itemtag" id="oscitas-link" value="" /><br />\
					<small>Enter url of the video.</small></td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-width">Width</label></th>\
				<td><input type="text" name="icontag" id="oscitas-width" value="100%" /><br />\
				<small>Enter numeric value with \'%\' or \'px\'</small>\
					</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-height">Height</label></th>\
				<td><input type="text" name="captiontag" id="oscitas-height" value="350px" /><br />\
				<small>Enter numeric value with \'%\' or \'px\'</small>\
					</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-video-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-video-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-video-submit" class="button-primary" value="Insert Video" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
		
    // handles the click event of the submit button
    form.find('#oscitas-video-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var cusclass='';
        if(table.find('#oscitas-video-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-video-class').val()+'"';
        }
        var options = { 
            'type'       : 'youtube',
            'link'       : '',
            'width'      : '100%',
            'height'     : '350px'
        };
        var shortcode = '[video'+cusclass;
			
        for( var index in options) {
            var value = table.find('#oscitas-' + index).val();
				
            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            shortcode += ' ' + index + '="' + value + '"';
        }
			
        shortcode += ']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

