import PropTypes from 'prop-types'

import classNames from 'classnames'

function NavList({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <li
      className={classNames(
        'nav__list',
        classes,
        utilities &&
        Object.entries(utilities).map(
          ([utility, value]) =>
            value &&
            Object.entries(value).map(([breakpoint, values]) =>
              breakpoint === '_'
                ? `${utility}-${values}`
                : `${utility}-${breakpoint}-${values}`
            )
        )
      )}
      style={style}
    >
      {children}
    </li>
  )
}

NavList.propTypes = {
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default NavList
