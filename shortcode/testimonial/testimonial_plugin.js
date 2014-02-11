var testimonial={
    title:"Testimonial Shortcode"
};
(function() {
    tinymce.create('tinymce.plugins.oscitasTestimonial', {
        init: function(ed, url) {
            ed.addButton('oscitastestimonial', {
                title: testimonial.title,
                image: url + '/icon.png',
                onclick: function() {
                    ed.selection.setContent('[testimonial author="Author Name" class="yourcustomclass" designation="Author Designation" ]Your testimonail[/testimonial]');	
                }
            });
        },
        createControl: function(n, cm) {
            return null;
        },
        getInfo: function() {
            plugininfo.longname=testimonial.title;
            return plugininfo;
        }
    });
    tinymce.PluginManager.add('oscitastestimonial', tinymce.plugins.oscitasTestimonial);
})();

