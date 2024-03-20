// 上一次使用的是否是深色模式
const lastIsDarkMode = !!localStorage.getItem("dark");
// 定时查找元素是否已生成，以避免闪屏
const timer = requestAnimationFrame(() => {
  const container = document.body;
  if (container) {
    cancelAnimationFrame(timer);
    if (lastIsDarkMode) {
      container.classList.add("dark");
    } else {
      container.classList.remove("dark");
    }
  }
});
