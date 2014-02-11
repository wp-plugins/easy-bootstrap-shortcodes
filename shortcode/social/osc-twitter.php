<?php
/* * *********************************************************
 * TWITTER
 * ********************************************************* */

function theme_twitter($params, $content = null) {
    extract(shortcode_atts(array(
                'username' => '',
                'tweets' => '10',
                'width' => '600',
                'height' => '',
                'noheader' => '',
                'nofooter' => '',
                'variant' => '',
                'noborders' => '',
                'linkscolor' => '0',
                'bordercolor' => '',
        'class'=>''
                    ), $params));

    if ($username == "") {
        return "Username was not defined!";
    }


    return <<<HTML
 <div class="sc-twitter osc-twitter '.$class.'"><div class="wrap">
    <a class="twitter-timeline"  href="https://twitter.com/{$username}"  data-widget-id="373034458128986112"  data-screen-name="{$username}" data-show-replies="false" width="{$width}" data-tweet-limit="{$tweets}" data-theme="{$variant}" data-link-color="{$linkscolor}" data-border-color="{$bordercolor}" data-aria-polite="assertive" data-chrome="{$noheader} {$nofooter} {$noborders}">Tweets by @{$username}</a>
<script>

!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
var width=jQuery('.twitter-timeline').parent().width();
console.log(width);
jQuery('.twitter-timeline').width(width);
</script>
</div></div>

HTML;
}

add_shortcode('twitter', 'theme_twitter');
?>