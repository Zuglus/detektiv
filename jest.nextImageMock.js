/* eslint-disable @typescript-eslint/no-require-imports */
const React = require('react')

function NextImage(props) {
  const { src = '', alt = '', ...rest } = props
  return React.createElement('img', { src, alt, ...rest })
}

module.exports = NextImage
