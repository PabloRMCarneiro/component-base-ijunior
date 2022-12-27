import React, { useState, useEffect } from "react";

function useScreen() {
  const [screenWidth, getScreenWidth] = useState(window.innerWidth);
  const setScreenWidth = () => getScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
    return () => window.removeEventListener("resize", setScreenWidth);
  }, []);

  return screenWidth;
}

export default useScreen;