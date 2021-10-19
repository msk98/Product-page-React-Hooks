import reactDom from "react-dom";
import classes from './App.module.css'
const Topbar=()=>{
    return(
<nav className={classes.Topbar}>
    <img className={classes.logo} src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" alt="amazon-log" />
       </nav>
    );
}
export default Topbar;