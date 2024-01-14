'use client'
import Image from "next/image"

function showMenu () {
    const navBar = document.getElementById('navBar')
    const all = document.getElementById('all')

    navBar.classList.toggle('sm:-rotate-x-90')
    all.classList.toggle('overflow-y-hidden')
}

export default function MenuBurger () {
    return (
        <Image onClick={() => showMenu()} width="25" height="18" src="./images/icon-hamburger.svg" alt="Menu icon."/>
    )
}