import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import appService from '../../App/Appservices/AppService'

export const GoalDetails = () => {

    const [apiData, setApiData] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await appService.GetDetails("goals", id);

                console.log(result.data.item);
                setApiData(result.data.item);


            } catch (error) {
                console.error(error)
            }
        };
        getData();
    }, [id])

    return (
        <div>
            <h2>{apiData.title}</h2>
            <img src={apiData.image} alt={apiData.byline} />
            <p>{apiData.description}</p>
        </div>
    )
}
