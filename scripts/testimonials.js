async function responseJsonTestimonials(){
    let response = await fetch('https://randomuser.me/api/');
    let context = await response.json();

    return context;
}

async function addTestimonial(numOfUser){
    let div = document.querySelector(".testimonials__comments");

    for(let i = 0; i < numOfUser; i++){
        let randomuser = await responseJsonTestimonials();
        div.insertAdjacentHTML("beforeend", `
            <div class="testimonial swiper-slide">
                <div class="testimonial__man"><img src="${randomuser.results[0].picture.large}"></div>
                <div class="testimonial__quotes"></div>
                <div class="testimonial__content">
                    <p><span>${randomuser.results[0].name.first}</span> /${randomuser.results[0].location.country}</p>
                    <p>${randomuser.results[0].email}</p>
                </div>
            </div>
            `);
    }
}

addTestimonial(6);