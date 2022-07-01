import React from 'react'
import './Property.css'

const Property = ({property}) => {
    return (
        <React.Fragment>
          <div className="property">
            <div className="property-image">
              <img src={property.image} alt="property image"/>
            </div>
            <div className="property-details">
              <div className="property-details-2">
              <div className="property-details-2-l">
                <h3>{property.name}</h3>
                <h3>€{property.price}</h3>
              </div>
              <div className="property-details-2-r">
                <h3 className="profit">{property.profit}%</h3>
                <p className="profitability">profitability</p>
              </div>
              </div>
              <div className="property-details-1">
                <p>Funded by {property.investors} investors</p>
                <button className="invest-button">Invest</button>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}

export default Property;