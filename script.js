class Scroll {
    constructor(obj) {
        if (typeof obj.nav == "string") {
            this.nav = document.querySelector(obj.nav);
        } else if (obj.nav instanceof HTMLElement) {
            this.nav = obj.nav
        }
        this.top = obj.top
        this.unit = obj.unit == "px" ? "px" : "%"

        this.nav.style.position = "fixed"
        this.nav.style.position = `${this.scrollUnit()}px`
     
        window.addEventListener("scroll", () => this.scroll())
    }
    scroll() {
        let position = this.scrollUnit()
        if (window.scrollY < position) {
            this.nav.style.top = `${position - window.scrollY}px`
        } else {
            this.nav.style.top = "0px"
        }


    }
    scrollUnit() {
        if (this.unit == "px") {
            return this.top > 0 ? this.top : 0
        } else if (this.unit == "%") {
            return (window.innerHeight / 100) * this.top - this.nav.clientHeight
        }
    }
}
new Scroll({
    nav: ".header__nav",
    top: 100,
    unit: "%"
})