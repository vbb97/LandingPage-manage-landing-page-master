'use client'
import Image from "next/image"

function showMenu (e) {
    const navBar = document.getElementById('navBar')
    const all = document.getElementById('all')
    const overlay = document.getElementById('overlay')
    const burger = e.target

    navBar.classList.toggle('sm:-rotate-x-90')
    all.classList.toggle('overflow-y-hidden')
    overlay.classList.toggle('sm:hidden')
    all.style.width = 'calc(100% - 5px)'

    if(burger.getAttribute('src') == './images/icon-close.svg') {
        burger.setAttribute('src', './images/icon-hamburger.svg')
    } else {
        burger.setAttribute('src', './images/icon-close.svg')
    }
    
}

export default function MenuBurger () {
    return (
        <Image className="sm:absolute sm:top-12 sm:right-8 sm:cursor-pointer lg:hidden" onClick={(e) => showMenu(e)} width="25" height="18" src="./images/icon-hamburger.svg" alt="Menu icon."/>
    )
}