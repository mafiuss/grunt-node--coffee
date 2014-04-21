eve = require('../lib/eve.js');

exports['awesome'] =
  setUp: (done) ->
    done()
  'no args': (test) ->
    test.expect(1);
    #tests here
    test.equal(eve.awesome(), 'awesome!', 'should be awesome.')
    test.done()

exports['cats'] =
  setUp: (done) ->
    #setup here
    done()

  'no args': (test) ->
    test.expect(1)
    #tests here
    aCat = new eve.Gato()
    test.equal(aCat.meow(), 'meow!!', 'should meow.')
    test.done()
