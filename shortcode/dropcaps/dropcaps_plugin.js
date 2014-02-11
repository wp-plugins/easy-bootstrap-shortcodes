var dropcaps={
    title:"Dropcaps Shortcode",
    id :'oscitas-form-dropcaps',
    pluginName: 'dropcaps',
    setRowColors:true
};

(function() {
    _create_tinyMCE_options(dropcaps);
})();
function dropcapvisiblebg(){
    var val=jQuery('#oscitas-form-dropcaps #oscitas-dropcap-style').val();
    if(val=='dropcap-standard'){
        jQuery('#oscitas-form-dropcaps #nodropcapbg').hide();
    } else{
        jQuery('#oscitas-form-dropcaps #nodropcapbg').show();
    }
    jQuery('#oscitas-form-dropcaps table tr:visible:even').css('background', '#F0F0F0');
    jQuery('#oscitas-form-dropcaps table tr:visible:odd').css('background', '#DADADD');
}
function create_oscitas_dropcaps(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-dropcap-style">Dropcap Style:</label></th>\
				<td><select name="type" id="oscitas-dropcap-style">\
					<option value="dropcap-standard">Standard</option>\
					<option value="dropcap-circle">Circle</option>\
					<option value="dropcap-box">Box</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-dropcap-content">Dropcap Content:</label></th>\
				<td><input type="text" name="label" id="oscitas-dropcap-content" value="A"/><br />\
				</td>\
			</tr>\
            <tr id="nodropcapbg">\
				<th><label for="oscitas-dropcap-bg">Dropcap Background:</label></th>\
				<td><input type="text" name="label" id="oscitas-dropcap-bg" class="color" value="#F9F9F9" data-default-color="#F9F9F9"/><br />\
				</td>\
			</tr>\
                <tr >\
				<th><label for="oscitas-dropcap-color">Dropcap Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-dropcap-color" class="color" value="#000000" data-default-color="#000000"/><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-dropcap-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-dropcap-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-dropcap-submit" class="button-primary" value="Insert Dropcap" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();
    dropcapvisiblebg();
    form.find('#oscitas-dropcap-style').change(function(){
        dropcapvisiblebg();
        });
form.find('.color').wpColorPicker();
        
		
    // handles the click event of the submit button
    form.find('#oscitas-dropcap-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-dropcap-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-dropcap-class').val()+'"';
        }
        shortcode='';
        if(jQuery('#oscitas-dropcap-content').val()!=''){
            var bg;
            var val=jQuery('#oscitas-form-dropcaps #oscitas-dropcap-style').val();
            if(val=='dropcap-standard'){
                bg='';
            } else{
                bg=' bg="'+jQuery('#oscitas-dropcap-bg').val()+'"';
            }

            var shortcode = '[dropcaps style="'+jQuery('#oscitas-dropcap-style').val()+'"'+cusclass+bg+'  color="'+jQuery('#oscitas-dropcap-color').val()+'"]';
            shortcode += jQuery('#oscitas-dropcap-content').val();
            shortcode += '[/dropcaps]';
        }
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

