<?php

/* * *********************************************************
 * HR Rule
 * ********************************************************* */

function theme_sectionheading($params, $content = 'Your Section Heading') {
    extract(shortcode_atts(array(
                'class'=>''
                    ), $params));
    $out = '';
    $out = '<h3 class="osc-heading '.$class.EBS_CONTAINER_CLASS.'"><span>'.do_shortcode($content).'</span></h3>';

    return $out;
}

add_shortcode('sectionheading', 'theme_sectionheading');

