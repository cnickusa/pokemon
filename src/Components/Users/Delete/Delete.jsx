import axios from 'axios';
import React, { useState } from 'react';

const Delete = () => {
    const [ state, setState ] = useState('')
    const handleChange = (e) => {
        setState({id: e.target.value})
    }

    const handleRemove = (e) => {
        e.preventDefault()
        axios
            .delete(`https://pokeapi.co/api/v2/pokemon/${state.id}`)
            .then((res) => {
                console.log(res.data);
            })
    }
    // return (
    //     <div>
    //         <div>
    //             Remove User
    //             <div>
    //                 <form onSubmit={handleRemove}>
    //                 <label>
    //                     User ID:
    //                     <input type="number" name="id" onChange={handleChange} />
    //                 </label>
    //                 <button type="submit">Delete</button>
    //                 </form>
    //             </div>
    //             </div>
    //     </div>
    // );
};

export default Delete;