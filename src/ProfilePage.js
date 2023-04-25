import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Account from './Account'
import "./profile.css"
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function ProfilePage() {
  // const { id } = useParams()



  // const activeUser = sessionStorage.getItem("activeUser") 
  // sessionStorage.setItem("activeUser",id)
  const activeUser = sessionStorage.getItem("activeUser")

  const [account, setAccount] = useState(JSON.parse(sessionStorage.getItem("users"))[parseInt(activeUser) - 1])

  function nextUsers() {
    if (parseInt(activeUser) === JSON.parse(sessionStorage.getItem("users")).length) {
      return [JSON.parse(sessionStorage.getItem("users"))[parseInt(0)], JSON.parse(sessionStorage.getItem("users"))[parseInt(0) + 1]]
    } else {
      return [JSON.parse(sessionStorage.getItem("users"))[parseInt(activeUser)], JSON.parse(sessionStorage.getItem("users"))[parseInt(activeUser) + 1]]
    }
  }


  const alternateProfiles = nextUsers()



  console.log(alternateProfiles);

  const storeActiveUser = (id) => {
    sessionStorage.setItem("activeUser", id)
  }

  // useEffect(() => {
  //   setAccount(JSON.parse(sessionStorage.getItem("users"))[sessionStorage.getItem("activeUser")])
  // },[])



  const signoutTabRef = useRef()
  const handleSignoutTab = () => {
    signoutTabRef.current.classList.toggle("open");
  }

  // const removeProfiles = () => {
  //   signoutTabRef.current.classList.remove("open");
  // }

  const navigate = useNavigate()

  return (
    <div className='profilePage' >
      <nav className='sidebar'>
        <ul className='sidebarOptions'>
          <li className='option profile-tab active' onClick={() => navigate("/profile/:id")}>Profile
            <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div>
          </li>
          <li className='option posts-tab' onClick={() => navigate("/posts")}>Posts
            <div className="navbarBorder" ><FontAwesomeIcon icon={faChevronRight} /></div></li>
          <li className='option gallery-tab' onClick={() => navigate("/gallery")}>Gallery
            <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div></li>
          <li className='option todo-tab' onClick={() => navigate("/todo")}>ToDo
            <div className="navbarBorder"><FontAwesomeIcon icon={faChevronRight} /></div></li>
        </ul>
      </nav>
      <div className="profiles signout" ref={signoutTabRef}>
        <img src={account.profilepicture} alt={account.name} className='profilePic' id='signoutProfile' />
        <p className='name'>{account.name}</p>
        <p className='email'>{account.email}</p>
        {/* <Account />
              <Account /> */}
        <ul className='changeAccounts'>
          {alternateProfiles.map((profile) => {
            return <Link style={{ textDecoration: "none" }} to={`/profiles/${profile.id}`} onClick={() => storeActiveUser(profile.id)}>
              <li className='profileAccount account'>
                <div className="borderLine"></div>
                <img src={profile.profilepicture} alt={profile.name} className='profilePic' />
                <p className='username'>{profile.name}</p>
              </li>
            </Link>
          })}
          {/* <li className='profileAccount account'>
            <div className="borderLine"></div>
            <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' />
            <p className='username'>Clementine Bauch</p>
          </li>
          <li className='profileAccount account'>
            <div className="borderLine"></div>
            <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" alt="Leanne Graham" className='profilePic' />
            <p className='username'>Clementine Bauch</p>
          </li> */}
        </ul>
        <Link to={"/"}>
          <button className='signout-btn'>Sign out</button>
        </Link>
      </div>
      <main className='profile'>
        <section className='profileHeader'>
          <h1 className='profile-header'>Profile</h1>
          <div className="signout-tab" onClick={handleSignoutTab}>
            <img src={account.profilepicture} alt={account.name} className='profilePic' id='activeProfile' />
            <p className='name'>{account.name}</p>

          </div>
        </section>
        <section className='profileDetails'>
          <div className="contactAndCompanyDetails">
            <div className="contactDetails">
              <img src={account.profilepicture} alt={account.name} className='profilePic' id='contactProfilePic' />
              <p className='name contactName'>{account.name}</p>
              <div className="contactUsername contact">
                <p className='heading'>Username :</p><p className='value'>{account.username}</p>
              </div>
              <div className="contactE-mail contact">
                <p className='heading'>e-mail : </p><p className='value'>{account.email}</p>
              </div>
              <div className="contactUsername contact">
                <p className='heading'>Phone : </p><p className='value'>{account.phone}</p>
              </div>
              <div className="contactUsername contact">
                <p className='heading'>Website : </p><p className='value'>{account.website}</p>
              </div>
            </div>
            <div className="companyDetails">
              <p className='companyHeading'>Company</p>
              <div className="companyName company">
                <p className='heading'>Name :</p><p className='value'>{account.company.name}</p>
              </div>
              <div className="companyCatchphrase company">
                <p className='heading'>Catchphrase : </p><p className='value'>{account.company.catchPhrase}</p>
              </div>
              <div className="companyBs company">
                <p className='heading'>bs : </p><p className='value'>{account.company.bs}</p>
              </div>
            </div>
          </div>
          <div className="addressDetails">
            <p className="addressHeading">Address:</p>
            <div className="addressStreet address">
              <p className='heading'>Street :</p><p className='value'>{account.address.street}</p>
            </div>
            <div className="addressSuite address">
              <p className='heading'>Suite : </p><p className='value'>{account.address.suite}</p>
            </div>
            <div className="addressCity address">
              <p className='heading'>City : </p><p className='value'>{account.address.city}</p>
            </div>
            <div className="addressZipCode address">
              <p className='heading'>Zip Code : </p><p className='value'>{account.address.zipcode}</p>
            </div>
            <Map coords={account.address.geo} />
            <div className="coords">
              <p className="heading">Lat:</p><p className="value">{account.address.geo.lat}</p>
              <p className="heading">Long:</p><p className="value">{account.address.geo.lng}</p>
            </div>
          </div>
        </section>
      </main>
      <div className="chatTab"></div>
    </div>
  )
}


export default ProfilePage

