import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Posts() {
    let [result, setResult] = useState([])

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/news`).then((response) => {
            setResult(response.data)
        })
    }, [])

    return (
        <div className="container">
            <div className='columns is-multiline'>
                {result.map((post, index) =>
                    <div key={index} className="card column is-3 m-1 ">
                        <img src={`http://localhost:8000${post.photo}`} style={{ height: '186px' }} alt="post-img" />
                        <Link to={`news/${post.id}`} >{post.title}</Link>
                        <br />
                        <time>{post.created_at}</time>
                    </div>
                )
                }
            </div>
        </div>
    )
}
