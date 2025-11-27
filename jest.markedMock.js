module.exports = {
  marked: jest.fn((content) => Promise.resolve(`<p>${content}</p>`)),
};
