function setHeaders(sessionID, headersID, contentID) {

var allHeights = 0;

var fixedHeader = $(sessionID);

var paddingTpx = fixedHeader.css('padding-top');
var paddingT = Number(paddingTpx.slice(0, -2));
var paddingBpx = fixedHeader.css('padding-bottom');
var paddingB = Number(paddingBpx.slice(0, -2));
var realHeight = fixedHeader.height() + paddingT + paddingB;
allHeights += realHeight;

$(headersID).children().each(function () {
    var paddingTpx = $(this).css('padding-top');
    var paddingT = Number(paddingTpx.slice(0, -2));
    var paddingBpx = $(this).css('padding-bottom');
    var paddingB = Number(paddingBpx.slice(0, -2));
    var realHeight = $(this).height() + paddingT + paddingB;
    allHeights += realHeight;
});

const content = $(contentID);
content.css({
    top: allHeights
});

}