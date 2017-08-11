"use strict";
( function(){

    $(function(){

        $('.main-slider').each(function () {
            new MainSlider($(this));
        });

        $('.site').each( function() {
            new Site( $(this) );
        } );

    });

    var MainSlider = function( obj ) {

        //private properties
        var _obj = obj,
            _window = $(window),
            _getStarted = _obj.find( '.main-slider__get-started' ),
            _windowHeight = _window.height(),
            _mainSlider = null,
            _slider = _obj.find( '.swiper-container'),
            _pagination = _obj.find( '.swiper-pagination' ),
            _canAnimate = true,
            _duration = +_obj.data('duration');

        //private methods
        var _addEvents = function() {

                _window.on({
                    'resize': function() {
                        _mainSlider.update();
                        _windowHeight = $( this ).height();
                    }
                });

                _getStarted.on({
                    'click': function() {
                        _obj.addClass( 'hidden' );

                        if ( _canAnimate ) {
                            _canAnimate = false;

                            setTimeout( function () {
                                _canAnimate = true;
                                _obj.removeClass( 'hidden' );
                            }, 1200 );

                            $( 'body, html' ).animate({ scrollTop: _windowHeight }, 1200);
                        }
                        return false;
                    }
                });

            },
            _addMainSlider = function() {

                _mainSlider = new Swiper( _slider, {
                    pagination: _pagination,
                    loop: true,
                    speed: 700,
                    autoplay: _duration,
                    paginationClickable: true,
                    effect: 'fade'
                });
            },
            _init = function() {
                _addEvents();
                _addMainSlider();
            };

        //public properties

        //public methods

        _init();
    };

    var Site = function(obj) {

        //private properties
        var _obj = obj,
            _footer = _obj.find( '.site__footer' ),
            _footerYear = _footer.find('.site__footer-year'),
            _window = $( window );

        //private methods
        var _addEvents = function() {

                _window.on({
                    'load': function() {

                    }
                });

            },
            _checkCurrentYear = function() {
                var curData = new Date();
                _footerYear.text(curData.getFullYear());
            },
            _init = function() {
                _addEvents();
                _checkCurrentYear();
            };

        //public properties

        //public methods

        _init();
    };

} )();