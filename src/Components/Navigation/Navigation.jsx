import React from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import s from "./Navigation.module.css"

export const Navigation = () => {
  return (
    <div>
        <NavLink 
        className={({isActive}) => isActive ? s.activelink : s.link} 
        to={"/"} >Home</NavLink>
        <NavLink 
        className={({isActive}) => isActive ? s.activelink : s.link} 
        to={"/content"}>Content</NavLink>
        <NavLink 
        className={({isActive}) => isActive ? s.activelink : s.link} 
        to={"/post"}>Posts</NavLink>
        <NavLink 
        className={({isActive}) => isActive ? s.activelink : s.link} 
        to={"/postform"}
        state={{text: "hello"}}>Posts Form</NavLink>
    </div>
  )
}
