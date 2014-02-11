var social={
    title:"Social Link Shortcode",
    id :'oscitas-form-social',
    pluginName: 'social',
    setRowColors:false
};

(function() {
    _create_tinyMCE_options(social);
})();

function create_oscitas_social(pluginObj){
    if(jQuery(pluginObj.hashId).length){
        jQuery(pluginObj.hashId).remove();
    }
    // creates a form to be displayed everytime the button is clicked
    // you should achieve this using AJAX instead of direct html code like this
    var form = jQuery('<div id="'+pluginObj.id+'" class="oscitas-container" title="'+pluginObj.title+'"><table id="oscitas-table" class="form-table">\
			<tr>\
				<th><label for="mygallery-social-type">Insert:</label></th>\
				<td><select name="type" id="mygallery-social-type">\
					<option value="fbox">Facebook box</option>\
					<option value="fcomments">Facebook comments</option>\
                                        <option value="twitter">Twitter</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-social-variant">Variant</label></th>\
				<td><select name="type" id="mygallery-social-variant">\
					<option value="light">Light</option>\
					<option value="dark">Dark</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr id="tr-link">\
				<th><label for="mygallery-social-link">Fanpage link</label></th>\
				<td><input type="text" name="link" id="mygallery-social-link" value="http://www.facebook.com/oscitas" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-social-width">Width</label></th>\
				<td><input type="text" name="icontag" id="mygallery-social-width" value="600" /><br />\
				</td>\
			</tr>\
			<tr>\
				<th><label for="mygallery-social-height">Height</label></th>\
				<td><input type="text" name="icontag" id="mygallery-social-height" value="600" /><br />\
				</td>\
			</tr>\
			<tr id="tr-faces">\
				<th><label for="mygallery-social-faces">Show faces:</label></th>\
				<td><select name="faces" id="mygallery-social-faces">\
					<option value="true">show</option>\
					<option value="false">hide</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr id="tr-stream">\
				<th><label for="mygallery-social-stream">Stream:</label></th>\
				<td><select name="stream" id="mygallery-social-stream">\
					<option value="true">show</option>\
					<option value="false">hide</option>\
				</select><br />\
				</td>\
			</tr>\
			<tr id="tr-posts" style="display:none;">\
				<th><label for="mygallery-social-posts">Show posts:</label></th>\
				<td><input type="text" name="posts" id="mygallery-social-posts" value="15" /><br />\
				</td>\
			</tr>\
			<tr id="tr-username" style="display:none;">\
				<th><label for="mygallery-social-username">Twitter username:</label></th>\
				<td><input type="text" name="posts" id="mygallery-social-username" value="" /><br />\
				</td>\
			</tr>\
			<tr id="tr-tweets" style="display:none;">\
				<th><label for="mygallery-social-tweets">Show tweets:</label></th>\
				<td><input type="text" name="posts" id="mygallery-social-tweets" value="10" /><br />\
				</td>\
			</tr>\
			<tr id="tr-bordercolor" style="display:none;">\
				<th><label for="mygallery-social-bordercolor">Border Color</label></th>\
				<td><input type="text" name="bordercolor" id="mygallery-social-bordercolor" value="#5B8090" /><br />\
				</td>\
			</tr>\
			<tr id="tr-linkscolor" style="display:none;">\
				<th><label for="mygallery-social-linkscolor">Links Color</label></th>\
				<td><input type="text" name="linkscolor" id="mygallery-social-linkscolor" value="#1985B5" /><br />\
				</td>\
			</tr>\
			<tr id="tr-noheader" style="display:none;">\
				<th><label for="mygallery-social-noheader">Hide Header</label></th>\
				<td><input type="checkbox" name="noheader" id="mygallery-social-noheader" value="noheader" /><br />\
				</td>\
			</tr>\
<tr id="tr-nofooter" style="display:none;">\
				<th><label for="mygallery-social-nofooter">Hide Footer</label></th>\
				<td><input type="checkbox" name="nofooter" id="mygallery-social-nofooter" value="nofooter" /><br />\
				</td>\
			</tr>\
			<tr id="tr-noborders" style="display:none;">\
				<th><label for="mygallery-social-linkscolor">No Border</label></th>\
				<td><input type="checkbox" name="noborders" id="mygallery-social-noborders" value="noborders" /><br />\
				</td>\
			</tr>\
                        <tr>\
				<th><label for="oscitas-social-class">Custom Class:</label></th>\
				<td><input type="text" name="line" id="oscitas-social-class" value=""/><br />\
				</td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="mygallery-social-submit" class="button-primary" value="Insert Facebook Box" name="submit" />\
		</p>\
		</div>');
		
    var table = form.find('table');
    form.appendTo('body').hide();

    //jQuery('#mygallery-bgcolor').ColorPicker('#ff0000');
    //jQuery('#mygallery-color').ColorPickerSetColor('#ff0000');
    //addind colopicker for each color box with <div> to show color
    jQuery('#oscitas-form-social table tr:visible:even').css('background', '#F0F0F0');
    jQuery('#oscitas-form-social table tr:visible:odd').css('background', '#DADADD');
    var colors = ['bordercolor','linkscolor'];
    jQuery.each(colors,function(index,color){
        jQuery('#oscitas-form-social').find('#mygallery-social-'+color).wpColorPicker();

    });
    var elements = ['interval','tweets','username','posts','stream','faces','link','bordercolor','linkscolor','noheader','nofooter','noborders'];

    jQuery('#mygallery-social-type').change(function(){
        var abc = jQuery(this).val();
        if('fbox' == abc){
            jQuery.each(elements,function(index,element){
                if('link'==element||'faces'==element||'stream'==element){
                    jQuery("#tr-"+element).show();
                }else{
                    jQuery("#tr-"+element).hide();
                }
            });
            jQuery('#mygallery-social-submit').val('Insert Facebook Box');
            jQuery('table#mygallery-social-table tr:visible:even').css('background', '#F0F0F0');
            jQuery('table#mygallery-social-table tr:visible:odd').css('background', '#DADADD');  
        }
        else if('fcomments' == abc){
            jQuery.each(elements,function(index,element){
                if('posts'==element){
                    jQuery("#tr-"+element).show();
                }else{
                    jQuery("#tr-"+element).hide();
                }
            });
            jQuery('#mygallery-social-submit').val('Insert Facebook Comments');
            jQuery('table#mygallery-social-table tr:visible:even').css('background', '#F0F0F0');
            jQuery('table#mygallery-social-table tr:visible:odd').css('background', '#DADADD');  
        }
        else{
            jQuery.each(elements,function(index,element){
                if('link'==element||'faces'==element||'stream'==element||'posts'==element){
                    jQuery("#tr-"+element).hide();
                }else{
                    jQuery("#tr-"+element).show();
                }
            });
            jQuery('#mygallery-social-submit').val('Insert Tweets');
            jQuery('table#mygallery-social-table tr:visible:even').css('background', '#F0F0F0');
            jQuery('table#mygallery-social-table tr:visible:odd').css('background', '#DADADD');  
        }
      
    });
    //varialbles declaration
    var fbox = { 
        'link'       : 'http://www.facebook.com/oscitas',
        'width'      : '600',
        'height'     : '600',
        'variant'    : 'light',  
        'faces'      : 'true',
        'stream'     : 'true'
    };
    var fcomments = { 
        'width'      : '600',
        'height'     : '600',
        'posts'      : '15',  
        'variant'    : 'light'
    };
    var twitter = { 
        'width'          : '600',
        'height'         : '600',
        'username'       : '10',  
        'variant'        : 'light',
        'tweets'         : '10',
        'bordercolor'     :'5B8090',
        'linkscolor'     :'1985B5'



    };
    var tweeter_check={
        'noheader'      : '',
        'nofooter'      : '',
        'noborders'      : ''
    }

    // handles the click event of the submit button
    form.find('#mygallery-social-submit').click(function(){
        // defines the options and their default values
        // again, this is not the most elegant way to do this
        // but well, this gets the job done nonetheless

        var type = table.find('#mygallery-social-type').val();
        var cusclass='';
        if(table.find('#oscitas-social-class').val()!=''){
            cusclass= ' class="'+table.find('#oscitas-social-class').val()+'"';
        }
        if('fbox'==type){
            var shortcode = '[fb-box'+cusclass;
            for( var index in fbox) {
                var value = table.find('#mygallery-social-' + index).val();
				
                // attaches the attribute to the shortcode only if it's different from the default value
                //if ( value !== options[index] )
                shortcode += ' ' + index + '="' + value + '"';
            }
			
        }else if('fcomments'==type){
            var shortcode = '[fb-comments'+cusclass;
            for( var index in fcomments) {
                var value = table.find('#mygallery-social-' + index).val();
				
                // attaches the attribute to the shortcode only if it's different from the default value
                //if ( value !== options[index] )
                shortcode += ' ' + index + '="' + value + '"';
            }
    
        }else{
            var shortcode = '[twitter'+cusclass;
            for( var index in twitter) {
                var value = table.find('#mygallery-social-' + index).val();
				
                // attaches the attribute to the shortcode only if it's different from the default value
                //if ( value !== options[index] )
                shortcode += ' ' + index + '="' + value + '"';
            }
            for( var index in tweeter_check) {
                if(table.find('#mygallery-social-' + index).is(":checked")){
                    var val= index;
                } else {
                    var val= '';
                }
                shortcode += ' ' + index + '="' + val + '"';
            }
    
        }
        shortcode += ']';
			
        // inserts the shortcode into the active editor
        tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
        // closes fancybox

        // closes Dialoguebox
        close_dialogue(pluginObj.hashId);
    });
}

