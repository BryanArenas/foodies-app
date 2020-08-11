import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'

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
            <Column>
                {
                        loaded &&
                <Header
                    attributes={restaurant.data.attributes}
                />
                }       
                <div className="reviews">
                    [Reviews Here]
                </div>
            </Column>
            <Column>
                [NewReview Here]
            </Column>
        </div>
    )
}

export default Restaurant