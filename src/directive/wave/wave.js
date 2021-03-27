import "./wave.css";
import { getScroll } from "../../utils.js";
let ripple, size, rippleX, rippleY;

function addWave(el, backgroundColor = "rgba(0, 0, 0, 0.15)") {
  el.style.position = "relative";
  el.style.overflow = "hidden";
  el.addEventListener("mousedown", e => {
    if (!ripple) {
      ripple = document.createElement("span");
    }
    ripple.className = "my-directive-ripple";
    el.appendChild(ripple);
    let eWidth = el.offsetWidth;
    let eHeight = el.offsetHeight;
    size = Math.max(eWidth, eHeight);
    let rect = el.getBoundingClientRect();
    var scroll = getScroll();
    rippleY = parseInt(e.pageY - rect.top - size / 2 - scroll.top);
    rippleX = parseInt(e.pageX - rect.left - size / 2 - scroll.left);
    ripple.style.backgroundColor = backgroundColor;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.top = `${rippleY}px`;
    ripple.style.left = `${rippleX}px`;
    setTimeout(() => {
      ripple.className = "my-directive-ripple animated";
    });
  });
}
export default {
  inserted(el, binding) {
    addWave(el, binding.value?.backgroundColor);
  }
};
