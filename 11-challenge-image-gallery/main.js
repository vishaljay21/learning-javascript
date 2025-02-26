const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Declaring the alternative text for each image file */
const alt = {"pic1":"eye", "pic2":"abstract", "pic3":"flowers", "pic4":"painting", "pic5":"butterfly"};

/* Looping through images */
for(const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}.jpg`);
    newImage.setAttribute('alt', alt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", (event) => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    })
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } 
    
    else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

