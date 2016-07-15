(function(){
var utils = {};
var View = utils.view = {};


RegExp.escape= function(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
var Template = View.template = {
    _clean: function(html){
        return html.replace(/\{\{\w+\}\}/g, "");
    },
    merge: function(template, data){
        var html = "";
        if(data instanceof Array){
            for(var i=0; i< data.length; i++){
                var d = data[i];
                html += Template._merge(template, d);
            }
        }else{
            html = Template._merge(template, data);
        }
        return Template._clean(html);
    },
    _merge: function(template, data){
        var html = template;
        for(var key in data){
            if(data.hasOwnProperty(key)){
                html = html.replace(new RegExp(RegExp.escape("{{"+key+"}}"), "g"), data[key]);
            }
        }
        return html;
    }
};
})();