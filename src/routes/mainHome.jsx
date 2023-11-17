import React from 'react'
import NavBar from '../components/navBar'
import '../styles/mainHome.css'
import Footer from '../components/footer'



function MainHome(){

    const mainContent = [
        {
            title : 'title 1',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },
    
        {
            title : 'title 2',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },
    
        {
            title : 'title 3',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },

        {
          title : 'title 1',
          image : './images/card.jpg',
          content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
  
      },
  
      {
          title : 'title 2',
          image : './images/card.jpg',
          content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
  
      },
  
      {
          title : 'title 3',
          image : './images/card.jpg',
          content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
  
      },
  

      {
        title : 'title 1',
        image : './images/card.jpg',
        content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',

    },


    {
        title : 'title 3',
        image : './images/card.jpg',
        content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',

    },

    
        {
            title : 'title 4',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },
    
        {
            title : 'title 5',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },
    
        {
            title : 'title 6',
            image : './images/card.jpg',
            content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s',
    
        },
    
        {
            title : 'title 7',
            image : './images/card.jpg',
            content : '  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    
        }
    ]
  return (
    <div>
         <div className="nav">
        <NavBar/>
        <hr />
      </div>
      <div className="filterSection">
        <div className="search">
            <input type="text" placeholder='search' className='searchTerm' />
             
        </div>
        <div className="filter">
            <input type="text" placeholder='subject'  />
            <input type="text" placeholder='result' />
            <input type="text " placeholder='Z score' />
            <button type='submit'>Filter</button>
        </div>
      </div>

      <div className="mainCardSection">
        {mainContent.map((item,index) =>
         {
          return(
            <div className="mainCard" key = {index}>
              <h3>{item.title}</h3>
              <img className='images' src={item.image} alt="" />
              <p>{item.content}</p>
              <button>View more</button>
            </div>
          )
         }) 
        }
      </div>
      <Footer/>
    </div>
  )
}

export default MainHome