   
var selectColor = function(param) {
    console.log('sel color '+param);
};

var selectZoom = function(param) {
    console.log('sel zoom '+param);
};   
    
(function () {
    'use strict';

    var clearMenu = function() {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0, imax=dropdowns.length; i < imax; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    var menus = document.getElementsByClassName('dropdown');
    for (var mi=0, mx=menus.length; mi<mx; mi++) {
        menus[mi].addEventListener("touchstart", function(evt){
            evt.preventDefault();
            clearMenu();
            myGlobals.params.flag_rezoom = false;
            var target = this.getElementsByClassName('dropdown-content');
            if (target.length > 0) {
                target[0].classList.toggle("show");
            }
        }, true); 
        menus[mi].addEventListener("click", function(evt){
            evt.preventDefault();
            clearMenu();
            myGlobals.params.flag_rezoom = false;
            var target = this.getElementsByClassName('dropdown-content');
            if (target.length > 0) {
                target[0].classList.toggle("show");
            }
        }, true); 
    }

    // Close the dropdown if the user clicks outside of it
    var zone = document.getElementsByTagName('body');
    zone[0].addEventListener("touchstart", function(evt){
        if (!evt.target.matches('.dropbtn') ) {
            //evt.preventDefault();
            clearMenu();        
            myGlobals.params.flag_rezoom = true;
        }
    }, true); 
    zone[0].addEventListener("click", function(evt){
        if (!evt.target.matches('.dropbtn') ) {
            evt.preventDefault();
            clearMenu();        
            myGlobals.params.flag_rezoom = true;
        }
    }, true); 

    var data_actions = document.querySelectorAll('[data-action]');
    //console.log(data_actions);
    for (var mo=0, moda=data_actions.length; mo<moda; mo++) {
        data_actions[mo].addEventListener("touchstart", function(evt){
            //evt.preventDefault();
            clearMenu();
            myGlobals.params.flag_rezoom = false;
            if (this.getAttribute('data-action') == 'selectColor') {
                myGlobals.params.color_mode = this.getAttribute('data-value');
            }
            if (this.getAttribute('data-action') == 'selectZoom') {
                myGlobals.params.current_zoom = parseInt(this.getAttribute('data-value')) - 1;
                myGlobals.params.flag_restart = true;
                myGlobals.params.force_rezoom = true;
            }
            //console.log(this.getAttribute('data-action'), this.getAttribute('data-value'));
        }, true); 
        
        data_actions[mo].addEventListener("click", function(evt){
            evt.preventDefault();
            clearMenu();
            myGlobals.params.flag_rezoom = false;
            if (this.getAttribute('data-action') == 'selectColor') {
                myGlobals.params.color_mode = this.getAttribute('data-value');
            }
            if (this.getAttribute('data-action') == 'selectZoom') {
                myGlobals.params.current_zoom = parseInt(this.getAttribute('data-value')) - 1;
                myGlobals.params.flag_restart = true;
                myGlobals.params.force_rezoom = true;
            }
            //console.log(this.getAttribute('data-action'), this.getAttribute('data-value'));
        }, true);     
    }
    
    var data_save = document.querySelector('.savebtn') ;
    if (data_save) {
        data_save.addEventListener("touchstart", function(evt){
            evt.preventDefault();
            clearMenu();
            myGlobals.params.save_pict = true;
        }, true);     
        data_save.addEventListener("click", function(evt){
            evt.preventDefault();
            clearMenu();
            myGlobals.params.save_pict = true;
        }, true);     
    } else {
        console.log("save not found");
    }

}());