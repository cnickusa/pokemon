import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [ name, setName ] = useState({
        name: ''
    })
    
    const handleChange = (e) => {
        e.preventDefault()

        setName({
            name: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios
            .post('https://pokeapi.co/api/v2/pokemon/', {name})
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
        setName({name: ''})
    }
};

export default AddUser;