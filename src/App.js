import './App.css';
import React, { useState, useEffect } from 'react';
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "./selection.json";

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const data = [
    {
      title: 'Security',
      icon: 'logo-colored',
      active: true,
    },
    {
      title: 'Compliance',
      icon: 'edit',
      active: true,
    },
    {
      title: 'Operations',
      icon: 'home',
      active: true,
    },
    {
      title: 'Extra config',
      icon: 'exchange',
      active: false,
    }
  ]

// for handle toggle close
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }


  return (
    <nav className="navBar">
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {data.map((val, i) => {
          return (
            <React.Fragment key={i}>
              <li className='icons'> <IcomoonReact
                color='#444'
                iconSet={iconSet}
                size={20}
                icon={val.icon}
              />{val.title}</li>
            </React.Fragment>
          )
        })
        }
      </ul>
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
    </nav>
  );
}

export default App;
