import React from 'react'
import '../styles/events.css'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

function Events() {

const cards = [
    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
    },

    {
        title : 'News 2',
        image : './images/card.jpg',
        content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia deserunt atque sed saepe minus? Mag'
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
                        <img src={item.image} alt="" />
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