console.log("Connected");
let imgBox = document.querySelector('.imgBox');
let whiteBoxes = document.querySelectorAll('.whiteBox');
imgBox.addEventListener('dragstart', (e) => {
    console.log(e.target);
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' d-none'
    }, 0);
    console.log('dragstart event has been fired!');
})
imgBox.addEventListener('dragend', (e) => {
    e.target.className = 'imgBox';
    console.log('dragend event has been fired!');
})

for (const whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('dragover event has been fired!');
    })
    whiteBox.addEventListener('dragenter', (e) => {
        e.target.className += ' hover';
        console.log('dragenter event has been fired!');
    })
    whiteBox.addEventListener('dragleave', (e) => {
        e.target.className = 'whiteBox';
        console.log('dragleave event has been fired!');
    })
    whiteBox.addEventListener('drop', (e) => {
        e.target.append(imgBox);
        e.target.className = 'whiteBox';
        console.log('drop event has been fired!');
    })
}