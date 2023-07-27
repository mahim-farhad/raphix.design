import PropTypes from 'prop-types'

import classNames from 'classnames'

function Row({
  classes,
  utilities,
  style,
  children
}) {
  return (
    <div
      className={classNames(
        'row',
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

function Column({
  col,
  classes,
  utilities,
  style,
  children
}) {
  return (
    <div
      className={classNames(
        'col',
        col &&
        Object.entries(col).map(
          ([breakpoint, value]) =>
            breakpoint === '_'
              ? `col-${value}`
              : `col-${breakpoint}-${value}`
        ),
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

Row.propTypes = {
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

Column.propTypes = {
  col: PropTypes.objectOf(PropTypes.number).isRequired,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node
}

export {
  Row,
  Column
}
