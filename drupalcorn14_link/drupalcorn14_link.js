(function ($) {

    Drupal.behaviors.drupalcorn14 = {
        attach: function(context, settings) {
            $(".drupalcorn14-link-countdown").each(function() {
                countdown(this);
            });
        }
    };

    function countdown(element) {
        if (element.innerHTML == "") {
            // Initialize.
            element.innerHTML = 5;
            setInterval(function() { countdown(element) }, 1000);
        } else if (element.innerHTML != "1") {
            // Decrement.
            element.innerHTML--;
        } else {
            // Redirect.
            window.location = element.dataset.redirectTarget;
        }
    }

})(jQuery);
