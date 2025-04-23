
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/login/login'
import PosPage from './pages/pos/pos_page'
import ReportsPage from './pages/reports/reports_page'

function App() {

  return (
    <>
    <Routes>
      {/* Ruta para la página de inicio */}
      <Route path="/" element={<LoginPage></LoginPage>} />
      
      {/* Ruta para la página de punto de venta */}
      <Route path="/pos" element={<PosPage></PosPage>} />
      
      {/* Ruta para la página de reportes */}|
      <Route path="/reports" element={<ReportsPage></ReportsPage>} />
      
     
    </Routes>
  </>
  )
}

export default App
