/*!
 * Custom functionality to add flickity-resize class to flickity slideshows.
 * This will allow for equal-height styling!
 */
Flickity.prototype._createResizeClass = function() {
    var element = this.element;
    setTimeout(function() {
        element.classList.add("flickity-resize");
    });
};

Flickity.createMethods.push("_createResizeClass");

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
    this.element.classList.remove("flickity-resize");
    resize.call(this);
    this.element.classList.add("flickity-resize");
};
