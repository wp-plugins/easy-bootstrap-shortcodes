var tabs={
    title:"Tabs Shortcode",
    id :'oscitas-form-tabs',
    pluginName: 'tabs',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(tabs,1170);
})();
function show_icon_dialog(parent,ele){
    parent.find(ele).on('click',function(){
        var $parent=jQuery(this).parent('td');
        console.log($parent.find('.oscitas-itemtab-icon'));
        jQuery( '#osc_show_iconlist_tabstitle' ).dialog({
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
                    $parent.find('.oscitas-itemtab-iconpreview').removeClass().addClass('oscitas-itemtab-iconpreview').addClass(type).addClass(val);
                    $parent.find('.oscitas-itemtab-icon').val(val);
                    $parent.find('.oscitas-itemtab-icontype').val(type);
                    $this.dialog('close');
                })
            }
        });
        jQuery( '#osc_show_iconlist_tabstitle' ).dialog('open');
    })
}
function create_oscitas_tabs(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }

    var tabs_fa='',tabs_fatitle='';
    /*if(ebs.ebs_fa_inclusion==1){
        tabs_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_tabs" class="oscitas-heading-icon_tabs">'+ebsfaicons+'</ul>';
        tabs_fatitle='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_tabstitle" class="oscitas-heading-icon_tabstitle">'+ebsfaicons+'</ul>';
    }*/
    tabs_fa='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_tabs" class="oscitas-heading-icon_tabs">'+ebsfaicons+'</ul>';
    tabs_fatitle='<h4>Font Awesome</h4><ul name="oscitas-heading-icon_tabstitle" class="oscitas-heading-icon_tabstitle">'+ebsfaicons+'</ul>';
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table" style="margin-top: 0px;">\
                 <tr class="oscitas-tabs-responsive" style="display: none">\
                     <th><label for="oscitas-tabs-position">Show Tabs Position</label></th>\
                     <td><select name="type" id="oscitas-tabs-position">\
                         <option value="">Top</option>\
                         <option value="tabs-below">Bottom</option>\
                     </select><br />\
                     </td>\
                 </tr>\
			<tr class="oscitas-tabs-responsive" style="display: none">\
				<th><label for="oscitas-tabs-pills">Tabs With Pills</label></th>\
				<td>\
				    <input type="checkbox" id="oscitas-tabs-pills">\
                    <small>Check this checkbox to show selector on selected tab</small>\
				</td>\
			</tr>\
			<tr class="oscitas-tabs-responsive"  style="display: none">\
				<th><label for="oscitas-tabs-icon">Use Icon</label></th>\
				<td>\
				  <div id="click_icon_list_tabs" class="oscitas-icon-div"><span id="osc_show_icon_tabs"></span><span class="show-drop"></span></div><input type="hidden" id="oscitas-tabs-icon" value=""><input type="hidden" id="oscitas-tabs-icontype" value="">\
                    <div id="osc_show_iconlist_tabs" class="oscitas-icon" style="display:none;width:100%"><h4>Glyphicons</h4><ul name="oscitas-heading-icon_tabs" class="oscitas-heading-icon_tabs">'+ebsicons+'</ul>'+tabs_fa+'</div>\
				</td>\
			</tr>\
			<tr class="oscitas-tabs-responsive"  style="display: none">\
				<th><label for="oscitas-tabs-text">Drop Down Text</label></th>\
				<td><input type="text" name="title" id="oscitas-tabs-text" value="More"/><br />\
				</td>\
				</tr>\
				<tr>\
				<th class="main_dp_th"><label for="oscitas-line">Dropdown Items</label></th>\
				<td>   <div id="osc_show_iconlist_tabstitle" title="Choose Icon" class="oscitas-icon" style="display:none;width:100%"><h4>Glyphicons</h4><ul name="oscitas-heading-icon_tabstitle" class="oscitas-heading-icon_tabstitle">'+ebsicons+'</ul>'+tabs_fatitle+'</div>\
				<table class="tb_multiple_column">\
                                <thead>\
                                    <tr><th>Title</th><th>Icon</th><th>Icon Color</th><th>Active</th><th>Option</th></tr>\
                                </thead>\
                                <tbody id="oscitas-append-tabitem">\
                                <tr class="osc_dropdown_list_item">\
                                    <td><input type="text" name="scitas-itemtab-title[]" class="oscitas-itemtab-title" value="Title"/></td>\
                                    <td><div class="oscitas-icon-div oscitas-itemtab-showicon"><span class="oscitas-itemtab-iconpreview"></span><span class="show-drop"></span></div><input type="hidden" class="oscitas-itemtab-icon" name="oscitas-itemtab-icon[]" value=""><input type="hidden" class="oscitas-itemtab-icontype" name="oscitas-itemtab-icontype[]" value=""></td>\
                                    <td><input type="text" name="oscitas-itemtab-iconcolor[]" class="oscitas-itemtab-iconcolor color" value="" data-default-color="" /></td>\
                                    <td><input type="radio" name="oscitas-itemtab-active" class="oscitas-itemtab-active" value="active" checked="checked"/></td><td></td>\
                                </tr>\
                                </tbody>\
                                <tfoot>\
                                    <tr><td colspan="5"><a id="osc_add_new_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon glyphicon-plus-sign"></i> Add New Item</a></td></tr>\
                                </tfoot>\
                                </table></td>\
			</tr>\
			<tr>\
				<th><label for="oscitas-tabs-class">Custom Class</label></th>\
				<td><input type="text" name="line" id="oscitas-tabs-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit" style="padding-right: 10px;text-align: right;">\
			<input type="button" id="oscitas-tab-submit" class="button-primary" value="Insert Responsive Tabs" name="submit" />\
		</p>\
		</div>');
    var table = form.find('table');
    form.appendTo('body').hide();
    form.find('#osc_add_new_dditem').click(function(){
        var item='<tr class="osc_dropdown_list_item"><td><input type="text" name="scitas-itemtab-title[]" class="oscitas-itemtab-title" value="Title"/></td><td><div class="oscitas-icon-div oscitas-itemtab-showicon"><span class="oscitas-itemtab-iconpreview"></span><span class="show-drop"></span></div><input type="hidden" class="oscitas-itemtab-icon" name="oscitas-itemtab-icon[]" value=""><input type="hidden" class="oscitas-itemtab-icontype" name="oscitas-itemtab-icontype[]" value=""></td><td><input type="text" name="oscitas-itemtab-iconcolor[]" class="oscitas-itemtab-iconcolor color" data-default-color="" value=""/></td><td><input type="radio" name="oscitas-itemtab-active" class="oscitas-itemtab-active" value=""/></td><td><a class="osc_remove_dditem" href="javascript:;" style="text-decoration:none;"><i class="glyphicon  glyphicon-remove"></i></a></td></tr>';
        form.find('#oscitas-append-tabitem').append(item);
        form.find('.color').wpColorPicker();
        show_icon_dialog(form,jQuery('#oscitas-append-tabitem').find('tr:last').find('.oscitas-itemtab-showicon'));
//        jQuery('.oscitas-itemtab-showicon').each(function(){
//            show_icon_dialog(form,jQuery(this));
//        })

    });
    jQuery('.osc_remove_dditem').live('click',function(){
        jQuery(this).parent().parent().remove();
    })

    form.find('.color').wpColorPicker();
    table.find('#click_icon_list_tabs').click(function(){
        if(!jQuery(this).hasClass('osc_icon_showing_tabs')){
            jQuery(this).addClass('osc_icon_showing_tabs')
            table.find('#osc_show_iconlist_tabs').show();
        } else{
            jQuery(this).removeClass('osc_icon_showing_tabs')
            table.find('#osc_show_iconlist_tabs').hide();
        }
    });
    table.find('.oscitas-heading-icon_tabs li').click(function(){
        var val=jQuery(this).attr('data-value');
        var type=jQuery(this).attr('type');
        table.find('.oscitas-heading-icon_tabs li').removeClass('osc_icon_selected');
        jQuery(this).addClass('osc_icon_selected');
        table.find('#click_icon_list_tabs').removeClass('osc_icon_showing_tabs');
        table.find('#osc_show_iconlist_tabs').hide();
        table.find('#osc_show_icon_tabs').removeClass().addClass(type).addClass(val);
        table.find('#oscitas-tabs-icon').val(val);
        table.find('#oscitas-tabs-icontype').val(type);

    });
    jQuery('.oscitas-itemtab-showicon').each(function(){
        show_icon_dialog(form,jQuery(this));
    })


    /*jQuery('#oscitas-tabs-responsive').click(function(){
        var name=jQuery(this).attr('name');
        if(jQuery(this).prop('checked')){
            jQuery('.'+name).show();

        } else{
            jQuery('.'+name).hide();
        }
        jQuery('#oscitas-form-tabs table tr:visible:even').css('background', '#F0F0F0');
        jQuery('#oscitas-form-tabs table tr:visible:odd').css('background', '#DADADD');
    })*/

    form.find('#oscitas-tab-submit').click(function(){

        var cusclass='',icon='',text='',pills='',position='',item= 0,eactive='',responsive='';
        var num=table.find('#oscitas-tabs-number').val();
        /*if(jQuery('#oscitas-tabs-responsive').prop('checked')){
            responsive=' responsive="true"';


            if(jQuery('#oscitas-tabs-pills').prop('checked')){
                pills=' pills="nav-pills"';

            }
            if(table.find('#oscitas-tabs-icontitle').val()!=''){
                tabicon= ' icon="'+table.find('#oscitas-tabs-icontitle').val()+'"';
                tabicon+= ' icontype="'+table.find('#oscitas-tabs-icontypetitle').val()+'"';
            }
            if(table.find('#oscitas-tabs-icon').val()!=''){
                icon= ' icon="'+table.find('#oscitas-tabs-icon').val()+'"';
                icon+= ' icontype="'+table.find('#oscitas-tabs-icontype').val()+'"';
            }
            if(table.find('#oscitas-tabs-text').val()!=''){
                text= ' text="'+table.find('#oscitas-tabs-text').val()+'"';
            }
            if(table.find('#oscitas-tabs-position').val()!=''){
                position= ' position="tabs-below"';
            }
        }*/
        if(table.find('#oscitas-tabs-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-tabs-class').val()+'"';
        }

        var shortcode = '[tabs'+responsive+position+pills+icon+text+cusclass;
        shortcode += ']';
        var row_attr={
            title:'',
            icon:'',
            icontype:'',
            iconcolor:''

        }
        form.find('tr.osc_dropdown_list_item').each(function(index){
var $this=jQuery(this);
            var attr='';
            jQuery.each(row_attr,function(ind,val){
                if($this.find('.oscitas-itemtab-'+ind).val()!=''){
                    attr+=' '+ind+'="'+$this.find('.oscitas-itemtab-'+ind).val()+'"';
                }
            })
            if(jQuery(this).find('.oscitas-itemtab-active').is(":checked")==true){
                attr+=' active="active"';
            }

            shortcode+='<br/>[tab'+attr+']Tab content goes here.[/tab]';


        });

        shortcode += '<br/>[/tabs]';

        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

        // closes dialog box
        close_dialogue(pluginObj.hashId);

    });
}
