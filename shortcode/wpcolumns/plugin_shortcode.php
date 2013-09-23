<?php

/* * *********************************************************
 * Row
 * ********************************************************* */

function osc_theme_row($params, $content = null) {
    extract(shortcode_atts(array(
                'class' => ''
                    ), $params));
    $result = '<div class="row ' . $class . '">';
    //echo '<textarea>'.$content.'</textarea>';
    $content = str_replace("]<br />", ']', $content);
    $content = str_replace("<br />\n[", '[', $content);
    $result .= do_shortcode($content);
    $result .= '</div>';

    return force_balance_tags($result);
}

add_shortcode('row', 'osc_theme_row');
/* * *********************************************************
 * TWO
 * ********************************************************* */

function osc_theme_column_shortcode($params, $content = null) {
    extract(shortcode_atts(array(
                'md' => '',
                'sm' => '',
                'xs' => '',
                'lg' => '',
                'mdoff' => '',
                'smoff' => '',
                'xsoff' => '',
                'lgoff' => '',
                'off'=>''
                    ), $params));
    $arr = array('md', 'xs', 'sm');
    $classes = array();
    foreach ($arr as $k => $aa) {
        if (${$aa} == 12 || ${$aa} == '') {
            $classes[] = '';
        } else {
            $classes[] = 'col-' . $aa . '-' . ${$aa};
        }
    }
    $arr2 = array('mdoff', 'smoff', 'xsoff', 'lgoff');
    foreach ($arr2 as $k => $aa) {
        $nn = str_replace('off', '', $aa);
        if (${$aa} == 0 || ${$aa} == '') {
            $classes[] = '';
        } else {
            $classes[] = 'col-' . $nn . '-offset-' . ${$aa};
        }
    }
    if ($off != '') {
        $classes[] = 'col-lg-offset-'.$off;
    }
    $result = '<div class="col-lg-' . $lg . ' ' . implode(' ', $classes) . '">';
    $result .= do_shortcode($content);
    $result .= '</div>';

    return force_balance_tags($result);
}

add_shortcode('column', 'osc_theme_column_shortcode');

