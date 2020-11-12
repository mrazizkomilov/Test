import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import { POSTS_DETAIL } from '../../urls';


export default function PostDetail(props) {
    let [result, setResult] = useState({})
    let [comment, setCommet] = useState([])


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000${POSTS_DETAIL}/${props.match.params.id}`)
            .then(function (response) {
                setResult(response.data);
            });

        axios.get(`http://127.0.0.1:8000/news/${props.match.params.id}/comment`)
            .then(function (response) {
                setCommet(response.data)
            });
    }, [props.match.params.id])

    return (
        <div className='container'>
            <div className="card p-4">
                <h1 className='title'>{result.title}</h1>
                <img src={`http://localhost:8000${result.photo}`} alt="post-img" />
                <div>{result.content}</div>
                <div></div>
            </div>

            <div className="commet mb-5">
                {comment.map((post, index) => (
                    <div key={index}>
                        <div className="card column  m-1 ">
                            <div className="media-content columns">
                                <div className="column is-1 ">
                                    <img className='has-rounded' src="https://picsum.photos/50/50" alt="" />
                                </div>
                                <div className="column">
                                    <p className="title is-5 mt-3">{post.name}</p>
                                </div>
                            </div>
                            <p className="subtitle is-6">{post.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Formik
                initialValues={{ name: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    console.log(values)
                    axios.post(`http://127.0.0.1:8000/news/${result.id}/comment`, { ...values, post: result.id })
                }}>
                <Form >
                    <div className="field">
                        <div className="control">
                            <label className="label">Name</label>
                            <Field className="input" type="input" name="name" placeholder="name" required />
                        </div>
                        <div className="control">
                            <label className="label">Comment</label>
                            <Field className="textarea" type="textarea" name="comment" placeholder="commit" required />
                        </div>
                    </div>
                    <button className='button' type="submit" > Submit </button>
                </Form>
            </Formik>
        </div >
    )
}
