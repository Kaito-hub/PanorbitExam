import React, { useRef } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import "./profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Posts() {

    const signoutTabRef = useRef()
    const handleSignoutTab = () => {
        signoutTabRef.current.classList.toggle("open");
    }

    const navigate = useNavigate()

    return (
        <div className='postsPage'>
            <nav className='sidebar'>
                <ul className='sidebarOptions'>
                    <li className='option profile-tab ' onClick={() => navigate("/profile/:id")}>Profile
                        <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div>
                    </li>
                    <li className='option posts-tab active' onClick={() => navigate("/posts")}>Posts
                        <div className="navbarBorder" ><FontAwesomeIcon icon={faChevronRight} /></div></li>
                    <li className='option gallery-tab' onClick={() => navigate("/gallery")}>Gallery
                        <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div></li>
                    <li className='option todo-tab' onClick={() => navigate("/todo")}>ToDo
                        <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div></li>
                </ul>
            </nav>
            <div className="profiles signout" ref={signoutTabRef}>
                <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' id='signoutProfile' />
                <p className='name'>Leanne Graham</p>
                <p className='email'>Sincere@april.biz</p>
                {/* <Account />
              <Account /> */}
                <ul className='changeAccounts'>
                    <li className='profileAccount account'>
                        <div className="borderLine"></div>
                        <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' />
                        <p className='username'>Clementine Bauch</p>
                    </li>
                    <li className='profileAccount account'>
                        <div className="borderLine"></div>
                        <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' />
                        <p className='username'>Clementine Bauch</p>
                    </li>
                </ul>
                <Link to={"/"}>
                    <button className='signout-btn'>Sign out</button>
                </Link>
            </div>
            <main className='posts'>
                <section className='postsHeader'>
                    <h1 className='posts-header'>Posts</h1>
                    <div className="signout-tab" onClick={handleSignoutTab}>
                        <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' id='activeProfile' />
                        <p className='name'>Leanne Graham</p>
                    </div>
                </section>
                <section className='postsDetails'>
                    <h1 className='posts coming-soon' style={{ textAlign: "center", fontSize: "6rem", marginTop: "11rem", color: "lightgray" }}>Coming Soon</h1>
                </section>
            </main>
        </div>
    )
}

export default Posts