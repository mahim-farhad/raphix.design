import PropTypes from 'prop-types'

import classNames from 'classnames'

const Nav = ({
  vertical,
  classes,
  utilities,
  style,
  children
}) => {
  return (
    <nav
      className={classNames(
        'nav',
        { [`nav--vertical`]: vertical },
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
        ),
      )}
      style={style}
    >
      {children}
    </nav>
  );
};

Nav.propTypes = {
  vertical: PropTypes.bool,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Nav
