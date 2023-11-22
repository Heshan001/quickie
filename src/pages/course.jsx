import React from 'react'
import '../styles/course.css'
import NavBar from '../../components/navBar'
import Footer from '../../components/footer'

function Course() {

  const comments = [
    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },

    {
      name :'Heshan Abayarathne',
      comment : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    }
  ]
  return (
    <div>
          <div className="nav">
        <NavBar/>
        <hr />
      </div>

      <div className="hero">
        <div className="heroContent">
            <h1>BSE Software Engineering</h1>
            <h3>Open Univesity In Sri Lanka</h3>
        </div>
      </div>

      <div className="courseContent">
        <div className="contentCard">
            <h2>Overview</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

        </div>

        <div className="contentCard">
            <h2>Course Content</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>

        <div className="contentCard">
            <h2>Course fee and Payment Details</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>

      <div className="comment">
        <div className="addComment">
          <h3>Nipun Sandeepa</h3>
          <textarea name="" id="" cols="90" rows="11"></textarea>
          <button>Comment</button>
        </div>

        <div className="comments">
          {
            comments.map((item, index) => {
              return(
                <div className="commentBox" key={index}>
                  <h3>{item.name}</h3>
                  <p>{item.comment}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Course