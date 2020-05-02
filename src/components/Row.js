import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import numbro from 'numbro';
import data from '../data.json';

function Row(row){
    const cardData = data[row.category.category].find(category=>{
      return row.colNum === category.id;
    })
    return (
      <div className="card webmd-card mb-0">
        <div className="webmd-card-body">
          <h3>{cardData.label}</h3>
          <p>{cardData.description}</p>            
          <div className="row webmd-row">
            <div className="col-sm">
              <div className="progress webmd-progress">
                <div className="progress-bar webmd-progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            <div className="col-sm webmd-stats">
              {cardData.stars} <FontAwesomeIcon icon="star" />
            </div>
            <div className="col-sm webmd-stats">
              { numbro(cardData.id).format({output: "ordinal"}) } <FontAwesomeIcon icon="chart-bar" />
            </div>
          </div>
          <button className="btn btn-link webmd-button">Continue <FontAwesomeIcon icon="angle-right" /></button>
        </div>
      </div>
    )
  }


export default Row;