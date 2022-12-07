let i = 0
let images = []
const time = 1500;

images = [
  'https://source.unsplash.com/SQLOsc0HGDI',
  'https://source.unsplash.com/AxXT3kFd_Gg',
  'https://source.unsplash.com/i6AuZ3tzi4U',
  'https://source.unsplash.com/_CaLXVUfD8g',
  'https://source.unsplash.com/G5cpmu-0OV8',
  'https://source.unsplash.com/e8ULlZbWu0I',
  'https://source.unsplash.com/MjnQ2LqzfJk',
  'https://source.unsplash.com/vHRFraV4U00',
  'https://source.unsplash.com/T0ro5uYHAiw',
]


function changeImg() {
  document.slide.src = images[i]
  if(i < images.length - 1){
    i++
  } else {
    i = 0
  }
  setTimeout("changeImg()", time)
}

window.onload = changeImg