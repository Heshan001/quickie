import React from 'react'
import '../styles/events.css'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

function Events() {

const cards = [
    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    },

    {
        title:'title1',
        content:'ewfm qpomdw 2im 2 2mem '
    }

]
 
  return (
    <div>
        <div className="nav">
        <NavBar/>
        <hr />
      </div>

      <div className="eventSection">
        <h1>Upcoming Events </h1>
        <hr />
      </div>

      <div className="eventCardSection">
        {
            cards.map((item,index) => {
                return(
                    <div className="card" key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                )
            })
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Events