var lead={
    title:"Lead Shortcode",
    id :'oscitas-form-lead',
    pluginName: 'lead',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(lead);
})();

function create_oscitas_lead(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
				<th><label for="oscitas-lead-content">Lead Content:</label></th>\
				<td><input id="oscitas-lead-content" type="text" name="oscitas-lead-content"  value="Content" />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-lead-alignment">Lead Alignment:</label></th>\
				<td><select name="oscitas-lead-alignment" id="oscitas-lead-alignment">\
                                <option value="center">Center</option>\
                                <option value="left">Left</option>\
                                <option value="right">Right</option>\
                                </select><br/><small>Default alignment is center</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-lead-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-lead-class" value=""/>\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-lead-submit" class="button-primary" value="Insert Lead" name="submit" />\
		</p>\
		</div>');
    
    var table = form.find('table');
    form.appendTo('body').hide();
    // handles the click event of the submit button
    form.find('#oscitas-lead-submit').click(function(){
        var shortcode='';
        var cusclass='';
        if(table.find('#oscitas-lead-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-lead-class').val()+'"';
        }
        if(form.find('#oscitas-lead-content').val()!=''){
            shortcode = '[lead'+cusclass+' align="'+form.find('#oscitas-lead-alignment').val()+'"]'+form.find('#oscitas-lead-content').val()+'[/lead]';
        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);


        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}
