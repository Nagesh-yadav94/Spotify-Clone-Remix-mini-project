import './index.css'
import Header from '../Header'
import Sidebar from '../Sidebar'
import EditorPicks from '../EditorPicks'
import Categories from '../Categories'
import NewReleases from '../NewReleases'

const Home = () => (
  <>
    <Header />
    <Sidebar />
    <div data-testid="homePage" className="home-page">
      <div className="playlist-container">
        <EditorPicks />
      </div>

      <div className="playlist-container">
        <Categories />
      </div>

      <div className="playlist-container">
        <NewReleases />
      </div>
    </div>
  </>
)

export default Home
