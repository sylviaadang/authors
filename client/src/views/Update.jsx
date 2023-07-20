import React, {useState, useEffect} from 'react'
import AuthorForm from '../components/AuthorForm';
import axios from 'axios';
import {useParams } from 'react-router-dom';

const Update = props => {

    const { id } = useParams();
    const [author, setAuthor] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
    }, [])


    return (
        <div>
            {author && (
                <AuthorForm
                    method='put'
                    action={`/${id}`}
                    initialFirstName={author.firstName}
                    initialLastName={author.lastName}
                    button="Update"
                />
            )}
        </div>
    )
}

export default Update
