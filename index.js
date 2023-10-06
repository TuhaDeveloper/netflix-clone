
const selectItem = document.querySelectorAll(".middle-part>div");
// const firsttab = document.querySelector('first-action-show');
// const secondtab = document.querySelector('second-action-show');
// const thirdtab = document.querySelector('third-action-show');
// const alltabs = document.querySelectorAll('all');

const alltabs = document.querySelector(".action-show")
const first = alltabs.childNodes[1];
const second = alltabs.childNodes[3];
const third = alltabs.childNodes[5];
const removeItem = () => {
    first, second, third.classList.remove('current')
}

selectItem.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.className == 'icon2') {
            first.classList.remove('current')
            third.classList.remove('current')

            second.classList.add('current')
        } else if (item.className == 'icon3') {

            first.classList.remove('current')
            second.classList.remove('current')
            third.classList.add('current')
        } else {

            second.classList.remove('current')
            third.classList.remove('current')
            first.classList.add('current')

        }
    })
})




