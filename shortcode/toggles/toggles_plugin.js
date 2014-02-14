var toggles={
    title:"Toggle Shortcode",
    id :'oscitas-form-toggles',
    pluginName: 'toggles',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(toggles,980);
})();
function __toggle_show_icon_dialog(parent,ele){
    parent.find(ele).on('click',function(){
        var $parent=jQuery(this).parent('td');
        console.log($parent.find('.oscitas-itemtoggle-icon'));
        jQuery('#osc_show_iconlist_togglestitle' ).dialog({
            dialogClass : 'wp-dialog osc-dialog',
            autoOpen: false,
            height: 400,
            width: 800,
            modal: true,
            open:function(){
                var $this=jQuery(this);
                $this.find('li').unbind('click');
                $this.find('li').click(function(){
                    var val=jQuery(this).attr('data-value');
                    var type=jQuery(this).attr('type');
                    console.log(val)
                    $parent.find('.oscitas-itemtoggle-iconpreview').removeClass().addClass('oscitas-itemtoggle-iconpreview').addClass(type).addClass(val);
                    $parent.find('.oscitas-itemtoggle-icon').val(val);
                    $parent.find('.oscitas-itemtoggle-icontype').val(type);
                    $this.dialog('close');
                })
            }
        });
        jQuery( '#osc_show_iconlist_togglestitle' ).dialog('open');
    })
}
function __toggle_open_close_icon(){
    if(jQuery('#oscitas-toggles-opencloseicon').prop('checked')){
        jQuery('.toggle_custom_icon').hide();
    } else{
        jQuery('.toggle_custom_icon').show();
    }
}
function create_oscitas_toggles(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }

    var toggles_fa='',toggles_fatitle='';
    /*if(ebs.ebs_fa_inclusion==1){
        toggles_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_toggles" class="oscitas-heading-icon_toggles">'+ebsfaicons+'</ul>';
        toggles_fatitle='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_togglestitle" class="oscitas-heading-icon_togglestitle">'+ebsfaicons+'</ul>';
    }*/
    toggles_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_toggles" class="oscitas-heading-icon_toggles">'+ebsfaicons+'</ul>';
    toggles_fatitle='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_togglestitle" class="oscitas-heading-icon_togglestitle">'+ebsfaicons+'</ul>';

    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table" style="margin-top: 0px;">\
    <tr>\
				<th><label for="oscitas-toggles-class">Open Close Icon</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-toggles-opencloseicon" value=""/><br />\
				</td>\
			</tr>\
        <tr>\
				<th><label for="oscitas-toggles-class">Open first Toggle</label></th>\
				<td><input type="checkbox" name="line" id="oscitas-toggles-openfirst" value=""/><br />\
				</td>\
			</tr>\
				<tr>\
				<th class="main_dp_th"><label for="oscitas-line">Dropdown Items</label></th>\
				<td>   <div id="osc_show_iconlist_togglestitle" title="Choose Icon" class="oscitas-icon" style="display:none;width:100%"><h4>Glyphicons</h4><ul name="oscitas-heading-icon_togglestitle" class="oscitas-heading-icon_togglestitle">'+ebsicons+'</ul>'+toggles_fatitle+'</div>\
				<table class="tb_multiple_column">\
                                <thead>\
                                    <tr><th>Title</th><th class="toggle_custom_icon">Icon</th><th class="toggle_custom_icon">Icon Color</th><th>Option</th></tr>\
                                </thead>\
                                <tbody id="oscitas-append-toggleitem">\
                                <tr class="osc_dropdown_list_item">\
                                    <td><input type="text" name="scitas-itemtoggle-title[]" class="oscitas-itemtoggle-title" value="Title"/></td>\
                                    <td class="toggle_custom_icon"><div class="oscitas-icon-div oscitas-itemtoggle-showicon"><span class="oscitas-itemtoggle-iconpreview"></span><span class="show-drop"></span></div><input type="hidden" class="oscitas-itemtoggle-icon" name="oscitas-itemtoggle-icon[]" value=""><input type="hidden" class="oscitas-itemtoggle-icontype" name="oscitas-itemtoggle-icontype[]" value=""></td>\
                                    <td class="toggle_custom_icon"><input type="text" name="oscitas-itemtoggle-iconcolor[]" class="oscitas-itemtoggle-iconcolor color" data-default-color="" value=""/></td>\
                                  <td></td>\
                                </tr>\
                                </tbody>\
                                <tfoot>\
                                    <tr><td colspan="5"><a id="osc_add_new_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon glyphicon-plus-sign"></i> Add New Item</a></td></tr>\
                                </tfoot>\
                                </table></td>\
			</tr>\
                    <tr>\
                        <th><label for="oscitas-toggles-class">Custom Class</label></th>\
                        <td><input type="text" name="line" id="oscitas-toggles-class" value=""/><br />\
                        </td>\
                    </tr>\
		</table>\
		<p class="submit" style="padding-right: 10px;text-align: right;">\
			<input type="button" id="oscitas-toggle-submit" class="button-primary" value="Insert Toggles" name="submit" />\
		</p>\
		</div>');
    var table = form.find('table');
    form.appendTo('body').hide();
    form.find('#osc_add_new_dditem').click(function(){
        var item='<tr class="osc_dropdown_list_item"><td><input type="text" name="scitas-itemtoggle-title[]" class="oscitas-itemtoggle-title" value="Title"/></td><td class="toggle_custom_icon"><div class="oscitas-icon-div oscitas-itemtoggle-showicon"><span class="oscitas-itemtoggle-iconpreview"></span><span class="show-drop"></span></div><input type="hidden" class="oscitas-itemtoggle-icon" name="oscitas-itemtoggle-icon[]" value=""><input type="hidden" class="oscitas-itemtoggle-icontype" name="oscitas-itemtoggle-icontype[]" value=""></td><td class="toggle_custom_icon"><input type="text" name="oscitas-itemtoggle-iconcolor[]" class="oscitas-itemtoggle-iconcolor color" data-default-color="" value=""/></td><td><a class="osc_remove_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon  glyphicon-remove"></i></a></td></tr>';
        form.find('#oscitas-append-toggleitem').append(item);
        form.find('.color').wpColorPicker();
        __toggle_show_icon_dialog(form,jQuery('#oscitas-append-toggleitem').find('tr:last').find('.oscitas-itemtoggle-showicon'));
        __toggle_open_close_icon();
    });
    jQuery('.osc_remove_dditem').live('click',function(){
        jQuery(this).parent().parent().remove();
    })

    form.find('.color').wpColorPicker();
    jQuery('.oscitas-itemtoggle-showicon').each(function(){
        __toggle_show_icon_dialog(form,jQuery(this));
    })
    __toggle_open_close_icon();
    jQuery('#oscitas-toggles-opencloseicon').click(function(){
        __toggle_open_close_icon();
    })


    form.find('#oscitas-toggle-submit').click(function(){

        var cusclass='', active='', openclose='';

        if(table.find('#oscitas-toggles-class').val()!=''){
            cusclass+= ' class="'+table.find('#oscitas-toggles-class').val()+'"';
        }
        if(table.find('#oscitas-toggles-openfirst').is(":checked")==true){
            active=' active="active"';
        }
        if(table.find('#oscitas-toggles-opencloseicon').is(":checked")==true){
            openclose =' ocicon="true"';
            var row_attr={
                title:''
            }
        } else{
            var row_attr={
                title:'',
                icon:'',
                icontype:'',
                iconcolor:''
            }
        }
        var shortcode = '[toggles'+cusclass;
        shortcode += ']';

        var i=1;
        form.find('tr.osc_dropdown_list_item').each(function(index){
            var $this=jQuery(this);
            var attr='';
            if(i==1){
                attr+=active;
            }
            attr+=openclose;
            jQuery.each(row_attr,function(ind,val){
                if($this.find('.oscitas-itemtoggle-'+ind).val()!=''){
                    attr+=' '+ind+'="'+$this.find('.oscitas-itemtoggle-'+ind).val()+'"';
                }
            })


            shortcode+='<br/>[toggle'+attr+']Toggle content goes here.[/toggle]';
            i++;

        });

        shortcode += '<br/>[/toggles]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes dialog box
        close_dialogue(pluginObj.hashId);

    });
}
