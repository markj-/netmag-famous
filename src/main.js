define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');
    var View = require('famous/core/View');
    var Easing = require('famous/transitions/Easing');
    var Transitionable = require('famous/transitions/Transitionable');
    var WallTransition = require('famous/transitions/WallTransition');

    var context = Engine.createContext();

    var modifier = new Modifier({
        align: [ 0.5, 0.5 ],
        origin: [ 0.5, 0.5 ]
    });

    var surface = new Surface({
        content: 'My first surface',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: '#67b2e8'
        }
    });

    context.add( modifier ).add( surface );
});
