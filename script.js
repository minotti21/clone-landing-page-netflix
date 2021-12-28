let questionList = document.querySelectorAll('.question')

questionList.forEach((question) => {
    question.addEventListener("click", () => {
        question.classList.toggle('active')
        question.nextElementSibling.classList.toggle('active')
    })
})
