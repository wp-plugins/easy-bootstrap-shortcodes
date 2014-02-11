<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */

function osc_theme_separator($params, $content = '') {
    extract(shortcode_atts(array(
        'class' => '',
        'style' =>'',
        'margin' => ''
    ), $params));
    $out = '';$margin1='';
    if ($margin != '') {
        $margin1 = ' style="margin:' . $margin . 'px 0"';
    }
    $con = '';
    if ($content != '') {
        $con = '<span>' . do_shortcode($content) . '</span>';
    }
    $out = '<div class=" osc-separator ' . $class .' '.$style. '" '.$margin1.EBS_CONTAINER_CLASS.'>' . $con . '</div>';
    return $out;
}

add_shortcode('separator', 'osc_theme_separator');

