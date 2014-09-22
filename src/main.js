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

    var surface1 = new Surface({
        content: 'surface1 - only affected by modifier1',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: '#67b2e8'
        }
    });

    var surface2 = new Surface({
        content: 'surface2 - affected by modifier2 & modifier3',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: 'red'
        }
    });

    var modifier1 = new Modifier({
        transform: Transform.translate( 150, 0, 0 )
    });

    var modifier2 = new Modifier({
        align: [ 0.5, 0.5 ],
        origin: [ 0.5, 0.5 ]
    });

    var modifier3 = new Modifier({
        transform: Transform.scale( 1.5, 1.5, 1.5 )
    });

    context.add( modifier1 ).add( surface1 );
    context.add( modifier2 ).add( modifier3 ).add( surface2 );
});
