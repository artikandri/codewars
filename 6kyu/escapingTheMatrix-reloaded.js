/* 

Help Neo to escape the Matrix by throwing himself out!

Neo is an Exception. Help him escape the Matrix!

This kata was inspired by @idubrov's Java-only kata Escaping The Matrix.
This one is intended to be a tiny bit more of a puzzle.
The Submit Tests are not as simple as the Example Test.

Note: This is JavaScript, not Java.

*/

class Neo extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

class Matrix {
  static enter() {
    throw new Neo("error");
  }
}
