import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer'
import Header from './Header'
import Page from './Page'



function App() {
  return (
    < Router >
      <header>
        <Header />
      </header>
      <section>
        {<Page />}
      </section>
      <footer>
        {<Footer />}
      </footer>
    </Router >
  );
}

export default App;