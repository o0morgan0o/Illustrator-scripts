var myDoc = activeDocument;
var myLayer = myDoc.activeLayer;

var g=prompt ("Remove element each ... in layer: " + myLayer.name + " (total: " + myLayer.pathItems.length + " )", 4);

// test if the prompt is an integer
if(g% 1 == 0){
    
    var newLayer = myDoc.layers.add();
    newLayer.name = myLayer.name + "-temp";

    var Obs = myLayer.pathItems;
    var iterMax = Obs.length;

var counter = 0;
    for (var j=0; j < iterMax; j++){
     // $.writeln("new iter", j, "  ", iterMax)
           if(j % g !==0){
                var myObject = Obs[j];
                myObject.duplicate(newLayer, ElementPlacement.PLACEATBEGINNING);
        }        
        
        //$.writeln("objs length", Objs.length, "  random: ", i);
    }

    // we save the name of the initial Layer
    var layerName= myLayer.name;
    myLayer.remove()
    newLayer.name = layerName;
    //app.redraw()
    
    }
/*
if(g==true){
       
    // creation of new Layer
    // TODO check if random layer exist
    var newLayer = myDoc.layers.add();
    newLayer.name = myLayer.name + "-random";

    var Obs = myLayer.pathItems;
    var iterMax = Obs.length;


    for (var j=0; j < iterMax; j++){
     // $.writeln("new iter", j, "  ", iterMax)
        var i = Math.floor(Math.random()*Obs.length)
        //$.writeln("objs length", Objs.length, "  random: ", i);
        var myObject = Obs[i];
        myObject.move(newLayer, ElementPlacement.PLACEATBEGINNING);
    }

    // we save the name of the initial Layer
    var layerName= myLayer.name;
    myLayer.remove()
    newLayer.name = layerName;
    //app.redraw()
}
*/