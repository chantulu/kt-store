import { Location } from 'components/Location'
import { StoreHours } from 'components/StoreHours'
import { TileMenu } from 'components/TileMenu'
import Home from 'templates/home'

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
        title="Our Location"
        placeName="KTs"
      />
    </Home>
  )
}
