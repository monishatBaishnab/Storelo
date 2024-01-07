const ctgBtn = document.getElementById('ctg-btn');
const ctgBody = document.getElementById('ctg-body');
const ctgSubBtns = document.querySelectorAll('.ctg-item');
const ctgSubBodys = document.getElementsByClassName('ctg-submenu-body');

ctgBtn.addEventListener('mouseover', () => {
    ctgBody.style.visibility = 'visible';
    ctgBody.style.opacity = 1;
})

ctgBtn.addEventListener('mouseout', () => {
    ctgBody.style.visibility = 'hidden';
    ctgBody.style.opacity = 0;
})

ctgBody.addEventListener('mouseover', () => {
    ctgBody.style.visibility = 'visible';
    ctgBody.style.opacity = 1;
})

ctgBody.addEventListener('mouseout', () => {
    ctgBody.style.visibility = 'hidden';
    ctgBody.style.opacity = 0;
})


ctgSubBtns.forEach(ctgSubBtn => {
    ctgSubBtn.addEventListener('mouseover', () => {
        ctgSubBtn.childNodes[1].style.visibility = 'visible';
        ctgSubBtn.childNodes[1].style.opacity = 1;
    })
    ctgSubBtn.addEventListener('mouseout', () => {
        ctgSubBtn.childNodes[1].style.visibility = 'hidden';
        ctgSubBtn.childNodes[1].style.opacity = 0;
    })
});


