const images = [
    'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/983200/pexels-photo-983200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

let currentIndex = 0;

function showImage(index) {
    const slider = document.getElementById('slider');
    slider.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize the slider with the first image
showImage(currentIndex);