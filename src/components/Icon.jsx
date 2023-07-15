import PropTypes from 'prop-types'

import classNames from 'classnames'

function Icon({
  name,
  classes,
  utilities,
  style
}) {
  return (
    <>
      {
        (
          name === 'brand' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 600 85'
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
              <path fillRule='evenodd' clipRule='evenodd' d='M8.61323 9.93674C8.73088 19.3486 8.33088 36.6193 0.142578 55.8194C4.26135 57.9307 12.1986 61.1723 25.9764 62.1471C29.5628 62.4008 32.8486 64.3597 34.5627 67.5202L35.8397 69.8746C37.9128 73.6968 42.2289 75.7546 46.4825 74.8527C49.0321 74.3121 51.259 73.8102 53.3014 73.3499C62.2926 71.3234 67.7066 70.1032 81.3197 69.9372C73.7902 66.1725 65.6725 66.0548 44.3782 66.0548L42.3782 62.0548C46.1657 62.082 49.7702 61.9452 53.3847 61.808C65.376 61.3528 77.4765 60.8934 96.7316 66.4078C95.8329 65.8686 95.0239 65.3046 94.1943 64.7263C88.8052 60.9695 82.5473 56.6072 45.2121 54.5005C41.288 54.2791 37.8182 51.8222 36.3173 48.1898C30.8098 34.8606 22.2032 16.9345 8.61323 9.93674ZM18.7309 34.2899L15.6721 50.29L24.7217 52.4686C26.2794 52.8436 27.612 51.333 27.0059 49.8499C24.803 44.4603 21.3753 37.0098 18.7309 34.2899Z' fill='white' />
              <path fillRule='evenodd' clipRule='evenodd' d='M18.94 12.436C24.7668 18.6566 32.3016 26.7006 39.0038 44.041C40.4977 47.9062 44.0529 50.6594 48.1963 50.7169C49.6802 50.7375 51.1735 50.7495 52.6777 50.7616C64.3537 50.8556 76.6929 50.9549 90.4962 55.1136C88.2609 45.4664 67.7901 19.1133 18.1427 11.5838C18.4047 11.8645 18.6705 12.1483 18.94 12.436ZM42.7311 29.3487L46.8285 38.1504C48.2379 41.178 51.063 43.2976 54.3757 43.721C54.6497 43.756 54.9259 43.7912 55.2042 43.8267C66.3516 45.2473 80.7993 47.0885 90.4374 55.0547C81.4962 44.7017 68.3784 31.7016 42.7311 29.3487Z' fill='#05F676' />
            </svg>
          )
        ) || (
          name === 'facebook' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='512' height='512'
              className={classNames(
                'icon',
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
              <g>
                <path d='M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z' />
              </g>
            </svg>
          )
        ) || (
          name === 'whatsapp' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='512' height='512'
              className={classNames(
                'icon',
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
              <g>
                <path d='M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z' />
              </g>
            </svg>
          )
        ) || (
          name === 'twitter' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z' />
            </svg>
          )
        ) || (
          name === 'google' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <g>
                <path d='M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669   C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62   c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401   c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z' />
              </g>
            </svg>
          )
        ) || (
          name === 'linked-in' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <g>
                <path d='M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463' />
              </g>
            </svg>
          )
        ) || (
          name === 'discord' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M15.3922 11.4C15.3922 12.132 14.8585 12.732 14.1824 12.732C13.5182 12.732 12.9726 12.132 12.9726 11.4C12.9726 10.668 13.5063 10.068 14.1824 10.068C14.8585 10.068 15.3922 10.668 15.3922 11.4ZM9.85315 10.068C9.17707 10.068 8.64333 10.668 8.64333 11.4C8.64333 12.132 9.18893 12.732 9.85315 12.732C10.5292 12.732 11.063 12.132 11.063 11.4C11.0748 10.668 10.5292 10.068 9.85315 10.068ZM22.3784 2.472V24C19.3902 21.3284 20.3459 22.2128 16.8749 18.948L17.5035 21.168H4.05312C2.71282 21.168 1.62161 20.064 1.62161 18.696V2.472C1.62161 1.104 2.71282 0 4.05312 0H19.9469C21.2872 0 22.3784 1.104 22.3784 2.472ZM18.998 13.848C18.998 9.984 17.29 6.852 17.29 6.852C15.582 5.556 13.9571 5.592 13.9571 5.592L13.791 5.784C15.8074 6.408 16.7444 7.308 16.7444 7.308C13.9269 5.7457 10.6173 5.74542 7.88422 6.96C7.44536 7.164 7.18442 7.308 7.18442 7.308C7.18442 7.308 8.16889 6.36 10.3039 5.736L10.1853 5.592C10.1853 5.592 8.5603 5.556 6.85231 6.852C6.85231 6.852 5.14433 9.984 5.14433 13.848C5.14433 13.848 6.14065 15.588 8.76194 15.672C8.76194 15.672 9.20079 15.132 9.55662 14.676C8.05028 14.22 7.48095 13.26 7.48095 13.26C7.65543 13.3836 7.94316 13.5437 7.96725 13.56C9.96926 14.6943 12.813 15.0659 15.3685 13.98C15.7836 13.824 16.2462 13.596 16.7325 13.272C16.7325 13.272 16.1395 14.256 14.5857 14.7C14.9415 15.156 15.3685 15.672 15.3685 15.672C17.9898 15.588 18.998 13.848 18.998 13.848V13.848Z'></path>
            </svg>
          )
        ) || (
          name === 'twitch' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M2.24527 0L0.648651 4.11964V20.9571H6.32433V24H9.51756L12.5304 20.9571H17.1452L23.3514 14.6893V0H2.24527ZM21.2243 13.6125L17.6757 17.1964H12L8.98712 20.2393V17.1964H4.19727V2.14821H21.2243V13.6125V13.6125ZM17.6757 6.26786V12.5304H15.5486V6.26786H17.6757ZM12 6.26786V12.5304H9.87295V6.26786H12Z'></path>
            </svg>
          )
        ) || (
          name === 'youtube' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M23.4985 6.29213C23.2225 5.26881 22.4092 4.46288 21.3766 4.18937C19.505 3.69238 12 3.69238 12 3.69238C12 3.69238 4.49503 3.69238 2.62336 4.18937C1.59077 4.46292 0.777523 5.26881 0.501503 6.29213C0 8.14695 0 12.0169 0 12.0169C0 12.0169 0 15.8868 0.501503 17.7416C0.777523 18.7649 1.59077 19.5373 2.62336 19.8108C4.49503 20.3078 12 20.3078 12 20.3078C12 20.3078 19.505 20.3078 21.3766 19.8108C22.4092 19.5373 23.2225 18.7649 23.4985 17.7416C24 15.8868 24 12.0169 24 12.0169C24 12.0169 24 8.14695 23.4985 6.29213V6.29213ZM9.54544 15.5305V8.50327L15.8181 12.017L9.54544 15.5305V15.5305Z'></path>
            </svg>
          )
        ) || (
          name === 'search' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
            </svg>
          )
        ) || (
          name === 'cart' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" />
              <circle cx="7" cy="22" r="2" />
              <circle cx="17" cy="22" r="2" />
            </svg>
          )
        ) || (
          name === 'user' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-4,21.164v-2.164c0-.552.449-1,1-1h6c.551,0,1,.448,1,1v2.164c-1.226.537-2.578.836-4,.836s-2.774-.299-4-.836Zm10-1.169v-.995c0-1.654-1.346-3-3-3h-6c-1.654,0-3,1.346-3,3v.995c-2.427-1.826-4-4.73-4-7.995C2,6.486,6.486,2,12,2s10,4.486,10,10c0,3.264-1.573,6.169-4,7.995Zm-6-13.995c-2.206,0-4,1.794-4,4s1.794,4,4,4,4-1.794,4-4-1.794-4-4-4Zm0,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
            </svg>
          )
        ) || (
          name === 'arrow-long-right' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M23.124,9.879,18.538,5.293,17.124,6.707l4.262,4.263L0,11l0,2,21.446-.03-4.323,4.323,1.414,1.414,4.587-4.586A3.007,3.007,0,0,0,23.124,9.879Z' />
            </svg>
          )
        ) || (
          name === 'arrow-long-up' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M18.073,4.769,14.154.85a3.072,3.072,0,0,0-4.242,0L5.992,4.769,7.406,6.183l3.633-3.632L11.065,24l2,0L13.039,2.562l3.62,3.621Z' />
            </svg>
          )
        ) || (
          name === 'location-pin' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <g>
                <path d='M255.104,512.171l-14.871-12.747C219.732,482.258,40.725,327.661,40.725,214.577c0-118.398,95.981-214.379,214.379-214.379   s214.379,95.981,214.379,214.379c0,113.085-179.007,267.682-199.423,284.932L255.104,512.171z M255.104,46.553   c-92.753,0.105-167.918,75.27-168.023,168.023c0,71.042,110.132,184.53,168.023,236.473   c57.892-51.964,168.023-165.517,168.023-236.473C423.022,121.823,347.858,46.659,255.104,46.553z' />
                <path d='M255.104,299.555c-46.932,0-84.978-38.046-84.978-84.978s38.046-84.978,84.978-84.978s84.978,38.046,84.978,84.978   S302.037,299.555,255.104,299.555z M255.104,172.087c-23.466,0-42.489,19.023-42.489,42.489s19.023,42.489,42.489,42.489   s42.489-19.023,42.489-42.489S278.571,172.087,255.104,172.087z' />
              </g>
            </svg>
          )
        ) || (
          name === 'at' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M12,0a12,12,0,1,0,7.092,21.681l-1.184-1.612A10,10,0,1,1,22,12v2a2,2,0,0,1-4,0V12a6.021,6.021,0,1,0-1.48,3.933A3.986,3.986,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z' />
            </svg>
          )
        ) || (
          name === 'phone-call' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M14.2,16.261A12.133,12.133,0,0,1,7.747,9.793l3.4-3.406L4.887.122,1.716,3.292A5.9,5.9,0,0,0,0,7.5C0,14.748,9.252,24,16.5,24a5.889,5.889,0,0,0,4.207-1.716l3.171-3.171-6.265-6.265Zm5.092,4.609A3.9,3.9,0,0,1,16.5,22C10.267,22,2,13.733,2,7.5A3.907,3.907,0,0,1,3.13,4.707L4.887,2.95,8.324,6.387,5.389,9.322l.245.614a14.372,14.372,0,0,0,8.447,8.436l.606.231,2.926-2.927,3.437,3.437ZM14,2V0A10.011,10.011,0,0,1,24,10H22A8.009,8.009,0,0,0,14,2Zm0,4V4a6.006,6.006,0,0,1,6,6H18A4,4,0,0,0,14,6Z' />
            </svg>
          )
        ) || (
          name === 'star' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon icon--sm',
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
              <path d='M19.467,23.316,12,17.828,4.533,23.316,7.4,14.453-.063,9H9.151L12,.122,14.849,9h9.213L16.6,14.453Z' />
            </svg>
          )
        ) || (
          name === 'bookmark' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z' fill='#000'></path>
            </svg>
          )
        ) || (
          name === 'menu-dot-vertical' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z' fill='currentColor'></path>
            </svg>
          )
        ) || (
          name === 'heart' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z' />
            </svg>
          )
        ) || (
          name === 'sun' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className={classNames(
                'icon',
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
              <path d='M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm1-13V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z' />
            </svg>
          )
        )
      }
    </>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  classes: PropTypes.array,
  utilities: PropTypes.object,
  style: PropTypes.object
}

export default Icon
