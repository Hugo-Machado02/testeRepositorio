class MenuHamburguer{
  constructor(hamburguer, menuList, menuLinks) {
    this.hamburguer = document.querySelector(hamburguer);
    this.menuList = document.querySelector(menuList);
    this.menuLinks = document.querySelectorAll(menuLinks);
    this.activeClass = "deslizar";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.menuLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.menuList.classList.toggle(this.activeClass);
    this.hamburguer.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.hamburguer.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.hamburguer) {
      this.addClickEvent();
    }
    return this;
  }
}

const menuHamburguer = new MenuHamburguer(
  ".hamburguer",
  ".menu",
  ".menu li",
);
menuHamburguer.init();
