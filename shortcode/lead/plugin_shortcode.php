<?php

function osc_theme_lead($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => '',
                'align'=>'center'
                    ), $params));
if($align==''){
    $align='center';
}
        $output = '<p class="lead ' . $class .EBS_CONTAINER_CLASS. ' osc-lead text-'.$align.'">'.  do_shortcode($content).'</p>';


        return $output;
    }

    add_shortcode('lead', 'osc_theme_lead');


    