/**
 * getScroll,  兼容性获取元素 scrollLeft 和 scrollTop
 * @returns Object
 */

function getScroll() {
  return {
    left:
      window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft ||
      0,
    top:
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
  };
}

export { getScroll };
