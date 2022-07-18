jQuery(document).ready(function($) {
    // Hamburger
    $(".hamburger").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("is-active");
        $("html, body").toggleClass("is-noscroll is-open-menu");
        $("#main-nav").toggleClass("is-open-menu");
    });

    // Handle main nav dropdown menu functionality
    $(".main-nav .menu-item-has-children > a").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        var $menuItemLink = $(this);
        var $thisMenu = $menuItemLink.parent();
        var isMenuOpen = $menuItemLink.parent().hasClass("open-submenu");
        // check if this submenu is open
        if (isMenuOpen) {
            // remove classes from the current open sub-menu <li>
            $menuItemLink.parent().removeClass("open-submenu current-open-menu");
            // find the closest open sub-menu <li> in the parent tree and add current class to it
            $menuItemLink.closest(".open-submenu").addClass("current-open-menu");
        } else {
            // remove classes from all open sub-menu <li>
            $(".main-nav .open-submenu").removeClass("open-submenu current-open-menu");
            // find this and all parent sub-menu <li>, add open class
            $menuItemLink.parents(".menu-item-has-children").addClass("open-submenu");
            // add current class to this sub-menu <li>
            $thisMenu.addClass("current-open-menu");
        }
    });

    // Remove Navigation when clicked outside
    //$(document).mouseup(function (event) {
    //	var container = $('.main-nav');
    //
    //	if (!container.is(event.target) && container.has(event.target).length === 0) {
    //		container.find('.menu-item').removeClass('open-submenu current-open-menu');
    //	}
    //});

    // Define Flickity options & initialise Flickity slideshows
    var flickity_defaults = {
        accessibility: false,
        autoPlay: true,
        cellAlign: "center",
        cellSelector: ".slideshow-slide",
        contain: true,
        draggable: ">1",
        imagesLoaded: true,
        pageDots: false,
        prevNextButtons: true
    };
    $(".slideshow").each(function(index) {
        var flickity_options = flickity_defaults; // get default flickity options
        var slider_options = $(this).data("flickity-options"); // get slider custom options
        // check if custom options are set and parse into default options
        if (typeof slider_options !== "undefined") {
            flickity_options = $.extend({}, flickity_defaults, slider_options);
        }
        // init flickity on this element
        var $carousel = $(this).flickity(flickity_options);
    });

    // Tabs
    $(document).on("click", ".tabs-link", function(e) {
        e.preventDefault();

        var $tabLink = $(this);
        var $tabs = $tabLink.closest(".tabs");
        var target = $tabLink.attr("href");
        // Handle tab class updates
        $tabs.find(".is-active").removeClass("is-active");
        $tabLink.addClass("is-active");
        $(target).addClass("is-active");
    });
});
