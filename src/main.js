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
    Transitionable.registerMethod( 'wall', WallTransition );

    var context = Engine.createContext();

    var surface1 = new Surface({
        content: 'surface1',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: '#67b2e8'
        }
    });

    var surface2 = new Surface({
        content: 'surface2',
        size: [ 150, 150 ],
        properties: {
            color: 'white',
            backgroundColor: 'red'
        }
    });

    var modifier = new Modifier({
        transform: Transform.translate( 150, 0, 0 )
    });

    var stateModifier1 = new StateModifier();

    var stateModifier2 = new StateModifier();

    surface1.on( 'click', function() {
        stateModifier1.setTransform(
            Transform.translate( 100, 300, 0 ),
            { duration : 1000, curve: Easing.inOutBack },
            function() {
                console.log( 'Animation complete' );
            }
        );
    });

    var wall = {
        method: 'wall',
        period: 500,
        dampingRatio: 0.1
    };

    surface2.on( 'click', function() {
        stateModifier2.setTransform(
            Transform.translate( 0, 400, 0 ), wall
        );
    });

    context.add( stateModifier1 ).add( surface1 );
    context.add( stateModifier2 ).add( modifier ).add( surface2 );
});
