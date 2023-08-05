import PropTypes from 'prop-types'

import classNames from 'classnames'

function Flexbox({
  refProp,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <div
      ref={refProp}
      className={classNames(
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
    </div>
  )
}

Flexbox.defaultProps = {
  utilities: {
    d: { _: 'flex' },
    'align-items': { _: 'center' },
    'justify-content': { _: 'center' }
  }
}

Flexbox.propTypes = {
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.instanceOf(Element)
    })
  ]),
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export default Flexbox
