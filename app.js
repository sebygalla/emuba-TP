//Scroll Efect

const btn_scrolltop = document.getElementById('btn_scrolltop')
btn_scrolltop.addEventListener('click', function () {
    window.scrollTo(0, 0)
})

window.onscroll = function () {
    add_btn_scrolltop()
};


const add_btn_scrolltop = function () {
    if (window.scrollY < 2800) {
        btn_scrolltop.classList.remove('btn-scrolltop-on')
    } else {
        btn_scrolltop.classList.add('btn-scrolltop-on')
    }
};