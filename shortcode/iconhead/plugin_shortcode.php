<?php

function osc_theme_iconhead($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => '',
                'style' => '',
                'type' => 'h1',
        'color'=>''
                    ), $params));
    $out = '';
    if($color!=''){
        $color='style="color:'.$color.';"';
    }
    if ($style != '') {
        $style = ' <span class=" ' . $style . '" '.$color.'></span> ';
    }

    $out = '<' . $type . ' class="' . $class .EBS_CONTAINER_CLASS. '" >' . $style . do_shortcode($content) . '</' . $type . '>';

    return $out;
}

add_shortcode('iconheading', 'osc_theme_iconhead');