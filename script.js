const rating = document.querySelectorAll(".rating");
const btn = document.querySelector("button");
const card = document.querySelector(".card");
const cardBack = document.querySelector(".card-back");

let userFeedback = "";

rating.forEach(item => {
    item.addEventListener("click", (e) => {
        removeActive();
        item.classList.add("active");
        userFeedback = item.innerText;
        console.log(e.target.innerText);
    });
});

function removeActive() {
    rating.forEach(item => {
        item.classList.remove("active");
    });
}

btn.addEventListener("click", (e) => {
    if (userFeedback !== "") {
        card.classList.add("flipped");
        cardBack.innerHTML = `
            <strong>Thank you!</strong>
            <h3>Feedback: ${userFeedback}</h3>
            <p class="feedback-msg">We'll use your feedback to improve our customer support.</p>
        `;
    } else {
        alert("Please give any Feedback");
    }
});
