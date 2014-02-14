<?php

/* * *********************************************************
 * jQuery UI Accordion (toggles)
 * ********************************************************* */

$_oscitas_accordion = array();

function osc_theme_toggles($params, $content = null) {
    global $_oscitas_accordion, $_oscitas_accordion_counter;

    if (!count($_oscitas_accordion)) {
        $_oscitas_accordion = array('current_id'=>0);
    }

     extract(shortcode_atts(array(
                'id' => count($_oscitas_accordion),
                'class' => ''
                    ), $params));
    $_oscitas_accordion[$id] = array();
    $_oscitas_accordion['current_id'] = count($_oscitas_accordion)-1;
    $scontent = do_shortcode($content);
    $output = '';
    if (trim($scontent) != '' || count($_oscitas_accordion[$id]['details'])) {
        $scontent = isset($_oscitas_accordion[$id]['details']) && is_array($_oscitas_accordion[$id]['details']) ? implode('', $_oscitas_accordion[$id]['details']) : '';
        $output .= '<div class="panel-group ' . $class .EBS_CONTAINER_CLASS. '" id="oscitas-accordion-' . $id . '">' . $scontent;
        $output .= '</div>';
    }
    $_oscitas_accordion['current_id'] -= 1;
    return $output;
}

add_shortcode('toggles', 'osc_theme_toggles');

function osc_theme_toggle($params, $content = null) {
    global $_oscitas_accordion, $_oscitas_accordion_counter;
    extract(shortcode_atts(array(
                'title' => 'title',
        'icon'=>'',
        'icontype'=>'',
        'iconcolor'=>'',
        'ocicon'=>'',
        'active'=>''
                    ), $params));
    if(trim($iconcolor)!=''){
        $iconcolor= ' style="color:'.$iconcolor.'"';
    }
    $gicon='';$oicon='';
    if(trim($active)!=''){
$active='in';
    } else{
       $active='collapse';
    }
    if(trim($ocicon)!=''){
//$oicon='<i class="fa fa-chevron-down"></i>';
        $gicon='<i class="fa fa-chevron-down"></i>';
    } else{
        if($icon!=''){
            $gicon='<i class="'.$icontype.' '.$icon.'"'.$iconcolor.'></i> ';
        }
    }

    $con = do_shortcode($content);
    $index = $_oscitas_accordion['current_id'];
    //$index = $_oscitas_accordion_counter;
    $id = isset($_oscitas_accordion[$index]['details'])?'details-' . $index . '-' . count($_oscitas_accordion[$index]['details']):'details-' . $index . '-0';
    $const = get_defined_constants();
    $_oscitas_accordion[$index]['details'][] = <<<EOS
        <div class="panel panel-default{$const['EBS_CONTAINER_CLASS']}">
            <div class="panel-heading{$const['EBS_CONTAINER_CLASS']}">
              <h4 class="panel-title{$const['EBS_CONTAINER_CLASS']}">
                <a class="accordion-toggle{$const['EBS_CONTAINER_CLASS']}" data-toggle="collapse"
                data-parent="#oscitas-accordion-{$index}"
                href="#{$id}">
                {$gicon}{$title}{$oicon}
                </a>
              </h4>
            </div>
            <div id="{$id}" class="panel-collapse {$active}{$const['EBS_CONTAINER_CLASS']}">
              <div class="panel-body{$const['EBS_CONTAINER_CLASS']}">{$con}</div>
            </div>
        </div>
EOS;
}

add_shortcode('toggle', 'osc_theme_toggle');
