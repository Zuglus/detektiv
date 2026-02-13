const markedFn = jest.fn((content) => Promise.resolve(`<p>${content}</p>`));
markedFn.use = jest.fn();

module.exports = {
  marked: markedFn,
};
