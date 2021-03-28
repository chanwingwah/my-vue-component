// import store from '@/store'

export default {
  inserted(el, binding) {
    // 添加其他配置 字体大小、背景颜色、自定义角度等
    // 使用例子 <div  v-watermark="{text:'watermark',color: 'rgba(255, 0, 0, 0.1)'}"> </div>
    function addWaterMarker(
      parentNode,
      text,
      font,
      color = "rgba(0, 0, 0, 0.04)",
      opacity = "1",
      rotate = -30,
      zIndex = 1000,
      height = 300,
      width = 280
    ) {
      // 水印文字，父元素，字体，文字颜色
      // 创建背景图片
      var can = document.createElement("canvas");
      var coverDom = document.createElement("div");
      can.width = width;
      can.height = height;
      can.style.display = "none";
      var cans = can.getContext("2d");
      cans.rotate((rotate * Math.PI) / 180);
      cans.font = font || "30px Microsoft JhengHei";
      cans.fillStyle = color;
      coverDom.style.opacity = opacity;
      cans.textAlign = "left";
      cans.textBaseline = "Middle";
      cans.fillText(text, 0, can.height / 2);
      coverDom.style.backgroundImage =
        "url(" + can.toDataURL("image/png") + ")";
      coverDom.style.height = "100%";
      coverDom.style.width = "100%";
      coverDom.style.position = "absolute";
      coverDom.style.top = "0";
      coverDom.style.right = "0";
      coverDom.style.zIndex = zIndex;
      coverDom.style.pointerEvents = "none";
      coverDom.style.backgroundRepeat = "repeat";
      coverDom.style.userSelect = "none";
      parentNode.style.position = "relative";
      parentNode.appendChild(coverDom);
    }
    addWaterMarker(
      el,
      binding.value.text,
      binding.value.font,
      binding.value.color,
      binding.value.opacity,
      binding.value.rotate,
      binding.value.zIndex,
      binding.value.height,
      binding.value.width
    );
  }
};
