// This javascript file contains the script required for creating
// a GeoGebra Applet. Code must be copy and pasted into the GeoGebra
// Applet editor.

// Input String box
for (var i = 0; i < 99; i++) {
    ggbApplet.deleteObject("V_{" + i + "}");
}


var str = ggbApplet.getValueString("t");
var n = Math.floor((1 + Math.sqrt(8 * str.length() + 1)) / 2);
var v = 0;
ggbApplet.evalCommand("n=" + n)


for (var k = 0; k < n; k++) {
    ggbApplet.evalCommand("V_{" + k + "}=(31;(" + k + "*(360/" + n + "))°)");
}
for (var m = 0; m < n; m++) {
    ggbApplet.setPointSize("V_{" + m + "}", 5)
}


for (var i = 0; i < n; i++) {

    for (var j = i + 1; j < n; j++) {
        var p = String(str.charAt(v))
        if (p == 1) {
            ggbApplet.evalCommand("v_{" + i + "," + j + "}=Vector[V_{" + i + "},V_{" + j + "}]");
        } else {
            ggbApplet.evalCommand("v_{" + j + "," + i + "}=Vector[V_{" + j + "},V_{" + i + "}]");
        }

        v++;
    }
}

\\ Input vertices box
ggbApplet.setVisible("text2", false)
for (var i = 0; i < 99; i++) {
    ggbApplet.deleteObject("V_{" + i + "}");
}

var n = ggbApplet.getValue("n");

for (var k = 0; k < n; k++) {
    ggbApplet.evalCommand("V_{" + k + "}=(31;(" + k + "*(360/" + n + "))°)");
}
for (var m = 0; m < n; m++) {
    ggbApplet.setPointSize("V_{" + m + "}", 5)
}

for (var q = 0; q < n; q++) {

    for (var w = 0; w < n; w++) {
        var t = Math.random()

        if (w == q) {
            break;
        } else if (ggbApplet.exists("v_{" + w + "," + q + "]")) {
            break;
        } else if (ggbApplet.exists("v_{" + q + "," + w + "]")) {
            break;
        } else if (t < .5) {
            ggbApplet.evalCommand("v_{" + q + "," + w + "}=Vector[V_{" + q + "},V_{" + w + "}]");
        } else {
            ggbApplet.evalCommand("v_{" + w + "," + q + "}=Vector[V_{" + w + "},V_{" + q + "}]");
        }
    }
}

// Show Kings button
// Find out how many vertices are in the tournament
var str = ggbApplet.getValueString("t");
var n = Math.floor ((1 + Math.sqrt (8 * str.length + 1) ) / 2) ;
// For each vertex i does it beat each other vertex j?
// if not does it beat a vertex that does beat j?
function isKingOf(i, j){
if(ggbApplet.exists("V_{"+i+"}") == false ){
return true ;}
if(ggbApplet.exists("V_{"+j+"}") == false ){
return true ;}
if(i == j){
return true ;}
if (ggbApplet.exists("v_{"+i+","+j+"}")){
return true ;}
for (var k =0; k < n; k ++) {
if (ggbApplet.exists("v_{"+i+","+k+"}") && ggbApplet.exists("v_{"+k+","+j+"}"))
return true ; }
return false ;
}
function isKing(i){
for (var j =0; j < n; j ++) {
if (isKingOf(i, j) == false)
return false ;
}
return true ;
}
// If vertex i is a king change it ’s color to red
for (var i =0; i < n; i ++) {
if (isKing (i)) {
ggbApplet.setColor("V_{"+i+"}" ,255 ,0 ,0) ;}
else {
ggbApplet.setColor("V_{"+i+"}" ,0 ,0 ,255) ;}
}

// Hide Kings button
// Find out how many vertices are in the tournament
var str = ggbApplet.getValueString ("t");
var n = Math.floor ((1 + Math.sqrt (8 * str.length + 1) ) / 2) ;
// Turn all vertices blue
for ( var i =0;i < n; i ++) {
ggbApplet.setColor ("V_{"+i+"}" ,0 ,0 ,255) ;
}