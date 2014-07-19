(function ($) {

    Drupal.behaviors.drupalcorn14Dateonly = {
        attach: function(context, settings) {
            for (var k in settings.drupalcorn14Dateonly) {
                $(settings.drupalcorn14Dateonly[k]).datepicker();
            }
        }
    }

}) (jQuery);
