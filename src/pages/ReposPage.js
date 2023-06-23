import React from 'react'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import GithubUsers from "../components/GithubUser";


const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    const getUsers = async () => {
        try {
            const response = await fetch('data.json'
                , {
                    headers: {
                               'Content-Type': 'application/json',
                               'Accept': 'application/json'
                             }
                  }
                )
            setLoading(false);
            const result = await response.json()
            setUsers(result);
            console.log("priya");
        } catch (error) {
            setLoading(false);

            console.log("my error is " + error);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return <Loading />
    }


    return (
        <>

            <GithubUsers users={users} />
        </>
    )
}

export default UseEffectAPI
