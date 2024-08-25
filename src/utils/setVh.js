const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

const initVh = () => {
  setVh();
  window.addEventListener("resize", setVh);

  return () => {
    window.removeEventListener("resize", setVh);
  };
};

export { initVh };
