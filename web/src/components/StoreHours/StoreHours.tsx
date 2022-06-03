import parseHours from 'lib/parseHours'
import React from 'react'
import { Wrapper } from './styles'

interface OpenHours {
  openfrom: string
  opento: string
}

type Props = {
  title: string
  subtitle: string
  hours: {
    weekdays: OpenHours
    saturday: OpenHours
    sunday: OpenHours
  }
}

//TODO: Pick appropiate headers (h1,h2s etc...)
export default function intex({ title, subtitle, hours }: Props) {
  return (
    <Wrapper>
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      <div>
        <div>
          <div>
            {parseHours(hours.weekdays.openfrom)}
            &nbsp;-&nbsp;
            {parseHours(hours.weekdays.opento)}
          </div>
          <div>Monday to Friday</div>
        </div>
        {/* if hours for both saturday and sunday are the same then display 'weekends' */}
        {hours.saturday.openfrom === hours.sunday.openfrom &&
          hours.saturday.opento === hours.sunday.opento && (
            <div>
              <div>
                {parseHours(hours.saturday.openfrom)}
                &nbsp;-&nbsp;
                {parseHours(hours.sunday.opento)}
              </div>
              <div>Weekends</div>
            </div>
          )}
        {/* if hours for both saturday and sunday are not the same then display 'saturday' and sunday */}
        {(hours.saturday.openfrom !== hours.sunday.openfrom ||
          hours.saturday.opento !== hours.sunday.opento) && (
          <>
            <div>
              <div>
                {parseHours(hours.saturday.openfrom)}
                &nbsp;-&nbsp;
                {parseHours(hours.saturday.opento)}
              </div>
              <div>Saturday</div>
            </div>
            <div>
              <div>
                {parseHours(hours.sunday.openfrom)}
                &nbsp;-&nbsp;
                {parseHours(hours.sunday.opento)}
              </div>
              <div>Sunday</div>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  )
}
