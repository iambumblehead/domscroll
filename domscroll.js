// Filename: domscroll.js
// Timestamp: 2014.04.18-11:37:00 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var domscroll = (function (db, win) {

  db = (document || {}).body;
  win = window;

  return {
    getPageYOffset : function () {
      return typeof win.pageYOffset === 'number' ?     
        win.pageYOffset :
        db.scrollTop;
    },

    getPageXOffset : function () {
      return typeof win.pageXOffset === 'number' ?     
        win.pageXOffset :
        db.scrollLeft;
    },

    scrollTo : function (x, y) {
      x = typeof x === 'number' ? x : 0;
      y = typeof y === 'number' ? y : 0;

      if (typeof win.scrollTo === 'function') {
        win.scrollTo(x,y);
      } else {
        // explorer
        db.scrollLeft = x;
        db.scrollTop = y;
      }      
    }
  };

}());
