import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'



const Restaurant = () => {
    const [restaurant, setRestaurant] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        const slug = this.props.match.params.slug
        
        const url = '/api/v1/restaurants/' + slug

        axios.get(url)
        .then( (resp) => {
            setRestaurant(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp) )
    }, [])

    return (
        <div>
            <div className="column">
                {
                        loaded &&
                <Header
                    attributes={restaurant.data.attributes}
                />
}
                <div className="reviews">
                    [Reviews Here]
                </div>
            </div>
            <div className="column">
                [NewReview Here]
            </div>
        </div>
    )
}

export default Restaurant