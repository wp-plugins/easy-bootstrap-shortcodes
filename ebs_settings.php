<div class="ebs_page_settings">
    <h1>EBS Settings</h1><form name="ebs_setting" id="ebs_setting" method="post" action="">
        <div class="ebs_details">
            <label class="ebs_setting_label">Include Bootstrap JS FIle</label>
            <p>
                <input type="radio" name="b_js" id="b_js_plugin" class="check_cdn" value="plugin" <?php echo ($js == 'plugin') ? 'checked=checked' : '' ?>>
                <label for="b_js_plugin">Include from Plugin</label>
                <input type="radio" name="b_js" id="b_js_theme" class="check_cdn" value="theme" <?php echo ($js == 'theme') ? 'checked=checked' : '' ?>><label for="b_js_theme">Include from Theme</label>
                <input type="radio" name="b_js" class="check_cdn" id="b_js_cdn" <?php echo ($js == 'cdn') ? 'checked=checked' : '' ?> value="cdn"><label for="b_js_cdn">Include from CDN</label>
        </div>
        <div class="ebs_details show_cdn" ><label class="ebs_setting_label">CDN Path</label><input type="text" name="cdn_path" id="cdn_path" value="<?php echo $cdn; ?>">
            </p>
        </div>
        <div class="ebs_details">

            <label class="ebs_setting_label">Include Bootstrap CSS FIle</label>
            <p><input type="radio" name="b_css" id="b_css_plugin" value="plugin" <?php echo ($css == 'plugin') ? 'checked=checked' : '' ?>>
                <label for="b_css_plugin" >Include from Plugin</label>
                <input type="radio" name="b_css" id="b_css_theme" value="theme" <?php echo ($css == 'theme') ? 'checked=checked' : '' ?>><label for="b_css_theme">Include from Theme</label>
            </p>
        </div>
        <div class="ebs_btn"><input type="submit" name="ebs_submit" value="Update Settings"></div>

    </form>
</div>
<script type="text/javascript">
    function show_cdn(){
        if(jQuery('#b_js_cdn').prop('checked')){
            jQuery('.show_cdn').show();
        } else{
            jQuery('.show_cdn').hide();
        }
    }
    jQuery(document).ready(function(){
        show_cdn();
        jQuery('.check_cdn').click(function(){
            show_cdn();
        })
    })
                                
</script>