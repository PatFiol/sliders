const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

const slides = document.querySelectorAll('.image-container img')
const dots = document.querySelectorAll('.dot-container button')

let slideIndex = 0

function slideShow(idx) {
	if (idx >= slides.length - 1) slideIndex = 0
	if (idx < 0) slideIndex = slides.length - 1

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slides[slideIndex].style.display = 'block'
}

nextBtn.addEventListener('click', function () {
	slideShow(++slideIndex)
})

prevBtn.addEventListener('click', function () {
	slideShow(--slideIndex)
})
