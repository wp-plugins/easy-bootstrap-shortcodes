<?php

function theme_shortcode_googlemap($atts, $content = null, $code) {
    extract(shortcode_atts(array(
                "width" => false,
                "height" => '400',
                "address" => '',
                "latitude" => 0,
                "longitude" => 0,
                "zoom" => 3,
                "text" => '',
                "popup" => 'false',
                "controls" => '[]',
                "scrollwheel" => 'true',
                "type" => 'ROADMAP',
                "marker" => 'true',
                'align' => false,
                'border' => '',
                'class' => ''
                    ), $atts));

$maxwidth='';$maxheight='';$norwidth='';$norheight='';
	$width=intval($width);
	$height=intval($height);
    if ($width && is_int($width) && $width>0) {
        $norwidth = 'width:' . $width . 'px;';
	    $maxwidth= 'max-width:' . $width . 'px;';
    } else {
        $norwidth = 'width:100%;';
	    $maxwidth = '';
    }
    if ($height && is_int($height) && $height>0) {
        $norheight = 'height:' . $height . 'px;';
	    $maxheight='max-height:' . $height . 'px;';
    } else {
        $norheight = 'height:100%;';
	    $maxheight = '';
    }

    if ($border != "") {
        $borderStyle = ' border';
    } else {
        $borderStyle = "";
    }

    $align = $align ? ' align' . $align : '';
    $id = rand(100, 1000);
    if ($latitude != 0 && $longitude != 0) {
        $ret_var = <<<HTML
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
<div class="osc-gmap sc-map{$borderStyle} {$class}" style="{$maxwidth}{$maxheight}"><div class="wrap">
<div id="google_map_{$id}" class="google_map{$align}" style="{$norwidth}{$norheight} max-width:100% ;"></div>
</div></div>
<script type="text/javascript">
function initialize() {
 geocoder = new google.maps.Geocoder();
  var mapOptions = {
    zoom: {$zoom},
    center: new google.maps.LatLng({$latitude}, {$longitude}),
    mapTypeId: google.maps.MapTypeId.{$type},
    scrollwheel:{$scrollwheel},
    {$controls}
  }
  var map = new google.maps.Map(document.getElementById('google_map_{$id}'),
                                mapOptions);
  var latlng = new google.maps.LatLng({$latitude}, {$longitude});
  geocoder.geocode({'latLng': latlng}, function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
     if (results[1]) {
        map.setZoom(11);
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title:results[1].formatted_address
        });
        var infowindow = new google.maps.InfoWindow({
            content:results[1].formatted_address,
            maxWidth: 200
        });
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });
    }else {
        alert('No results found');
      }
    } else {
          alert('Geocoder failed due to: ' + status);
    }
});

}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
    
HTML;
    } elseif ($address != '') {
        $ret_var = <<<HTML
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
<div class="osc-gmap sc-map{$borderStyle} {$class}" style="{$maxwidth}{$maxheight}"><div class="wrap">
<div id="google_map_{$id}" class="google_map{$align}" style="{$norwidth}{$norheight} max-width:100% ;"></div>
</div></div>

<script type="text/javascript">
function initialize() {
 geocoder = new google.maps.Geocoder();
 var mapOptions = {
    zoom: {$zoom},
    center: new google.maps.LatLng(-33, 151),
    mapTypeId: google.maps.MapTypeId.{$type},
    scrollwheel:{$scrollwheel},
    controls: {$controls},
  }
  var map = new google.maps.Map(document.getElementById('google_map_{$id}'),
                                mapOptions);
                                 var center;
  var address = '{$address}';
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        if(results[0]){
            map.setCenter(results[0].geometry.location);
            center = results[0].geometry.location;
               map.setZoom({$zoom});
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                  title:results[0].formatted_address
            });
   
            var infowindow = new google.maps.InfoWindow({
                content:results[0].formatted_address,
                maxWidth: 200
            });
            google.maps.event.addListener(marker, 'click', function() {
             infowindow.open(map,marker);

            });
        }else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
});

}

google.maps.event.addDomListener(window, 'load', initialize);
</script>
    
HTML;
    } else {
        $ret_var = <<<HTML

<div class="osc-gmap sc-map{$borderStyle} {$class}" style="{$maxwidth}{$maxheight}"><div class="wrap">
<div id="google_map_{$id}" class="google_map{$align}" style="{$norwidth}{$norheight} max-width:100% ;"></div>
</div></div>

<script type="text/javascript">
function initialize() {
 geocoder = new google.maps.Geocoder();
  var mapOptions = {
    zoom: {$zoom},
    center: new google.maps.LatLng(-33, 151),
    mapTypeId: google.maps.MapTypeId.{$type},
    scrollwheel:{$scrollwheel},
    controls: {$controls},
  }
  var map = new google.maps.Map(document.getElementById('google_map_{$id}'),
                                mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
    
HTML;
    }
    return $ret_var;
}

add_shortcode('googlemap', 'theme_shortcode_googlemap');