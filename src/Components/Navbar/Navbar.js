// css styles 
import styles from "./navbar.module.css";
// import form react router
import { Outlet, NavLink } from "react-router-dom";

// Navbar Component
export default function Navbar(){
    return(
        <>
            {/* main container */}
            <div className={styles.navbarContainer}> 
                {/* app heading */}
                <div className={styles.appName}>
                    <NavLink to="/">
                        FIX HEALTH
                    </NavLink>
                </div>

                {/* all the navigation link */}
                {/* <div className={styles.navLinks}>
                    <NavLink to="/">
                        <span>
                            <i class="fa-solid fa-house"></i>
                            Booking
                        </span>
                    </NavLink>                 
                </div> */}
            </div>
            {/* render child pages */}
            <Outlet />
        </>
    )
}