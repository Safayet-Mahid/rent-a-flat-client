import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MorePropertyDetails = () => {

    const [allProperties, setAllProperties] = useState([])
    const [matchedProperty, setMatchedProperty] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/properties")
            .then(res => res.json())
            .then(data => setAllProperties(data))
    }, [])
    const { property_id } = useParams()

    useEffect(() => {
        const matched_property = allProperties.find(
            property => property._id === property_id
        )
        setMatchedProperty(matched_property)
    }, [allProperties, property_id])

    return (
        <div>

            {

                matchedProperty ? <h2>{matchedProperty.property_name}</h2>
                    :
                    <h2>No Such Property is found</h2>

            }


        </div>
    );
};

export default MorePropertyDetails;