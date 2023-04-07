import React, { useState } from 'react'
import { latest, recommended, upcome } from '../dummyData'
import Homes from '../components/homes/Homes'
import Upcomming from '../components/upcomming/Upcomming'
 

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Upcomming Movies' />
      <Upcomming items={item} title='Latest Movies' />
    </>
  )
}

export default HomePage