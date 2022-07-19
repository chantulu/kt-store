import ColoredHeader from 'components/Lib/ColoredHeader/ColoredHeader'
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
    <Wrapper className="container hours">
      <div className="row justify-content-lg-between justify-content-center">
        <div className="col-lg-6">
          <h2 className="h1">
            <ColoredHeader text={title} />
          </h2>
          <div>{subtitle}</div>
        </div>
        <div className="col-lg-4 col-xxl-3 py-5">
          <div className="hours-time__wrapper">
            <div className="hours-time h1">
              {parseHours(hours.weekdays.openfrom)}
              &nbsp;-&nbsp;
              {parseHours(hours.weekdays.opento)}
            </div>
            <div>Monday to Friday</div>
          </div>
          {/* if hours for both saturday and sunday are the same then display 'weekends' */}
          {hours.saturday.openfrom === hours.sunday.openfrom &&
            hours.saturday.opento === hours.sunday.opento && (
              <div className="hours-time__wrapper">
                <div className="hours-time h1">
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
              <div className="hours-time__wrapper">
                <div className="hours-time h1">
                  {parseHours(hours.saturday.openfrom)}
                  &nbsp;-&nbsp;
                  {parseHours(hours.saturday.opento)}
                </div>
                <div>Saturday</div>
              </div>
              <div className="hours-time__wrapper">
                <div className="hours-time h1">
                  {parseHours(hours.sunday.openfrom)}
                  &nbsp;-&nbsp;
                  {parseHours(hours.sunday.opento)}
                </div>
                <div>Sunday</div>
              </div>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
