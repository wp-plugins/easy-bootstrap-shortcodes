<?php

/* * *********************************************************
 * jQuery UI Tabs
 * ********************************************************* */
$_oscitas_tabs = array('current_id'=>0);

function osc_theme_tabs($params, $content = null) {
    global $_oscitas_tabs;
    if (!count($_oscitas_tabs)) {
        $_oscitas_tabs = array('current_id'=>0);
    }
    extract(shortcode_atts(array(
        'id' => count($_oscitas_tabs),
        'class' => '',
        'responsive'=>'',
        'pills' =>'',
        'position'=>'',
        'text'=>'',
        'icon'=>'',
        'icontype'=>'',
    ), $params));
    $_oscitas_tabs[$id] = array();
    $_oscitas_tabs['current_id'] = count($_oscitas_tabs)-1;
    do_shortcode($content);
    if($responsive=='true'){
        if($icon && $icontype){
            $text='<i class="'.$icontype.' '.$icon.'"></i> '.$text;
        }
        if($pills=='nav-pills'){
            $navclass='nav-pills';
        }
        else{
            $navclass='nav-tabs';
        }
        if($position=='tabs-below'){
            $scontent = '<div
    class="tab-content'.EBS_CONTAINER_CLASS.'" id="oscitas-tabcontent-' . $id . '">' . implode('', $_oscitas_tabs[$id]['panes']) . '</div><ul class="nav osc-res-nav '.$navclass.EBS_CONTAINER_CLASS.'" id="oscitas-tabs-' . $id . '">' . implode('', $_oscitas_tabs[$id]['tabs']) . '</ul>';
        } else{
            $scontent = '<ul class="nav osc-res-nav '.$navclass.EBS_CONTAINER_CLASS.'" id="oscitas-tabs-' . $id . '">' . implode('', $_oscitas_tabs[$id]['tabs']) . '</ul><div
    class="tab-content'.EBS_CONTAINER_CLASS.'" id="oscitas-tabcontent-' . $id . '">' . implode('', $_oscitas_tabs[$id]['panes']) . '</div>';
        }
        $scontent.= wp_enqueue_style('ebs-tabdrop',EBS_ASSET_URL.'styles/tabdrop.css');
        $scontent.= "<script type='text/javascript'>
            jQuery(document).ready(function(){
			jQuery('#oscitas-tabs-$id').tabdrop({
            'text': '".$text."'
            });
            });
            </script>";
    }
    else{
        $scontent = '<ul class="nav nav-tabs'.EBS_CONTAINER_CLASS.'" id="oscitas-tabs-' . $id . '">' . implode('', $_oscitas_tabs[$id]['tabs']) . '</ul><div
    class="tab-content'.EBS_CONTAINER_CLASS.'">' . implode('', $_oscitas_tabs[$id]['panes']) . '</div>';
    }
    if (trim($scontent) != "") {
        $output = '<div class="tabbable ' . $class . ' '.$position.EBS_CONTAINER_CLASS.'">' . $scontent;
        $output .= '</div>';
        $_oscitas_tabs['current_id'] = $_oscitas_tabs['current_id']-1;
        return $output;
    } else {
        return "";
    }
}
add_shortcode('tabs', 'osc_theme_tabs');

function osc_theme_tab($params, $content = null) {
    global $_oscitas_tabs;
    extract(shortcode_atts(array(
        'title' => 'title',
        'active' => '',
        'icon'=>'',
        'icontype'=>'',
        'iconcolor'=>''

    ), $params));
if(trim($iconcolor)!=''){
    $iconcolor= ' style="color:'.$iconcolor.'"';
}
    if($icon!=''){
        $icon='<i class="'.$icontype.' '.$icon.'"'.$iconcolor.'></i> ';
    }
    $index = $_oscitas_tabs['current_id'];
    if (!isset($_oscitas_tabs[$index]['tabs'])) {
        $_oscitas_tabs[$index]['tabs'] = array();
    }
    $pane_id = 'pane-' . $index . '-' .  count($_oscitas_tabs[$index]['tabs']);
    $_oscitas_tabs[$index]['tabs'][] = '<li class="' . $active .EBS_CONTAINER_CLASS. '"><a class="'.EBS_CONTAINER_CLASS.'" href="#' . $pane_id . '" data-toggle="tab"> ' .$icon. $title
        . '</a></li>';
    $_oscitas_tabs[$index]['panes'][] = '<div class="tab-pane ' . $active.EBS_CONTAINER_CLASS . '" id="'
        . $pane_id . '">'
        . do_shortcode(trim($content)) . '</div>';
}
add_shortcode('tab', 'osc_theme_tab');
