Tinytest.add "deep-extend", (test) ->
  test.equal deepExtend({one: 1},{two: 2}),
    one: 1
    two: 2
  test.equal deepExtend({one: 1},{one: 2}),
    one: 2
  test.equal deepExtend({},{two: 2}),
    two: 2
  test.equal deepExtend({one: 1},{}),
    one: 1
  test.equal deepExtend({one: 1},null),
    one: 1
  test.equal deepExtend({one: 1},{two: 2},{three: 3}),
    one: 1
    two: 2
    three: 3
  test.equal deepExtend({one: {two: {three: 3}}},{one: {four: 4}}),
    one:
      two:
        three: 3
      four: 4
