/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myGlobals = {};

myGlobals.zooms = [];
myGlobals.zooms.push({name:"zoom 0", x1: -2, y1: -1.25, 
    x2: 0.55, y2: 1.25, lim: 350});
myGlobals.zooms.push({name:"zoom 1", x1: -0.75104, y1: 0.10511, 
    x2: -0.74080, y2: 0.11536, lim: 350});
myGlobals.zooms.push({name:"zoom 2", x1: -0.67166, y1: 0.49216, 
    x2: -0.44953, y2: 0.71429, lim: 350});
myGlobals.zooms.push({name:"zoom 3", x1: -0.19050, y1: 1.01480, 
    x2: -0.13824, y2: 1.06707, lim: 320});
myGlobals.zooms.push({name:"zoom 4", x1: -0.95000, y1: 0.23333, 
    x2: -0.88333, y2: 0.30000, lim: 300});
myGlobals.zooms.push({name:"zoom 5", x1: -0.74591, y1: 0.11196, 
    x2: -0.74448, y2: 0.11339, lim: 250});
myGlobals.zooms.push({name:"zoom 6", x1: -0.74745, y1: 0.10671, 
    x2: -0.74611, y2: 0.10779, lim: 350});
myGlobals.zooms.push({name:"zoom 7", x1: -0.745437, y1: 0.112881, 
    x2: -0.745119, y2: 0.113236, lim: 350});
myGlobals.zooms.push({name:"zoom 8", x1: -0.745447, y1: 0.11298, 
    x2: -0.74538, y2: 0.11304, lim: 350});
myGlobals.zooms.push({name:"zoom 9", x1: -0.7454336, y1: 0.1130037, 
    x2: -0.7454235, y2: 0.1130139, lim: 350});
myGlobals.zooms.push({name:"zoom 10", x1: -0.7454336, y1: 0.1130037, 
    x2: -0.7454235, y2: 0.1130139, lim: 700});
myGlobals.zooms.push({name:"zoom 11", x1: -0.7454240, y1: 0.1130037, 
    x2: -0.7454235, y2: 0.1130040, lim: 700});

myGlobals.params = {};
myGlobals.params.x1;
myGlobals.params.y1;
myGlobals.params.x2;
myGlobals.params.y2;
myGlobals.params.lim;
myGlobals.params.flag_restart = false;
myGlobals.params.color_mode = 'a'; // a=RGB ; b=HSL ; c=HSB
myGlobals.params.current_zoom = 0; 
myGlobals.params.flag_rezoom = false;
