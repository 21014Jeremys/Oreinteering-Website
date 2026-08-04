const header = document.getElementsByClassName("header")[0];
header.addEventListener("load", () => {
  const doc = header.contentDocument || header.contentWindow.document;
  const styleSheet = doc.getElementById("header");
  const content = document.getElementsByClassName("content")[0];
  function updateSize() {
    const viewHeight = window.innerHeight;
    const viewWidth = document.documentElement.clientWidth;
    const menu = doc.getElementById("menu");
    if (viewWidth - (viewHeight/10 * 3.5) < viewHeight/ 10 / 0.30) {
      styleSheet.href = "../styles/squished_header.css";
      header.style.height = "20vh";
      content.style.paddingTop = "22vh";
    } else {
      styleSheet.href = "../styles/header.css";
      header.style.height = "10vh";
      content.style.paddingTop = "12vh";
    }
    /*console.log("Container width: ", viewWidth, " Image width: ", (viewHeight/10 * 3.5), " Menu Width: ", (menu.getBoundingClientRect().width)," space: ", viewWidth - (viewHeight/10 * 3.5))
    
   console.log("ratio: ", viewHeight/ 10/ menu.getBoundingClientRect().width )*/
    requestAnimationFrame(updateSize);
  }
  
  requestAnimationFrame(updateSize);
});

