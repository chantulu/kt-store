import React, { ReactNode, useEffect, useRef } from 'react'

function MapComponent(props: {
  center: google.maps.LatLng
  zoom: number
  children: ReactNode
}) {
  console.log(props)
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = React.useState<google.maps.Map>()
  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: props.center,
          zoom: props.zoom
        })
      )
    }
  }, [map, ref])

  return (
    <>
      <div
        ref={ref}
        id="map"
        style={{ minWidth: '500px', minHeight: '500px' }}
      />
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map })
        }
      })}
    </>
  )
}

export default MapComponent
