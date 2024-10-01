import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import AppRoutes from '../routes'

function App() {

  return (
    <Router>
      <Layout>
        <h1>Hiya</h1>
        <AppRoutes />
      </Layout>
    </Router>
  )
}

export default App