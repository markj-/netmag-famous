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
        content: 'surface1',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: '#67b2e8'
        }
    });

    var stateModifier = new StateModifier();

    surface1.on( 'click', function() {
        stateModifier.setTransform(
            Transform.translate( 100, 300, 0 ),
            { duration : 1000, curve: Easing.inOutBack },
            function() {
                console.log( 'Animation complete' );
            }
        );
    });

    context.add( stateModifier ).add( surface1 );
});
