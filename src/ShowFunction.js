import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Show.css';
const ShowFunction=()=>{
    const [list, setList]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(result=>setList(result.data))
        .catch(err=>setList(err));

    })
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3000/users/${id}`)
        .then(result=> alert(result.data + "Data is deleting"))
        .catch(err=>setList(err));
    }
    return(<div className="tableContaint">
        <table className="tableData">
            <tr className="trContaint">
                <strong>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone No.</td>
                <td>Address</td>
                <td></td>
                <td></td>
                </strong>
            </tr>
            {list.map((data, i)=>(
                <tr key={i} className="trContaint"> 
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
                <td>{data.address}</td>
                
                <td >
                    <Link to="/functionEditData" state={data.id}>
                    <button className="btn">Edit</button></Link>
                </td>

                <td>
                    <button className="btn" onClick={()=>handleDelete(data.id)}>Delete</button>
                </td>
                </tr>
                ))}
        </table>
    </div>)
}
export default ShowFunction;