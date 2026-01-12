import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'

function Home({ housings }) {
   return (
      <main>
         <Banner withTitle={true} />
         <Gallery housings={housings} />
      </main>
   )
}

export default Home
