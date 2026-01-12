import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
/**
 * Home page component
 * @param {JSON} housings - List of housing data
 * @returns {JSX.Element} Home page component
 */
function Home({ housings }) {
   return (
      <main>
         <Banner withTitle={true} />
         <Gallery housings={housings} />
      </main>
   )
}

export default Home
