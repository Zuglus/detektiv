const React = require('react')

const NextLink = React.forwardRef(function NextLink({ href, children, ...rest }, ref) {
  const to = typeof href === 'string' ? href : (href && href.pathname) || '#'
  return React.createElement('a', { href: to, ref, ...rest }, children)
})

module.exports = NextLink

