window.onload = ()=> {
    document.querySelector("main").hidden = true;

    setTimeout(() => {
        document.getElementById("preloader").remove();
        document.querySelector("main").hidden = false;
    }, "5000");
  }