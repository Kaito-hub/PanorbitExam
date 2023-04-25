import React, { useEffect, useState } from 'react'
import waveFrontSVG from "./Assets/frontWave.svg"
import waveBackSVG from "./Assets/backWave.svg"
import "./landing.css"
import Account from './Account'

function LandingPage() {

    const [accountList, setaccountList] = useState()
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        const response = await fetch("https://panorbit.in/api/users.json")
        const data = await response.json();
        sessionStorage.setItem("users", JSON.stringify(data.users))
        setaccountList(data.users)
        setLoading(false)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='landingPage'>
            <img src={waveFrontSVG} alt="Wave Front Background" className='background frontBackground' />
            <img src={waveBackSVG} alt="Wave Back Background" className='background backBackground' />
            <section className='accountsListCard'>
                <div className="header"><h3>Select an account</h3></div>
                <ul className='accountsList'>
                {loading === false ? accountList.map((account)=>{
                    return <Account key={account.id} details={{ img: account.profilepicture, name: account.name,id:account.id }} />
                })
                    : <h1 className='loading'>Loading...</h1>}
                </ul>
                <div className="footer"></div>
            </section>
        </div>
    )

}

export default LandingPage