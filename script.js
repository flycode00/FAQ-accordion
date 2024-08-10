
const cardItems = document.querySelectorAll('.card-item');

cardItems.forEach(cardItem => {
    cardItem.addEventListener('click', () => {
        document.querySelectorAll('.card-answer.show').forEach(answer => {
            if (answer !== cardItem.querySelector('.card-answer')) {
                answer.classList.remove('show');
                answer.previousElementSibling.querySelector('.icon-question').classList.remove('changeIcon');
            }
        });

        const answer = cardItem.querySelector('.card-answer');
        answer.classList.toggle('show');

        const icon = cardItem.querySelector('.card-question .icon-question');
        icon.classList.toggle('changeIcon');
    });
});


for (const cardItem of cardItems) {
    cardItem.addEventListener("click",function(){

        for (const answer of document.querySelectorAll(".card-answer.show")) {
            
        }

    });
}