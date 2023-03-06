import { Component } from "react";
import './Show.css'
// import { Link } from "react-router-dom";
export class EmpData extends Component{
constructor(){
    super()
    this.state={
            data:[],
            id: "",
            name: "",
            email: "",
            mobno: "",
            address: "",
            newList: "",
            userId: ""

    }
}
//get data
componentDidMount(){
   this.getUser()
}
getUser=()=>{
    fetch('http://localhost:3000/users')
    .then(response=> response.json())
    .then(result=> {this.setState({data:result})
        this.setState({userId: result[0].id})

})
}
//Delete Data
handleDelete=(id)=>{
    fetch(`http://localhost:3000/users/${id}`, {
    method: 'DELETE'})
    .then((response)=> response.json())
    .then(result=>{ console.warn("Delete"+ result)
    this.getUser()
    })

}
//update set data
handleEdit=(id)=>{
    const item= this.state.data[id-1];
        this.setState({id: item.id});
        this.setState({name: item.name});
        this.setState({email: item.email});
        this.setState({mobno: item.mobno});
        this.setState({address: item.address});
        alert(item)
    
}
// update data
hendleUpdateData=()=>{
    const newList={
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        mobno: this.state.mobno,
        address: this.state.address,
    }
    alert(newList)
    fetch(`http://localhost:3000/users/${this.state.data.id}`,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newList)
    }).then((respnse)=>{ respnse.json()
        .then((result)=>{console.log(result)
    this.getUser()})
            })

}
    
render(){
    return(<>
         <div className="tableContaint">
         <form>
        <table>
            <tr className="trContaint">
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone No.</td>
                <td>Address</td>
                <td></td>
                <td></td>
            </tr>
                {this.state.data.map((data, i)=>(
                <tr key={i} className="trContaint"> 
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobno}</td>
                <td>{data.address}</td>
                <td>
                    <button className="btn" onClick={()=>this.handleEdit(data.id)}>Edit</button>
                </td>
                <td>
                    <button className="btn" onClick={()=>this.handleDelete(data.id)}>Delete</button>
                </td>
                </tr>
                ))}
        </table>
    </form>
         </div>
    {/* update containt */}
    <div className="editContaint">
    <form >
            <table>
                <tr>
                
                <label>Id
                    <input type="text" placeholder="id" onChange={(e)=>{this.setState({id: e.target.value})}}/>
               </label>
                </tr>
                <tr>
                    <label> Full Name
                    <input type="text" placeholder="Full Name" onChange={(e)=>{this.setState({name: e.target.value})}}/>
                    </label>
                </tr>
                <tr>
                    <label> Email
                    <input type="email" placeholder="@gmail.com" onChange={(e)=>{this.setState({email: e.target.value})}}/>
                    </label>
                </tr>
                <tr>
                    <label> Mob no.
                    <input type="text" placeholder="Mobno." onChange={(e)=>{this.setState({mobno: e.target.value})}}/>
                    </label>
                </tr>
                <tr>
                    <label> Address
                    <input type="address" placeholder="Full Name"/>
                    </label>
                </tr>
                <tr>
                    <button className="btn" type="submit" onClick={this.hendleUpdateData}> Update Data</button>
                </tr>
            </table>
        </form>
    </div>

    </>)
}
}

