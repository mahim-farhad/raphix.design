import {
  Link
} from 'react-router-dom'

import PropTypes from 'prop-types'

import classNames from 'classnames'

function NavLink({
  path,
  extended,
  iconOnly,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <Link
      to={path}
      className={classNames(
        'nav__link',
        { [`nav__link--extended`]: extended },
        { [`nav__link--icon-only`]: iconOnly },
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
    </Link>
  )
}

NavLink.propTypes = {
  path: PropTypes.url,
  extended: PropTypes.bool,
  iconOnly: PropTypes.bool,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default NavLink
