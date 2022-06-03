const imagePath = (name, format = 'webp') => {
    return `url(./assets/img/gallery/${name}.${format})`
}
const imageNames = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
const delay = 6
const duration = imageNames.length * delay

const app = document.querySelector('.app')
const slider = document.createElement('div')
slider.classList= 'slider'


for(let i = 0; i < imageNames.length; i++) {
    const slide = document.createElement('div')
    slide.className = 'slide'
    slide.style.animationDuration = `${duration}s`
    slide.style.backgroundImage = imagePath(imageNames[i])
    i >= 1 && (slide.style.animationDelay = `${delay * i}s`)
    slider.appendChild(slide)
}
app.appendChild(slider)
