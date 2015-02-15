var require path = require('path');

/**
 * Takes a file path as a string and returns 
 * a new string with a number at the end, adding
 * to the existing number if it exists.
 *
 * @example
 *
 *    incrementFileBasename('foo/bar.jpg')
 *    // returns `foo/bar(1).jpg`
 *
 *    incrementFileBasename('foo/bar(1).jpg')
 *    // returns 'foo/bar(2).jpg'
 * 
 * @param  {string} filepath A path to the file to be incremented
 * @return {string}          A path with an incremented base filename
 */
function incrementFileBasename (filepath) {
  var dirname = path.dirname(filepath);
  var ext = path.extname(filepath);
  var base = path.basename(filepath, ext);
  
  var re = /\((\d+)\)$/;
  var i = re.exec(base);
  
  if (i && i[1]) {
    i = i[1];
    i = parseInt(i) + 1;
    base = base.replace(re, '(' + i + ')');
  } else {
    base += '(1)';
  }

  return path.join(dirname, base + ext);
}

module.exports = incrementFileBasename;