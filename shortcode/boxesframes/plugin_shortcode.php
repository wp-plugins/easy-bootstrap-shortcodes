<?php

function frame($params, $content = null) {
    extract(shortcode_atts(array(
        'bgcolor' => 'none',
        'fgcolor' => '#000000',
        'shadow' => '',
        'class' => '',
    ), $params));

    $result = "";
    $bg='';$fg='';
    if($bgcolor!=''){
        $bg = 'background: ' . $bgcolor . '; border-color: ' . $bgcolor . ';';
    } if($fgcolor!=''){
        $fg = 'color: ' . $fgcolor . ';';
    }

    $result .= '<div class="osc-boxframe frame ' . $class .EBS_CONTAINER_CLASS. ' ' . $shadow . '" style="' . $bg .$fg . '">';

    $result .= do_shortcode($content);
    $result .= '</div>';

    return $result;
}

add_shortcode("frame", "frame");


