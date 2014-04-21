(function() {
  var eve;

  eve = require('../lib/eve.js');

  exports['awesome'] = {
    setUp: function(done) {
      return done();
    },
    'no args': function(test) {
      test.expect(1);
      test.equal(eve.awesome(), 'awesome!', 'should be awesome.');
      return test.done();
    }
  };

  exports['cats'] = {
    setUp: function(done) {
      return done();
    },
    'no args': function(test) {
      var aCat;
      test.expect(1);
      aCat = new eve.Gato();
      test.equal(aCat.meow(), 'meow!!', 'should meow.');
      return test.done();
    }
  };

}).call(this);
