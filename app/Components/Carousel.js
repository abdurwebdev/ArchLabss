"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
// Define the ExampleCarouselImage component
const ExampleCarouselImage = ({ src, text }) => {
    
  return (
    <div>
      <img src={src} alt={text} className='w-[1800px] object-top  h-[500px]  object-cover' />
      <p>{text}</p>
    </div>
  );
};

const Carousels = () => {
  return (
    <>
      <Carousel
      prevIcon={<FaArrowLeft size={30} color='black' />} // Custom previous button
      nextIcon={<FaArrowRight size={30} color='black' />} >
        <Carousel.Item>
          <ExampleCarouselImage  src='https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
          <Carousel.Caption>
            <h3>Roger Scott</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src='https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <Carousel.Caption>
            <h3>Roger Scott</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
          <Carousel.Caption>
            <h3>Roger Scott</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carousels;
