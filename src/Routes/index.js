import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../Home';
import Imc from '../Imc';
import Nos from '../Nos';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Início" initial = {true} />
         <Scene key = "imc" component = {Imc} title = "Calculo do IMC" />
         <Scene key = "nos" component = {Nos} title = "Sobre nós" />
      </Scene>
   </Router>
)
export default Routes
