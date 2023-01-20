class Hover {
    constructor({ el, nav }) {
        this.el = document.querySelector(el);
        this.nav = document.querySelector(nav);
        this.el.onmouseover = () => this.move()
    }
    move() {
        let Xmin = this.el.clientWidth
        let Ymin = this.el.clientHeight
        let Xmax = window.innerWidth- this.el.clientWidth
        let Ymax = window.innerHeight - this.el.clientHeight - this.nav.clientHeight
        this.el.style = `margin-bottom:${this.rand(Xmin, Ymax)}px;
             margin-right:${this.rand(Ymin, Xmax)}px;
        transition:0.1s;`
    }
    rand(min, max) {
        return Math.floor(Math.random() * (max - min) + min + 1)
    }
}
new Hover({
    el: ".header__content",
    nav: ".header__nav",
})