// This function copied from https://github.com/meteor/meteor/blob/devel/packages/url/url_common.js#L3
// but removed use of the `escape` function from global object since it
// is deprecated
var encodeString = function(str) {
  return encodeURIComponent(str).replace(/\*/g, "%2A");
};

// This function is copied and rewritten from here:
// https://github.com/meteor/meteor/blob/devel/packages/url/url_common.js#L8
//
// It handles object and array nesting properly
URL._encodeParams = function(params, prefix) {
  var str = [];
  for(var p in params) {
    if (params.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p, v = params[p];
      if(typeof v === "object") {
        str.push(this._encodeParams(v, k));
      } else {
        var encodedKey = encodeString(k).replace('%5B', '[').replace('%5D', ']');
        str.push(encodedKey + "=" + encodeString(v));
      }
    }
  }
  return str.join("&").replace(/%20/g, '+');
};
