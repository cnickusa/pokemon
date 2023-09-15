import axios from 'axios';
import React, { useState } from 'react';

const Edit = () => {
    const [ editedUser, setEditedUser ] = useState({
        name: '',
        userName: '',
    })

    const handleChange = (e) => {
        setEditedUser({
            ...editedUser,
            [e.target.name]: e.target.value,
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios
            .put('https://pokeapi.co/api/v2/pokemon/1', {editedUser})
            .then((res) => {
                console.log(res.data);
            })
    }
};

export default Edit;