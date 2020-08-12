import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import Review from './Review'



const Column = styled.div`
    background: #fff;
    max-width: 50%;
    width: 50%;
    float: left;
    height: 100vh;
    overflow-x: scroll;
    overflow-y: scroll;
    overflow: scroll;
`

const Restaurant = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    

    useEffect( () => {
        const slug = props.match.params.slug
        const url = '/api/v1/restaurants/' + slug

        axios.get(url)
        .then( (resp) => {
            setRestaurant(resp.data.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp) )
    }, [])
    

    //problem area below
    let reviews
        if (length > 0) {
            reviews = reviews.map( (review, index) => {
            return (
                <Review 
                key={index}
                title={review.attributes.title}
                description={review.attributes.description}
                score={review.attributes.score}
                />
            )
        })
    }

    return (
        <div>
            <Column>
               { 
                loaded &&
                <Header
                    attributes={restaurant.attributes}
                />
            }
                <div className="reviews">
                    {reviews}
                </div>
            </Column>
            <Column>
                [NewReview Here]
            </Column>
        </div>
    )
}

export default Restaurant