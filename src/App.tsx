
import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
     <div>
      {/* Komponen lain di sini */}
      <Contact />
    </div>
    <div className="min-h-screen flex flex-col">
      {/* Konten website lainnya */}
      <Footer />
    </div>
    </>
  )
}

export default App
