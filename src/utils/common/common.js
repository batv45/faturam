import dayjs from 'dayjs'

/**
 * @desc  Format time
 * @param {(Object|string|number)} time
 * @param {string} format
 * @returns {string | null}
 */
export function formatDateTime(time = undefined, format = 'DD-MM-YYYY HH:mm:ss') {
  return dayjs(time).format(format)
}

export function formatDate(date = undefined, format = 'DD-MM-YYYY') {
  return formatDateTime(date, format)
}

/**
 * @desc  function throttling
 * @param {Function} fn
 * @param {Number} wait
 * @returns {Function}
 */
export function throttle(fn, wait) {
  var context, args
  var previous = 0

  return function () {
    var now = +new Date()
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

/**
 * @desc  function anti-shake
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(method, wait, immediate) {
  let timeout
  return function (...args) {
    let context = this
    if (timeout) {
      clearTimeout(timeout)
    }
    // Immediate execution requires two conditions, one is that immediate is true, and the other is that timeout is not assigned a value or is set to null.
    if (immediate) {
      /**
       * If the timer does not exist, execute it immediately and set a timer. After wait milliseconds, the timer is set to null.
       * This ensures that wait will not be triggered again within milliseconds after immediate execution.
       */
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) {
        method.apply(context, args)
      }
    } else {
      // If immediate is false, the function wait will be executed after milliseconds.
      timeout = setTimeout(() => {
        /**
         * args is an array-like object, so use fn.apply
         * It can also be written as method.call(context, ...args)
         */
        method.apply(context, args)
      }, wait)
    }
  }
}

/**
 *
 * @param {HTMLElement} el
 * @param {Function} cb
 * @return {ResizeObserver}
 */
export function useResize(el, cb) {
  const observer = new ResizeObserver((entries) => {
    cb(entries[0].contentRect)
  })
  observer.observe(el)
  return observer
}
