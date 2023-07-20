import React, {useEffect, useState} from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { useNavigate, Link } from 'react-router-dom';


const New = () => {



    return (
        <div>
            <Link to={'/authors'}>Back to Dashboard</Link>
            <AuthorForm button="Add "method='post' action='/' initialFirstName='' initialLastName=''/>
        </div>
    )
}

export default New
