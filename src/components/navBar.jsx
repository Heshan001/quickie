import React from 'react'
import '../styles/navBar.css'

function NavBar() {

    const navItems =[
        {name : 'Home',
         link: '/'
        },
 
        {name : 'About',
        link: '/about'
        },
 
        {name : 'Event',
        link: '/event'
        },
 
        {name : 'Login',
        link: '/login'
        },
 
        {name : 'Contact',
        link: '/contact'
        }
     ]
  return (
    <div>
        <nav className='navItems'>
            
            
            <ul className='navMenu'>
            {navItems.map((item,index) => {
                return(
                    <li key = {index}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                )
            })}
            </ul>
        </nav>
    </div>
  )
}

export default NavBar