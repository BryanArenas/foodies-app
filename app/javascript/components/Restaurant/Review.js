import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    padding: 20px;
    margin: 0px 20px 20px 0px;
    background-color: #FAFAFA;

`

const Title = styled.div`
    padding: 20px 0px;
    font-weight: bold;
`

const Description = styled.div`
    padding: 0 0 20px 0;

`
const Review = (props) => {
    const { score, title, description } = props.attributes
    return (
        <Card>
            <Title>
                {title}
            </Title>
            <Description>
                {description}
            </Description>
            <Rating score={score}/>
        </Card>
    )
}

export default Review