import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Candidat from './pages/Candidat'
import Partis from './pages/Partis'
import Bureau from './pages/Bureau'
import Resultats from './pages/Resultats'
import logo from './logo_CENI.png'


ReactDOM.render(
  <React.StrictMode>
    <AppBar position='fixed' >
      <Toolbar style={{ display: 'flex', alignContent: 'center', justifyContent: "center" }} >
        <img alt='Logo CNI' src={logo} height='65px' width='65px' style={{ borderRadius: "50%", marginBottom: "-50px" }} />
      </Toolbar>
    </AppBar>
    <div style={{ marginTop: "80px" }}>
      <Typography variant='h3' align='center'>
        CENI-TCHAD
      </Typography>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/candidats' component={Candidat} />
          <Route exact path='/partis' component={Partis} />
          <Route exact path='/bureau' component={Bureau} />
          <Route exact path='/resultats' component={Resultats} />
        </Switch>
      </HashRouter>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
