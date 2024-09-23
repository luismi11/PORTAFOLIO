import './App.css'

import { BrowserRouter , Routes , Route , NavLink } from 'react-router-dom'

import { Contacto } from './pages/Contacto/Contacto'
import { Inicio } from './pages/Inicio/Inicio'
import { Trabajos } from './pages/Trabajos/Trabajos'
import { Fondos } from './components/Fondos/Fondos'
import { BeatScene } from './pages/BeatScene/BeatScene'
import { Thespecialone } from './pages/TheSpecialOne/Thespecialone'
import { SobreMi } from './pages/SobreMi/SobreMi'
import { WebWorks } from './pages/WebWorks/WebWorks'

import { useTranslation } from 'react-i18next';
import './i18n';
import { useState } from 'react';


function App() {

  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute('lang', lng);  // Cambiar el atributo lang en el HTML
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className='Header'>
          <nav className='Header-nav'>
            <NavLink to={ '/' }>
              <img className="Header-svg" src="/assets/Logo-luismi.svg" alt="Luis Miguel Sovero Logo" />
            </NavLink>
            <ul className='Header-ul'>
              <NavLink to={ '/trabajos' }>  <li className='Header-li'>{t('projects')}</li>  </NavLink>
              <NavLink to={ '/sobremi' }>   <li className='Header-li'>{t('about')}</li> </NavLink>
              <NavLink to={ '/contacto' }>  <li className='Header-li'>{t('contact')}</li> </NavLink>
            </ul>
            <div className='Button-wrapper'>
              <button className='Header-button' onClick={() => changeLanguage('en')}>EN</button>
              <button className='Header-button' onClick={() => changeLanguage('es')}>ES</button>
            </div>
            <div className="Toggle-menu" onClick={() => toggleMenu()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </div>
          </nav>
          
          { isActive && 
            <div className="Header-nav mobile" onClick={() => toggleMenu()}>
              <div className="Toggle-menu mobile" onClick={() => toggleMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
              </div>
              
              <ul className='Header-ul-mobile'>
                <NavLink to={ '/' }>
                  <img className="Header-svg mobile" src="/assets/Logo-luismi.svg" alt="Luis Miguel Sovero Logo" />
                </NavLink>
                <NavLink to={ '/trabajos' }>  <li className='Header-li'>{t('projects')}</li>  </NavLink>
                <NavLink to={ '/sobremi' }>   <li className='Header-li'>{t('about')}</li> </NavLink>
                <NavLink to={ '/contacto' }>  <li className='Header-li'>{t('contact')}</li> </NavLink>
              </ul>
              <div className='Button-wrapper-mobile'>
                <button className='Header-button' onClick={() => changeLanguage('en')}>EN</button>
                <button className='Header-button' onClick={() => changeLanguage('es')}>ES</button>
              </div>
            </div>
          }
        </header>
        
        
        <Fondos/>
        <Routes>
          <Route path='/' element={ <Inicio /> }/>
          <Route path='/trabajos' element={ <Trabajos /> }/>
          <Route path='/sobremi' element={ <SobreMi /> } />
          <Route path='/contacto' element={ <Contacto /> } />
          <Route path='/beatscene' element={ <BeatScene /> } />
          <Route path='/thespecialone' element={ <Thespecialone /> } />
          <Route path='/webworks' element={ <WebWorks titulo="titulo"/> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
