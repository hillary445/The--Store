import Navbar from "./Navbar"
import Home from "./Home"
import LiquorList from "./LiquorList"

function App() {
  const { isLoggedIn } = useContext(AuthContext)

  //Search state
  const [searchQuery, setSearchQuery] = useState("")

  //Age verification
  const [ageVerified, setAgeVerified] = useState(() => {
    return sessionStorage.getItem('ageVerified') === 'true'
  })

  if (!ageVerified) {
    return <AgeGate onVerify={() => setAgeVerified(true)} />
  }

  if (!isLoggedIn) return <LogInForm />

  return (
    <>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop searchQuery={searchQuery} />}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LogInForm />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
