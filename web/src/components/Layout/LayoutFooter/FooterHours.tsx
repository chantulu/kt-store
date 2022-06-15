import parseHours from 'lib/parseHours'
import React from 'react'
import { SiteSettings } from '../../../../SiteSettings'

type Props = {
  hours: SiteSettings['hours']
}

export default function FooterHours({ hours }: Props) {
  return (
    <div className='fw-bold'>
      <div>
        Mon-Fri: {parseHours(hours.weekdaysopen)}-
        {parseHours(hours.weekdaysclose)}
      </div>
      {/* if hours for both saturday and sunday are the same then display 'weekends' */}
      {hours.saturdayopen === hours.sundayopen &&
        hours.saturdayclose === hours.sundayclose && (
          <div>
            <div>
              Weekends: {parseHours(hours.saturdayopen)}
              &nbsp;-&nbsp;
              {parseHours(hours.saturdayclose)}
            </div>
          </div>
        )}
      {/* if hours for both saturday and sunday are not the same then display 'saturday' and sunday */}
      {(hours.saturdayopen !== hours.sundayopen ||
        hours.saturdayclose !== hours.sundayclose) && (
        <>
          <div>
            <div>
              {parseHours(hours.saturdayopen)}
              &nbsp;-&nbsp;
              {parseHours(hours.saturdayclose)}
            </div>
            <div>Saturday</div>
          </div>
          <div>
            <div>
              {parseHours(hours.sundayopen)}
              &nbsp;-&nbsp;
              {parseHours(hours.sundayclose)}
            </div>
            <div>Sunday</div>
          </div>
        </>
      )}
    </div>
  )
}
