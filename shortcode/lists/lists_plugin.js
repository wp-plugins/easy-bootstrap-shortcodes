var lists={
    title:"List Group Shortcode",
    id :'oscitas-form-lists',
    pluginName: 'lists'
};
(function() {
    _create_tinyMCE_options(lists,800);
})();

function create_oscitas_lists(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    var icon_fa='';
    /*if(ebs.ebs_fa_inclusion==1){
        icon_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsfaicons+'</ul>';
    }*/
    icon_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsfaicons+'</ul>';

    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="oscitas-list-type">Lists style</label></th>\
				<td><select name="type" id="oscitas-list-type">\
                    <option value="">None</option>\
					<option value="glyphicon-arrow-right">Arrow</option>\
					<option value="glyphicon-ok">Check</option>\
					<option value="glyphicon-plus">Plus</option>\
                    <option value="glyphicon-minus">Minus</option>\
                    <option value="custom">Custom</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr class="osc_list_icon" style="display: none">\
                        <th><label for="oscitas-heading-icon">Select Icon:</label></th>\
				<td><div id="click_icon_list_icon" class="oscitas-icon-div"><span id="osc_show_icon_icon" class="glyphicon glyphicon-asterisk"></span><span class="show-drop"></span></div><input type="hidden" id="oscitas-icon-icon" value="glyphicon-asterisk"><input type="hidden" id="oscitas-icon-icontype" value="glyphicon">\
                    <div id="osc_show_iconlist_icon" class="oscitas-icon" style="display:none;width:100%"><h4>Glyphicons</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsicons+'</ul>'+icon_fa+'</div>\
				</td>\
			</tr>\
			<tr class="osc_list_icon" style="display: none">\
				<th><label for="oscitas-icon-iconcolor">Icon Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-list-iconcolor" class="color" value="" data-default-color=""/><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-line">No of List Item</label></th>\
				<td><input type="text" name="line" id="oscitas-list-item" value="3"/><br /><small>Enter a numeric value</small>\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-list-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-list-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-submit" class="button-primary" value="Insert List" name="submit" />\
		</p>\
		</div>');

    var table = form.find('table');
    form.appendTo('body').hide();
    form.find('.color').wpColorPicker();
    jQuery('#oscitas-list-type').change(function(){
        if(jQuery(this).val()=='custom'){
           jQuery('.osc_list_icon').show();
        }
       else{
            jQuery('.osc_list_icon').hide();
        }
    })
    table.find('#click_icon_list_icon').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_icon')){
            jQuery(this).addClass('osc_icon_showing_icon')
            table.find('#osc_show_iconlist_icon').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_icon')
            table.find('#osc_show_iconlist_icon').hide();
        }
    });

    table.find('.oscitas-heading-icon_icon li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon_icon li').removeClass('osc_icon_selected');
        jQuery(this).addClass('osc_icon_selected');
        table.find('#click_icon_list_icon').removeClass('osc_icon_showing_icon');
        table.find('#osc_show_iconlist_icon').hide();
        table.find('#osc_show_icon_icon').removeClass().addClass(type).addClass(val);
        table.find('#oscitas-icon-icon').val(val);
        table.find('#oscitas-icon-icontype').val(type);

    })
    // handles the click event of the submit button
    form.find('#oscitas-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless
        var options = {
            'type'       : 'arrow'
        },list=0,list_type;
        var cusclass='';
        if(table.find('#oscitas-list-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-list-class').val()+'"';
        }
        var shortcode = '[list'+cusclass;
        var list_item=jQuery('#oscitas-list-item').val();
        if(isNaN(list_item)==false){
            list=list_item;
        } else{
            list=3;
        }


        shortcode += ']<br/>';
        if(table.find('#oscitas-list-type').val()!=''){
            list_type=' type="'+table.find('#oscitas-list-type').val()+'"';
            if(table.find('#oscitas-list-type').val()=='custom'){
                list_type+=' icon="'+table.find('#oscitas-icon-icon').val()+'"';
                list_type+=' icontype="'+table.find('#oscitas-icon-icontype').val()+'"';
                if(table.find('#oscitas-list-iconcolor').val()!=''){
                list_type+=' iconcolor="'+table.find('#oscitas-list-iconcolor').val()+'"';
                }
            }
        }
        else{
            list_type='';
        }
        for(var i=1;i<=list;i++){
            shortcode +='[li'+list_type+']your list content[/li]<br/>'
        }
        shortcode +='[/list]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        close_dialogue(pluginObj.hashId);
    });
}

