import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashboard = () => {

    const [authors, setAuthors] = useState([])


    const fetchAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {setAuthors(res.data)})
        .catch (err => console.log(err))
    }

    useEffect(fetchAuthors, [])


    const handleDelete = (id) => {
        alert(`This would delete ${id}`)
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => fetchAuthors())
            .catch(err => console.log(err))
    }



    return (
        <div>
            <Link to={'/authors/new'}>Add an author</Link>
            <br />
            <p>We have quotes by: </p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    authors.map((author, key) => {
                        return (
                        <tr>
                            <td>
                                <Link to={`/${author._id}`}>{author.firstName} {author.lastName}</Link>
                            </td>
                            <td>
                                <Link to={`/edit/${author._id}`}>Edit</Link>
                                <button onClick={() => handleDelete(author._id)}>DELETE</button>
                            </td>
                        </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard
