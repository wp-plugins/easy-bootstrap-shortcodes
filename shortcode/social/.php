<?php
/* **********************************************************
 * FACEBOOK FANBOX
 * **********************************************************/
function theme_facebook_box( $params, $content = null) {
    extract( shortcode_atts( array(
    	'link' => '',
    	'width' => '600',
    	'height' => '600',
    	'variant' => 'light',
    	'border' => '',
    	'faces' => 'true',
    	'stream' => 'true',
    	'header' => 'true',
        'class'=>''
    ), $params ) );
	
	if($link == "") { return ""; }
	
	if($border == 'yes') {
		$borderStyle = ' border'; 
	} else {
		$borderStyle = ''; 
	}
	
	$result = '<div class="sc-fb-comments'.$borderStyle.' osc-fbbox '.$class.'"><div class="wrap">';
	$result .= '<iframe class="fb_iframe" src="http://www.facebook.com/plugins/likebox.php?href='.$link.'&amp;width='.$width.'&amp;colorscheme='.$variant.'&amp;show_faces='.$faces.'&amp;border_color&amp;stream='.$stream.'&amp;header='.$header.'&amp;height='.$height.'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'.$width.'px; height:'.$height.'px; max-width:100%;" allowTransparency="true" ></iframe>
            <script>
</script>';
	$result .= '</div></div>';
	
  	return $result;
}
add_shortcode( 'fb-box', 'theme_facebook_box' );