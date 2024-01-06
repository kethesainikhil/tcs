import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <Container className='project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>Description</h1>
            <p>{disc}
            <a href="#">demo</a>
            </p>
        </div>
    </Container>
  )
}

export default Project;

const Container = styled.div`
    height: 30rem;
    width: 50rem;
    background-color: #4e5156;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin:0 auto;
    img{
        margin:0 auto;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0rem;
        bottom: -10rem;
        text-align: left;
        padding: 0rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
    
        p{
            width: 90%;
            font-size: 0.8rem;
            a{
                margin-left: 0.4rem;
                color: red;
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
        filter: blur(2px);
    }

    :hover > .disc{
        bottom: 0;
    }

`