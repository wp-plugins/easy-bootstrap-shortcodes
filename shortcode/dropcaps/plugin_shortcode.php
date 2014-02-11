<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_dropcaps($params, $content = '') {
    extract(shortcode_atts(array(
                'style' => 'dropcap-circle',
                'class' => '',
			    'bg'=>'#F9F9F9',
			    'color'=>'#000000'
                    ), $params));
    $out = '';
if($style=='dropcap-standard'){
	$background='';
} else{
	$background='background:'.$bg.';border-color:'.$bg.';';
}
    $out = '<span class="dropcap ' . $style . ' ' . $class.EBS_CONTAINER_CLASS . ' osc-dropcap" style="'.$background.'  color:'.$color.'">' . do_shortcode($content) . '</span>';
    return $out;
}

add_shortcode('dropcaps', 'osc_theme_dropcaps');

