// This script removes the block with the QR code proposing an upgrade 
// to the Pro version of the plugin: http://smotret24.com/online.js.
// Bohdan Vovkotrub

(function () {
    'use strict';
    
    function removeQR() {
        document.querySelector('.myBot').remove();
    }

    if (!window.smotrolet_plugin) removeQR();
})()