<?php
/* **********************************************************
 * FACEBOOK COMMENTS
 * **********************************************************/
function theme_facebook_comments( $params, $content = null) {
    extract( shortcode_atts( array(
    	'width' => '600',
    	'height' => '1000',
    	'variant' => 'light',
    	'posts' => '15',
    	'border' => '',
        'class'=>''
    ), $params ) );
	
	$currURI = explode("?", $_SERVER['REQUEST_URI']);
	$currUrl = (!empty($_SERVER['HTTPS'])) ? "https://".$_SERVER['SERVER_NAME'].$currURI[0] : "http://".$_SERVER['SERVER_NAME'].$currURI[0];
	
	if($border == 'yes') {
		$borderStyle = ' border'; 
	} else {
		$borderStyle = ''; 
	}
	
	$width = (int)$width - 2;
	
	$result = '<div class="sc-fb-comments'.$borderStyle.' osc-fbcomment '.$class.'"><div class="wrap">';
	$result .= '<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:comments href="'.$currUrl.'" num_posts="'.$posts.'" width="'.$width.'" colorscheme="'.$variant.'"></fb:comments>';
	$result .= '</div></div>';
	$result.='<style>
.fb_iframe_widget {width: 100% !important;}       
.fb_iframe_widget > span {max-width: 100% !important;}       
.fb_iframe_widget > span iframe[style]{max-width: 100% !important;}    
</style>';
  	return $result;
}
add_shortcode( 'fb-comments', 'theme_facebook_comments' );