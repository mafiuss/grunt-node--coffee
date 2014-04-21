(function() {
  var Gato;

  exports.awesome = function() {
    return 'awesome!';
  };

  exports.Gato = Gato = (function() {
    function Gato() {}

    Gato.prototype.legs = 4;

    Gato.prototype.meow = function() {
      return 'meow!!';
    };

    return Gato;

  })();

}).call(this);
