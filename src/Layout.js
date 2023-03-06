import { Outlet } from "react-router-dom"
import Header from "./Header";

const Layout=()=>{
    return(
       <>
        <Header/>
    <section>
        <Outlet/>
    </section>
       </>
    )
}
export default Layout;