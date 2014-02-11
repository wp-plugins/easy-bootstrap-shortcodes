var gmaps={
    title:"Google Map Shortcode",
    id :'oscitas-form-gmaps',
    pluginName: 'gmaps',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(gmaps);
})();

function create_oscitas_gmaps(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="gallery-table" class="form-table">\
			<tr>\
				<th><label for="mygallery-type">Map Type:</label></th>\
				<td><select name="type" id="mygallery-type">\
					<option value="ROADMAP">Normal Map</option>\
					<option value="SATELLITE">Satellite Map</option>\
                                        <option value="HYBRID">Hybrid Map</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-width">Width:</label></th>\
				<td><input type="text" name="width" id="mygallery-width" value="false" /><br /><small>Enter a numeric value or \'false\' for full width</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-height">Height:</label></th>\
				<td><input type="text" name="height" id="mygallery-height" value="400" /><br /><small>Enter a numeric value or \'false\' for full width</small>\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-latitude">Latitude:</label></th>\
				<td><input type="text" name="latitude" id="mygallery-latitude" value="0" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-longitude">Longitude</label></th>\
				<td><input type="text" name="longitude" id="mygallery-longitude" value="0" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-address">Address</label></th>\
				<td><input type="text" name="address" id="mygallery-address" value="" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-zoom">Zoom</label></th>\
				<td><input type="text" name="bgcolor" id="mygallery-zoom" value="3" /><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-gmap-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-gmap-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p style="color: red;"><small>Latitude and Longitude having higher priority than address if latitude or longitude having zero value, map will search for address specified </small>\
		</p>\
		<p class="submit">\
			<input type="button" id="mygallery-submit" class="button-primary" value="Insert Google Map" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();

    // handles the click event of the submit button
    form.find('#mygallery-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = { 
            'width'       : 'false',  
            'height'      : '400',
            'latitude'    : '0',
            'longitude'   : '0',
            'address'     : '',
            'zoom'        : '3',
            'type'        : 'ROADMAP'
        };
        var cusclass='';
        if(table.find('#oscitas-gmap-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-gmap-class').val()+'"';
        }
        var shortcode = '[googlemap ';
			
        for( var index in options) {
            var value = table.find('#mygallery-' + index).val();
				
            // attaches the attribute to the shortcode only if it's different from the default value
            //if ( value !== options[index] )
            shortcode += ' ' + index + '="' + value + '"';
        }
			
        shortcode += cusclass+']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

