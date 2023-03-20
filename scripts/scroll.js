window.onscroll = () => {
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scroll = (windowScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scroll + "%";
}
