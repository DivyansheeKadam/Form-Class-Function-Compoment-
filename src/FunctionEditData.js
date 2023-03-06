import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';

const FunctionEditData=()=>{
    let data = useLocation();
    const [id, setId]=useState("")
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [mobno, setMobno]=useState("")
    const [address, setAddress]=useState("")
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${data.state}`)
        .then(result=>console.log(result.data))
        .catch(err=>console.log(err));

    })
    const hendleSubmitform=()=>{
        axios.put(`http://localhost:3000/users/${data.state}`, {id, name, email, mobno, address})
        .then((result)=> {
            alert("data updating")
            window.location='/ShowFunction';
            })
        .catch(err=>console.log(err));
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
                <button type="submit" onClick={hendleSubmitform}> Submit</button>
            </tr>
        </table>
    </form>

    </div>)

}
export default FunctionEditData;