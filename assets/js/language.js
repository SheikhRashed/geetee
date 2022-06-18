(function ($) {

    /**
     * setLanguage
     * Sets the language to the specified language.
     *
     * @name setLanguage
     * @function
     * @param {String|Object} options The language value or an object containing:
     *
     *  - `attribute` (String): The atribute name (default: `data-lang`).
     *  - `lang` (String): The language value (default: `en`).
     */
    $.setLanguage = function (options) {

        // Merge options
        var settings = $.extend({
            attribute: "data-lang",
            lang: "en"
        }, options);

        // Hide all elements with this attirbute
        $("[" + settings.attribute + "]").hide();

        // Show the elements with this language
        $("[" + settings.attribute + "='" + settings.lang + "']").show();
    }
})($)
