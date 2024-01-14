import Header from "./components/Header"
import Main from "./components/Main"

export default function Home() {
  return (
    <main className="sm:relative sm:overflow-x-clip">
      <Header/>
      <Main/>
    </main>
  )
}
