<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_highlights($params, $content = '') {
    extract(shortcode_atts(array(
                'class' => '',
			    'type'=>'existing',
			    'highlight'=>'yellow',
			    'bg'=>'#F9F9F9',
			    'color'=>'#000000'
                    ), $params));
    $out = '';


	if($type=='existing'){
		$out = '<span class="' . $class.EBS_CONTAINER_CLASS . ' osc-highlight osc-highlight-'.$highlight.'">' . do_shortcode($content) . '</span>';
	} elseif($type="custom"){
		$background='background:'.$bg.';';
		$out = '<span class="' . $class .EBS_CONTAINER_CLASS. ' osc-highlight" style="'.$background.'  color:'.$color.'">' . do_shortcode($content) . '</span>';
	}

    return $out;
}

add_shortcode('highlights', 'osc_theme_highlights');

