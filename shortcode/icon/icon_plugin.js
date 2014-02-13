var icon={
    title:"Icon Shortcode",
    id :'oscitas-form-icon',
    pluginName: 'icon',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(icon,800);
})();
function create_oscitas_icon(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    var icon_fa='';
   /* if(ebs.ebs_fa_inclusion==1){
        icon_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsfaicons+'</ul>';
    }*/
    icon_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsfaicons+'</ul>';

    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
                        <tr>\
                        <th><label for="oscitas-heading-icon">Select Icon:</label></th>\
				<td><div id="click_icon_list_icon" class="oscitas-icon-div"><span id="osc_show_icon_icon" class="glyphicon glyphicon-asterisk"></span><span class="show-drop"></span></div><input type="hidden" id="oscitas-icon-icon" value="glyphicon-asterisk"><input type="hidden" id="oscitas-icon-icontype" value="glyphicon">\
                    <div id="osc_show_iconlist_icon" class="oscitas-icon" style="display:none;width:100%"><h4>Glyphicons</h4><ul name="oscitas-heading-icon_icon" class="oscitas-heading-icon_icon">'+ebsicons+'</ul>'+icon_fa+'</div>\
				</td>\
			</tr>\
			   <tr>\
				<th><label for="oscitas-icon-iconcolor">Icon Color:</label></th>\
				<td><input type="text" name="label" id="oscitas-icon-iconcolor" class="color" value="" /><br />\
				</td>\
			</tr>\
			 <tr>\
				<th><label for="oscitas-icon-fontsize">Icon Font Size:</label></th>\
				<td><input type="text" name="line" id="oscitas-icon-fontsize" value=""/>px\
				</td>\
			</tr>\
                         <tr>\
				<th><label for="oscitas-icon-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-icon-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="oscitas-icon-submit" class="button-primary" value="Insert icon" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    jQuery('.glyphicon').css('display','inline');
    form.appendTo('body').hide();
    form.find('.color').wpColorPicker();
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
    form.find('#oscitas-icon-submit').click(function(){
        var  cusclass='';
        if(table.find('#oscitas-icon-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-icon-class').val()+'"';
        }
        if(table.find('#oscitas-icon-iconcolor').val()!=''){
            cusclass+= ' color="'+table.find('#oscitas-icon-iconcolor').val()+'"';
        }if(table.find('#oscitas-icon-fontsize').val()!=''){
            cusclass+= ' fontsize="'+table.find('#oscitas-icon-fontsize').val()+'"';
        }

        var ficon = ' type="' +table.find('#oscitas-icon-icon').val()+'"' ;
        ficon+=' icontype="' + table.find('#oscitas-icon-icontype').val()+'"' ;
        var  shortcode='';
        shortcode='[icon'+ficon+cusclass+']'
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

