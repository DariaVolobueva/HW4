document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let valueName = document.querySelector(".form__inputs input:first-child").value;
    let valueSurname = document.querySelector(".form__inputs input:last-child").value;
    let valueEmail = document.querySelector("form input[type='email']").value;

    localStorage.setItem("userName", valueName);
    localStorage.setItem("userSurname", valueSurname);
    localStorage.setItem("userEmail", valueEmail);

    if(localStorage.userName === "Daria"){
        congratulationAnimation();
    }
})

function congratulationAnimation(){
    let data = getCurrentData();
    let main = document.querySelector("main");
    main.hidden = true;
    main.insertAdjacentHTML( "afterend", `
    <div class="congratulationMessage">
        <h1>Congratulation!!!</h1>
        <h2>Today, ${data}, people with your name have 120% discount!!!</h2>
    </div>
    ` );

    setTimeout(() => {
        document.querySelector(".congratulationMessage").remove();
        main.hidden = false;
    }, 5000)
}

function getCurrentData(){
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let monthArray = ["January", "February", "March", "April", "May", "June", "Jule", "August", "September", "October", "December"];

    return `${monthArray[month]} ${day}`
}