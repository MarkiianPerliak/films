import React from 'react'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export const PostItem = ({item}) => {
    const {id} = useParams()
    return (
        <li key={item.id}>
            <img style={{ width: "200px" }} src={item.avatar} alt="image" />
            <h3>{item.name}</h3>
            <p>{item.message}</p>
            <Link to={`/post/${item.id}`}>See replies</Link>
            {item.id === id && <Outlet />}
        </li>
    )
}
