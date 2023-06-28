"use client"
import React, {ChangeEvent, useEffect} from 'react';
import {gsap} from "gsap";

function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector('#cursor');
        const clickable = document.querySelectorAll("button")
        const cursor_text = document.querySelector(".cursor-text")
        const onMouseMove = (e: any) => {
            const {clientX, clientY} = e
            gsap.to(cursor, {x: clientX, y: clientY})

        }
        const onMouseEnter = (e: any) => {
            const button = e.target;
            if (button.classList.contains("view")) {
                gsap.to(cursor, {scale: 3})
                cursor_text?.classList.remove("hidden")
                cursor_text?.classList.add("block")
            } else {
                gsap.to(cursor, {scale: 3})
            }
        }

        const onMouseLeave = (e: any) => {
            gsap.to(cursor, {scale: 1})
            cursor_text?.classList.remove("block")
            cursor_text?.classList.add("hidden")
        }

        document.addEventListener("mousemove", onMouseMove)
        clickable.forEach((button) => {
            button.addEventListener("mouseenter", onMouseEnter)
            button.addEventListener("mouseleave", onMouseLeave)
        })
    }, [])
    return (
        <div id={"cursor"}
             className={"fixed top-0 left-0 w-5 aspect-square rounded-full pointer-events-none z-50 mix-blend-difference p-2 flex items-center justify-center bg-white  "}>
            <span className={"cursor-text text-[5px] text-black  tracking-wide hidden"}>View</span>
        </div>
    );
}

export default Cursor;