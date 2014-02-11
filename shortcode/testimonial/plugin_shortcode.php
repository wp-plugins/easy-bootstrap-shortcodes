<?php

/* * *********************************************************
 * HR Rule
 * ********************************************************* */

function theme_testimonial($params, $content = 'Your Testimonail') {
    extract(shortcode_atts(array(
                'author' => '',
                'designation' => '',
        'class'=>''
                    ), $params));
    $out = '';
    $out = '<div class="osc-def_testimonail '.$class.'" ><p>' . $content . '</p>';
    $out .='<span class="osc_def_testimonail_author">' . $author . '</span>';
    $out .='<span class="osc_def_testimonail_author_desig">' . $designation . '</span>';
    $out .='</div>';
    return $out;
}

add_shortcode('testimonial', 'theme_testimonial');

