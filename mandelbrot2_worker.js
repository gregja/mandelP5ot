

onmessage = function(e) {
    "use strict";
    
    console.log('Message received from main script');
    var params = {};

    params.x1 = Number(e.data[0]);
    params.y1 = Number(e.data[1]);
    params.x2 = Number(e.data[2]);
    params.y2 = Number(e.data[3]);
    params.width = Number(e.data[4]);
    params.height = Number(e.data[5]);
    params.maxIter = Number(e.data[6]);
    params.lim = Number(e.data[7]);
    params.colors = Number(e.data[8]); 

    console.log(params);
    
    var datas = [];

    var incX = (params.x2 - params.x1) / params.width;
    var incY = (params.y2 - params.y1) / params.height;

    var size_block_cur = 0;
    var size_block_max = 5;
    
    var borne = 4;
    
    var colonne = 0;
    while (colonne <= params.width) {
        var p0 = params.x1 + colonne * incX;
        var ligne = 0;
        while (ligne <= params.height ) {
            var q0 = params.y1 + ligne * incY;
            var x = 0;
            var y = 0;
            var iter = 1;
            var module = 0;
            while ((iter <= params.maxIter) && (module < borne)) {
                var aux = x;
                x = x*x - y*y + p0;
                y = 2 * y * aux + q0;
                module = x*x + y*y;
                iter += 1;
            }
            if (module > borne) {
                var color = params.colors - Math.floor(iter % params.colors);
                //var color = params.colors - Math.floor(iter / params.lim * params.colors);

                datas.push({x:colonne, y:ligne, i:iter, c:color});
                size_block_cur += 1;
            }
            ligne += 1;
        }
        if (size_block_cur >= size_block_max) {
            postMessage(datas);
            datas = [];
            size_block_cur = 0;
        }
        colonne += 1;
    }
    console.log('done!!');
        
    postMessage(['XXX']);
    
    //close();   // ne pas refermer le worker pour pouvoir relancer d'autres calculs
    
};
