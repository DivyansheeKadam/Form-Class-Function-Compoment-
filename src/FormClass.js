import { Component } from "react";
import { Link } from "react-router-dom";
import './Form.css';
export class FormClass extends Component{
    constructor(){
        super();
        this.state={
            id: "",
            name: "",
            email: "",
            mobno: "",
            address: "",
            newList: ""
        }
    }
    hendleSubmitform=(e)=>{
        e.preventDefault();
        const newLists={
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            mobno: this.state.mobno,
            address: this.state.address,
        }
        console.log(newLists)
        fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newLists),
        }).then((resp)=>resp.json())
                .then(result=>{alert("Result", result)})
                .catch((err)=>{console.log(err)})

     }
    render(){
        return(<div className="contain-form">
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
                    <input type="address" placeholder="Address" onChange={(e)=>{this.setState({address: e.target.value})}}/>
                    </label>
                </tr>
                <tr>
                    <button type="submit" className="btn" id="submitBTN" onClick={this.hendleSubmitform}> Submit</button>
                </tr>
                <tr><Link className="link" to='/empData'>Show Data</Link></tr>
            </table>
        </form>

        </div>)
    }
}