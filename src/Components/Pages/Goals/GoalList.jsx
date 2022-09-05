import React, { useEffect, useState } from 'react'

import { Link, Outlet } from "react-router-dom"
import appService from '../../App/Appservices/AppService';

import { Page } from '../../App/Layout/Page'

export const GoalList = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetList("goals");

                console.log(result.data);
                setApiData(result.data.items);


            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [])
    return (
        <Page title="Verdensmålene" description="Se vores skønne verdensmål">
            <ul>
                {apiData ?
                apiData.map((goal) => (
                    <li key={goal.id}>
                    <Link to={goal.id}>{goal.title}</Link>
                    </li>
                )) : 
                <>...Loading</>}
            </ul>
            <Outlet />

            </Page>
    )
}
