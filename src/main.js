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

    var view = new View();

    surface1.on( 'click', function( e ) {
        console.log( 'Surface 1 clicked', e );
    });

    surface2.on( 'click', function( e ) {
        console.log( 'Surface 2 clicked', e );
    });

    context.on( 'resize', function() {
        console.log( 'Context resized' );
    });

    Engine.on( 'keyup', function( e ) {
        console.log( 'Keyup event', e );
    });

    view.add( surface1 );
    view.add( modifier ).add( surface2 );

    context.add( view );
});
