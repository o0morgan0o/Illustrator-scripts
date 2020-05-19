var myDoc = activeDocument;
var myLayer = myDoc.activeLayer;

var g=confirm ("Randomize will be apply to layer: " + myLayer.name);

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