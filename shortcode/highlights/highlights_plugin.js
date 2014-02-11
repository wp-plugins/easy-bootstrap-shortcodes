var highlights={
    title:"Highlight Contant",
    id :'oscitas-form-highlights',
    pluginName: 'highlights',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(highlights);
})();

function osc_visible_highlights(){
    var hlval=jQuery('#oscitas-highlights-type').val();
    jQuery('.osc-hl-class').hide();
    jQuery('.osc-hl-'+hlval).show();
    jQuery('#oscitas-form-highlights table tr:visible:even').css('background', '#F0F0F0');
    jQuery('#oscitas-form-highlights table tr:visible:odd').css('background', '#DADADD');

}
function create_oscitas_highlights(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="gallery-table" class="form-table">\
               <tr >\
				<th><label for="oscitas-highlights-type">Highlight Type:</label></th>\
				<td><select name="highlight" id="oscitas-highlights-type">\
				<option value="existing">Use Existing Highlights</option>\
                <option value="custom">Make Custom Highlight</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr class="osc-hl-existing osc-hl-class">\
				<th><label for="oscitas-highlights-hightlight">Highlights:</label></th>\
				<td><select id="oscitas-highlights-hightlight">\
				<option value="yellow">Yellow</option>\
                <option value="blue">Blue</option>\
                <option value="red">Red</option>\
                <option value="green">Green</option>\
				</select><br />\
				</td>\
			</tr>\
            <tr class="osc-hl-custom osc-hl-class">\
				<th><label for="oscitas-highlights-bg">Highlight Background:</label></th>\
				<td><input type="text" name="label" id="oscitas-highlights-bg" class="color" value="#F9F9F9" data-default-color="#F9F9F9"/><br />\
				</td>\
			</tr>\
                <tr class="osc-hl-custom osc-hl-class">\
				<th><label for="oscitas-highlights-color">Highlight Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-highlights-color" class="color" value="#000000" data-default-color="#000000"/><br />\
				</td>\
			</tr>\
                <tr>\
				<th><label for="oscitas-highlights-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-highlights-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-highlights-submit" class="button-primary" value="Insert Highlight" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();
    form.find('.color').wpColorPicker();
    osc_visible_highlights();
    form.find('#oscitas-highlights-type').change(function(){
        osc_visible_highlights();

    })
    // handles the click event of the submit button
    form.find('#oscitas-highlights-submit').click(function(){
        var cusclass='';
        if(table.find('#oscitas-highlights-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-highlights-class').val()+'"';
        }
        shortcode='';
        var code ='', htype=form.find('#oscitas-highlights-type').val();

        if(htype=='existing'){
            code = ' highlight="'+form.find('#oscitas-highlights-hightlight').val()+'"';
        }
        else if(htype=='custom'){
            code=' bg="'+form.find('#oscitas-highlights-bg').val()+'" color="'+jQuery('#oscitas-highlights-color').val()+'"'
        }
        var selected_content = tinyMCE.activeEditor.selection.getContent();
        if(!selected_content)
             selected_content = 'Your Content';
        var shortcode = '[highlights type="'+htype+'"'+code+cusclass+']';
        shortcode += selected_content;
        shortcode += '[/highlights]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.selection.setContent(shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

