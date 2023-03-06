import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

const FunctionForm=()=>{
    const [id, setId]=useState("")
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [mobno, setMobno]=useState("")
    const [address, setAddress]=useState("")
   const hendleSubmitform=()=>{
        axios.post('http://localhost:3000/users',{id, name, email, mobno, address})
        .then(result=>console.log(result.data))
        .catch(err=>console.error(err))
    }

    return(
    <div className="contain-form">
    <form >
        <table>
            <tr>
            <label>Id
                <input type="text" placeholder="id" onChange={(e)=>setId(e.target.value)}/>
           </label>
            </tr>
            <tr>
                <label> Full Name
                <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
                </label>
            </tr>
            <tr>
                <label> Email
                <input type="email" placeholder="@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
                </label>
            </tr>
            <tr>
                <label> Mob no.
                <input type="text" placeholder="Mobno." onChange={(e)=>setMobno(e.target.value)}/>
                </label>
            </tr>
            <tr>
                <label> Address
                <input type="address" placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
                </label>
            </tr>
            <tr>
                <button type="submit" className='btn' onClick={hendleSubmitform}> Submit</button>
            </tr>
            <tr><Link to='/showFunction'>Show Data</Link></tr>
        </table>
    </form>

    </div>)

}
export default FunctionForm;