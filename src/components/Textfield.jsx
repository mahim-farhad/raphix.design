import PropTypes from 'prop-types'

import classNames from 'classnames'

function Textfield({
  icon,
  type,
  name,
  placeholder,
  disabled
  classes,
  utilities,
  style
}) {
  const handleFocus = (e) => {
    e.target.parentElement.classList.add('focused');
  };

  const handleBlur = (e) => {
    e.target.parentElement.classList.remove('focused');
  };

  return (
    <div
      className='input-group'
    >
      {
        icon &&
        <span
          className='input-group__icon input-group__icon--prepend'
        >
          {icon}
        </span>
      }

      <input
        type={type}
        name={name}
        disabled={disabled}
        className='input-group__control'
        placeholder={placeholder}

        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

Textfield.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Textfield
