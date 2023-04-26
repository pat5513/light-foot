const nav = document.querySelector(".nav")
const navDesktop = document.querySelector(".nav-desktop")
const navWrapper = document.querySelector(".nav-wrapper")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".nav__item")

//animacja przy nav mobilnej
const handleNav = () => {
	nav.classList.toggle("nav--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active")
		})
	})

	handleNavItemsAnimation()
}

//animacja przy nav mobilnej
const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation")
		item.style.animationDelay = "." + delayTime + "s"
		delayTime++
	})
}

navBtn.addEventListener("click", handleNav)

//sticky nav
window.addEventListener("scroll", function () {
	navDesktop.classList.toggle("sticky", window.scrollY > 0)
	navWrapper.classList.toggle("sticky-wrapper", window.scrollY > 0)
})
