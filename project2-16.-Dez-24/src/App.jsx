import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>Title</h1>
        <nav>
          <a href='#Home' className='buttons'>Home</a>
          <a href='#About' className='buttons'>About</a>
          <a href='#Contact' className='buttons'>Contact</a>
        </nav>
      </header>
      <main>
        <section id="Home">
          <h2>Section 1</h2>
          <p>Text</p>
        </section>
        <section id="About">
          <h2>Section 2</h2>
          <p>Text</p>
        </section>
      </main>
      <footer id="Contact">
        &#169; RoxyMoxxie Dev (Roxana Zwicky) 2024<br />
        Roxana Zwicky
      </footer>  
    </div>
  )
}

export default App