import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/Login'
import Registration from './components/Registration'

import './App.css'

const App = () => (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
)

export default App