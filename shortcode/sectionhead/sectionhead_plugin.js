var sectionhead={
    title:"Section Heading Shortcode"
};
(function() {
    tinymce.create('tinymce.plugins.oscitasSectionhead', {
        init: function(ed, url) {
            ed.addButton('oscitassectionhead', {
                title: sectionhead.title,
                image: url + '/icon.png',
                onclick: function() {
                    var selected_content = tinyMCE.activeEditor.selection.getContent();
                    if(!selected_content)
                        var selected_content = 'Section Heading';
                    ed.selection.setContent('[sectionheading class="yourcustomclass"]'+selected_content+'[/sectionheading]');
                }
            });
        },
        createControl: function(n, cm) {
            return null;
        },
        getInfo: function() {
            plugininfo.longname=sectionhead.title;
            return plugininfo;
        }
    });
    tinymce.PluginManager.add('oscitassectionhead', tinymce.plugins.oscitasSectionhead);
})();



