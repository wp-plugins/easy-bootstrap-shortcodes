var separator={
    title:"Separator Shortcode",
    id :'oscitas-form-separator',
    pluginName: 'separator',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(separator);
})();

function create_oscitas_separator(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-separator-content">Separator Content:</label></th>\
				<td><input type="text" name="label" id="oscitas-separator-content" value=""/><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-separator-style">Separator Style:</label></th>\
				<td><select name="type" id="oscitas-separator-style">\
                    <option value="">None</option>\
                    <option value="separator-dotted">Dotted</option>\
                    <option value="separator-dashed">Dashed</option>\
					<option value="separator-double">Double</option>\
					<option value="separator-double-thick-thin">Double Thick Thin</option>\
					<option value="separator-diagonal">Diagonal</option>\
					<option value="separator-wave">Wave</option>\
                    <option value="separator-thick">Thick</option>\
                    <option value="separator-thin">Thin</option>\
                </select><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-separator-margin">Margin:</label></th>\
				<td><input type="text" name="line" id="oscitas-separator-margin" value=""/><br />\
                                <small>Enter a numeric value Ex. 20</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-separator-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-separator-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-separator-submit" class="button-primary" value="Insert Separator" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
   

        
		
    // handles the click event of the submit button
    form.find('#oscitas-separator-submit').click(function(){
        var cusclass='',style='',margin='';
        if(table.find('#oscitas-separator-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-separator-class').val()+'"';
        }
        if(table.find('#oscitas-separator-style').val()!=''){
            style= ' style="'+table.find('#oscitas-separator-style').val()+'"';
        }
        if(table.find('#oscitas-separator-margin').val()!=''){
            margin= ' margin="'+table.find('#oscitas-separator-margin').val()+'"';
        }
        shortcode='';
      
        var shortcode = '[separator'+cusclass+style+margin+']';
            shortcode += jQuery('#oscitas-separator-content').val();
            shortcode += '[/separator]';
      
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

