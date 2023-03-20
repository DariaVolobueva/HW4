const serviceButtons = document.querySelectorAll(".what-we-do__buttons button");
const funcArr = [allService, interiorService, architectureService, planningService];
let curr;

for(let i = 0; i < serviceButtons.length; i++){
    serviceButtons[i].addEventListener("click", ()=>{
        funcArr[i]();
    }, {once: false});
}

serviceButtons[0].click();

async function responseJson(from, to){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let context = await response.json();
    let finalResponceData = context.slice(from, to);

    return finalResponceData;
}

async function allService(){
    let interiorResponceData = await responseJson(0, 5);
    let architectureResponceData = await responseJson(5, 10);
    let planningResponceData = await responseJson(10, 15);
    let serviceArray = [
        interiorResponceData[interiorResponceData.length - 1], 
        architectureResponceData[architectureResponceData.length - 1], 
        planningResponceData[planningResponceData.length - 1]
    ];

    addService(serviceArray, "all");
}

async function interiorService(){
    addService(await responseJson(0, 5), "interior");
}

async function architectureService(){
    addService(await responseJson(5, 10), "architecture");
}

async function planningService(){
    addService(await responseJson(10, 15), "planning");
}

function addService(serviceArray, curService){
    if(curr != curService){
        curr = curService;
        let div = document.querySelector(".what-we-do__services");
        const service = document.querySelectorAll(".what-we-do__service");

        for(let i = 0; i < serviceButtons.length; i++){
            serviceButtons[i].style.color = "#FFFFFF";
            serviceButtons[i].style.backgroundColor = "#37806B";
        }

        const curButton = document.querySelector(`#${curService}`);
        curButton.style.color = "#37806B";
        curButton.style.backgroundColor = "#FFFFFF";
        curButton.style.border = "4px solid #37806B";
        
        for(let k = 0; k < service.length; k++){
            service[k].remove();
        }
    
        for(let key in serviceArray){
            let secondaryText = countSymbols(100, serviceArray[key].body);
            let primaryText = countSymbols(28, serviceArray[key].title);
        
            div.insertAdjacentHTML("beforeend", `
                <div class="what-we-do__service what-we-do_${curr}">
                        <img>
                    <div class="what-we-do__text">
                        <p>${primaryText}</p>
                        <p>${secondaryText}</p>
                    </div>
                </div>
            `);
        }
    }
}

function countSymbols(size, str){
    let endCharacter = "..."

    if(str.length + 3 > size){
        str = str.slice(0, size) + endCharacter;
    }

    return str;
}
