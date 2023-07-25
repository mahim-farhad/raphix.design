import {
  useState
} from 'react'

import PropTypes from 'prop-types'

import classNames from 'classnames'

import {
  Span
} from './Typography'
import Icon from './Icon'
import Button from './Button'

function Textfield({
  size,
  prependIcon,
  appendIcon,
  type,
  name,
  value,
  placeholder,
  required,
  disabled
}) {
  const [focused, setFocused] = useState(false)
  const [valid, setValid] = useState(false)
  const [inValid, setInValid] = useState(false)

  const [passwordVisibility, setPasswordVisibility] = useState(false)

  const handleFocus = () => {
    setFocused(true)

    valid && setValid(false)

    inValid && setInValid(false)
  }

  const handleBlur = (e) => {
    setFocused(false)

    e.target.value !== ''
      && setValid(true)

    e.target.value === ''
      && setInValid(true)
  }

  return (
    <div
      className={classNames(
        'input-group',
        {
          [`input-group--${size}`]: size,
          [`focused`]: focused,
          [`valid`]: valid,
          [`invalid`]: inValid
        }
      )}
    >
      {
        prependIcon &&
        <Span
          classes={[
            'input-group__icon',
            'input-group__icon--prepend',
          ]}
        >
          <Icon
            name={prependIcon}
          />
        </Span>
      }

      <input
        type={
          type === 'password'
            ? passwordVisibility ? 'text' : 'password'
            : type
        }
        name={name}
        value={value}
        placeholder={placeholder}
        className='input-group__control'
        required={required}
        disabled={disabled}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* {
        valid && !inValid &&
        <Span
          classes={[
            'input-group__icon',
            'input-group__icon--append',
          ]}
        >
          <Icon
            name='badge-check'
          />
        </Span>
      } */}

      {/* {
        !valid && inValid &&
        <Span
          classes={[
            'input-group__icon',
            'input-group__icon--append',
          ]}
        >
          <Icon
            name='info'
          />
        </Span>
      } */}

      {
        !valid && !inValid && appendIcon &&
        <Span
          classes={[
            'input-group__icon',
            'input-group__icon--append',
          ]}
        >
          <Icon
            name={appendIcon}
          />
        </Span>
      }

      {
        type === 'password' &&
        <Button
          onClick={() => {
            setPasswordVisibility(!passwordVisibility)
          }}
          variant='text'
          color='dark'
          iconOnly
        >
          {
            passwordVisibility
              ?
              <Icon
                name='eye'
                classes={[
                  'btn__icon'
                ]}
              />
              :
              <Icon
                name='eye-crossed'
                classes={[
                  'btn__icon'
                ]}
              />
          }
        </Button>
      }
    </div>
  )
}

Textfield.propTypes = {
  size: PropTypes.oneOf([
    'sm',
    'lg'
  ]),
  prependIcon: PropTypes.string,
  appendIcon: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Textfield
