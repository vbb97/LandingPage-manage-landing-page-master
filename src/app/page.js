import AlmostFooter from "./components/AlmostFooter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Secondary from "./components/Secondary"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <main className="sm:relative sm:overflow-x-clip">
      <Header/>
      <Main/>
      <Secondary/>
      <Testimonials/>
      <AlmostFooter/>
      <Footer/>
    </main>
  )
}
