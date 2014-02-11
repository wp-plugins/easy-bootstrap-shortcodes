
var pageheader={
    title:"Page Header Shortcode"
};(function() {
    tinymce.create('tinymce.plugins.oscitasPageheader', {
        init : function(ed, url) {
            ed.addButton('oscitaspageheader', {
                title : 'Page Header Shortcodes',
                image : url+'/icon.png',
                onclick : function() {
                    var selected_content = tinyMCE.activeEditor.selection.getContent();
                    if(!selected_content)
                        var selected_content = 'Your Content';
                    ed.selection.setContent('[pageheader class="yourcustomclass"]'+selected_content+'[/pageheader]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            plugininfo.longname=pageheader.title;
            return plugininfo;
        }
    });
    tinymce.PluginManager.add('oscitaspageheader', tinymce.plugins.oscitasPageheader);
})();
