<?php

/* * *********************************************************
 * BUTTONS
 * ********************************************************* */
$_ebsp_button=array();
if(!session_id()){
    @session_start();
}
$_SESSION['EBS_BUTTON']='';
function osc_theme_button($params, $content = null) {
    global $_ebsp_button;
    extract(shortcode_atts(array(
        'id' => count($_ebsp_button),
        'title' => 'osCitas',
        'link' => '',
        'type' => 'link',
        'style' => '',
        'bgcolor'=>'',
        'fgcolor'=>'',
        'hoverbgcolor'=>'',
        'hoverfgcolor'=>'',
        'align' => '',
        'target' => '',
        'icon' => '',
        'iconcolor'=>'',
        'icontype'=>'glyphicon',
        'class' => ''
    ), $params));
    $out = '';
    $_ebsp_button[$id]=array();
    if($icon!=''){
        if($iconcolor!=''){
            $iconcolor='style="color:'.$iconcolor.';"';
        }
        if($align=='right'){
            $value=$title.' <i class="'.$icontype.' '.$icon.'" '.$iconcolor.'></i>';
        } else{
            $value='<i class="'.$icontype.' '.$icon.'" '.$iconcolor.'></i> '.$title;
        }
    }else{
        $value=$title;
    }
    $target = ' target="'.($target != 'false' ? '_blank':'_self').'"';
    if(strpos($style,'custom')!==false){
        $css="
#ebs-button-{$id}{
background:{$bgcolor};
color:{$fgcolor};
}
#ebs-button-{$id}:hover{
background:{$hoverbgcolor};
color:{$hoverfgcolor};
}";

  $_SESSION['EBS_BUTTON'].=$css;
        str_replace('custom','',$style);
    }
    if ($type == 'link') {
        $out = '<a id="ebs-button-'.$id.'" class="btn ' . $style . ' ' . $class.EBS_CONTAINER_CLASS . '" href="' . $link . '" ' . ($target) . '>' . $value . '</a>';
    } elseif ($type == 'button') {
        $out = '<button id="ebs-button-'.$id.'" class="btn ' . $style . ' ' . $class.EBS_CONTAINER_CLASS . '" >' . $value . '</button>';
    }
    wp_enqueue_style('ebs-dstyle',EBS_PLUGIN_URL.'styles/ebs-dstyle.php');
    return $out;
}

add_shortcode('button', 'osc_theme_button');

