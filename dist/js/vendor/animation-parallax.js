(function global($) {
    'use strict';

    // When user scroll on the page
    var scrollTop = 0;
    var wh = $(window).height();

    var offsetsAnimations = {
        baseline: {
            $item: $('.js-baseline'),
            top: 0,
            percentVisible: 0.4,
            triggered: false,
            name: 'baseline'
        }
    };

    // Calculate all offset and check if some animations should start
    var detectAnimationTriggers = function detectAnimationTriggers() {
        var animationsKeys = Object.keys(offsetsAnimations);
        animationsKeys.forEach(function triggerAnimations(item) {
            var anim = offsetsAnimations[item];
            // If animation is already triggered, skip the rest
            if (anim.triggered) {
                return;
            }
            if (scrollTop > anim.top) {
                animations[anim.name]();
                anim.triggered = true;
            }
        });
    };

    var calculateOffsetAnimations = function calculateOffsetAnimations() {
        var animationsKeys = Object.keys(offsetsAnimations);
        animationsKeys.forEach(function calculateOffset(item) {
            var anim = offsetsAnimations[item];

            if (offsetsAnimations.baseline.$item.length) {
                anim.top = offsetsAnimations.baseline.$item.offset().top
                    - (wh * (1 - anim.percentVisible));
            }
        });
    };

    var onScroll = function onScroll() {
        // update scrollTop value
        scrollTop = $(window).scrollTop();

        // Check if some animation should start
        detectAnimationTriggers();
    };

    var onResize = function onResize() {
        // Recalculate window height
        wh = $(window).height();

        // Calculate again all offset for the animations
        calculateOffsetAnimations();
        // Check if some animations should start
        detectAnimationTriggers();
    };

    /**
     * A generic "open" class toggler
     * If a data-target is present on the element, toggle the 'open' class on the target.
     * Otherwise, toggle it on the element itself
     */
    var openToggle = function openToggle() {
        $('.js-open-toggle').on('click', function bindOpenToggle() {
            if ($(this).data('target')) {
                $(this).closest('.' + $(this).data('target')).toggleClass('open');
            } else {
                $(this).toggleClass('open');
            }
        });
    };

    var animateWhenInView = function animateWhenInView() {
        $('.js-animate').one('inview', function bindInView() {
            $(this).addClass('in-view');
        });
    };

    $(document).ready(function documentReady() {
        // navigation mobile
        

        animations.setupHome();
        calculateOffsetAnimations();
        detectAnimationTriggers();
        openToggle();
        animateWhenInView();
    });

    $(window).on('scroll', onScroll);

    $(window).on('resize', onResize);
}(window.jQuery));
