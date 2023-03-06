import { Component } from "react";


export class EmpEdit extends Component{
   constructor(props){
      super();
      this.state={
        data:[],
        mapData:[],
        id: "",
        name: "",
        email: "",
        mobno: "",
        address: "",
        newList: ""
      }
      console.log(props)
   }
   componentDidMount(){
    this.setState.newList={
        id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        mobno: this.state.mobno,
        address: this.state.address,
    }
    fetch(`http://localhost:3000/users`)
    .then(response=> response.json())
    .then(result=> {this.setState({data:result})})


}
   hendleUpdateData=()=>{
    this.setState({mapData: this.state.data.map((data)=>data.id)});
    fetch(`http://localhost:3000/users/${this.id}`,
    {id: this.state.id,
        name: this.state.name,
        email: this.state.email,
        mobno: this.state.mobno,
        address: this.state.address},
         {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.newList),
        }).then((resp=>resp.json()))
                .then(result=>{alert("Result", result)})
                .catch((err)=>{console.log("error" ,err)})

   }
   render(){
    return(<>
        Edit section
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
                    <button type="submit" onClick={this.hendleUpdateData}> Update Data</button>
                </tr>
            </table>
            {this.state.data.map((data)=>(
                <tr key={data.id}> 
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phoneNo}</td>
                <td>{data.address}</td>
                </tr>))}
        </form>
        
         </>)
   }
}
export default EmpEdit;