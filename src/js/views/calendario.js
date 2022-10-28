import React from "react";
import { InlineWidget } from "react-calendly";

export class Calendario extends React.Component {
  componentDidMount() {
    // whatever stuff you need here
  }
  componentWillUnmount() {
    // whatever cleanup stuff you need here
  }
  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/lorehuincahue/30min"
        styles={{
            height: '500px',
        }}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '064439',
          textColor: '4d5055',
          height: '200px',
          Width: '200px'
        }}     
        />
      </div>
    );
  }
}