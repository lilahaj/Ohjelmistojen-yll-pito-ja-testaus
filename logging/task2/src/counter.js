class Counter {
  constructor() {
    this._count = 0;
  }

  read() {
    return this._count;
  }

  increase() {
    this._count += 1;
    return this._count;
  }

  reset() {
    this._count = 0;
    return this._count;
  }
}

module.exports = Counter;
