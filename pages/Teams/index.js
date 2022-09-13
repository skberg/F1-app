







export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://formula-1-standings.p.rapidapi.com/standings/drivers?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b')
  const Driver = await res.json()
  const round = await fetch('https://formula-1-standings.p.rapidapi.com/standings/constructors?rapidapi-key=9b15aed536mshb3682c458af5202p161c8bjsna0b6108ebd4b')
  const Races = await round.json()



  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      Driver,
      Races

    },
  }
}





const Teams = ({ Races }) => {


  const reaces = Races.results;
  return (
    <>





      {reaces.map((Results, i) => (
        <div key={i}>

          <a >
            <div>
              <ul>
                <li>{Results.team_name}</li>
                <li>{Results.points}</li>

              </ul>
            </div>
          </a>
        </div>
      ))}

    </>
  );
}

export default Teams;