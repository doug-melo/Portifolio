import Header from "../src/components/Header"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header></Header>
      <Outlet/>
    </>
  )
}

export default App
