import { Component } from "react";
import { Link } from "react-router-dom";
export class Header extends Component{
    render(){
        return(<div className="header">
                <nav>
                <Link className="link" to="/formClass"> Class (Form)</Link>
                <Link className="link" to="/functionForm"> Function (Form)</Link>
                </nav>
    </div>)
    }
}
export default Header;