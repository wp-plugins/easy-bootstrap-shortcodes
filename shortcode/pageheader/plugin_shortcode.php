<?php

function osc_theme_pageheader($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => ''
                    ), $params));

        $output = '<div class="page-header ' . $class .EBS_CONTAINER_CLASS. ' osc-pageheader"><h1>'.  do_shortcode($content).'</h1></div>';


        return $output;
    }

    add_shortcode('pageheader', 'osc_theme_pageheader');


    