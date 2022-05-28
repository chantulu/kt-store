import { Location } from 'components/Location'
import { StoreHours } from 'components/StoreHours'
import { TileMenu } from 'components/TileMenu'
import Home from 'templates/home'

//TODO: extract api key into custom env variable

export async function getStaticProps() {
  //I am pulling the latlong from the given address to avoid excessive api calls after the site has been built
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      '3710 Townline Rd #150 Abbotsford, BC V2T 5W8'
    )}&key=AIzaSyBj0UV4hrkm5K8WEARGXQD6gku6vkn1aC8`
  )
  const { results: googleapisResult } = await res.json()
  return {
    props: {
      coordinates: googleapisResult[0].geometry.location
    }
  }
}

export default function Index({
  coordinates
}: {
  coordinates: google.maps.LatLng
}) {
  return (
    <Home>
      {/* NOTE: Everything below this line will be dynamic and is not certain that these components will allways be present */}
      <StoreHours
        hours={{
          weekdays: { openfrom: '08:00', opento: '14:00' },
          saturday: { openfrom: '08:00', opento: '14:00' },
          sunday: { openfrom: '08:00', opento: '18:00' }
        }}
        title="Welcome to KT's Market"
        subtitle="A family-run, year-round farm market"
      />
      <TileMenu
        tiles={[
          { tag: 'Sweets and treats', title: 'Coffee and candy', image: '#' },
          { tag: 'Refreshing Drinks', title: 'Sports Drinks', image: '#' },
          { tag: 'Everyday Products', title: 'Cereals and Grains', image: '#' },
          { tag: 'Sweets and treats', title: 'Coffee and candy', image: '#' }
        ]}
      />
      <Location
        address={{
          line1: '3710 Townline Rd #150',
          line2: 'Abbotsford, BC V2T 5W8'
        }}
        latlng={coordinates}
        title="Our Location"
      />
    </Home>
  )
}
