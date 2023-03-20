let copyright = document.querySelector(".copyright");
let date = new Date();

copyright.insertAdjacentHTML("beforeend", `
    <p>Copyright @ ${date.getFullYear()} <span>Brandoxide</span>.all right reserved.</p>
`);