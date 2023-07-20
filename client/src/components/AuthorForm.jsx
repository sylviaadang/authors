import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default props => {
    const {initialFirstName, initialLastName, method, action, button } = props;
    // const [firstName, setFirstName] = useState(initialFirstName);
    // const [lastName, setLastName] = useState(initialLastName);
    const [author ,setAuthor] =useState({
        firstName: initialFirstName,
        lastName: initialLastName
    })

    const navigate = useNavigate();

    const [firstNameErr, setFirstNameErr] = useState('')
    const [lastNameErr, setLastNameErr] = useState('')

    const onSubmitHandler = e => {
        e.preventDefault();

        axios[method](`http://localhost:8000/api/authors${action}`, author)
        .then(res => navigate('/'))
        .catch(err => {
            const errs = err.response.data.errors
            console.log(errs)
            if (errs.firstName) {
                setFirstNameErr(errs.firstName.message)
            } else {
                setFirstNameErr('')
            }

            if (errs.lastName) {
                setLastNameErr(errs.lastName.message)
            } else {
                setLastNameErr('')
            }
        })


        setAuthor({
            firstName: initialFirstName,
            lastName: initialLastName
        })

    }

    const handleChange = (e) => {
        setAuthor(currentAuthor => ({...currentAuthor, [e.target.name] : e.target.value }))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p className='err'>{firstNameErr}</p>
                <label>First Name</label>
                <br/>
                <input type='text' name='firstName' value={author.firstName} onChange={handleChange}/>
            <p className='err'>{lastNameErr}</p>
                <label>Last Name</label>
                <br/>
                <input type='text' name='lastName' value={author.lastName} onChange={handleChange}/>

            <button>{button}</button>
        </form>
    )
}
