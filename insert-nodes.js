$.fn.insertNodes = function (nodesObject) {
    var nodes = nodesObject || {}, elementsArray = [];
    
    for (n in nodes){
        var $elem = $('<' + nodes[n].element + '/>', ( nodes[n].attr || {} ));

        if ( nodes[n].html ) {
            $elem.insertNodes(nodes[n].html);
        }

        elementsArray.push($elem);
    }
    
    return this.each(function () {
        $(this).append(elementsArray);
    });
}
