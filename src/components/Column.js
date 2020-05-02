import React from 'react';
import Row from './Row';

function Column(col){
    let rowIterator = [1, 2, 3];
    let rowSpaceClass = 'mb-3';
  
    if(col.category.category === 'Computers'){
      if(col.row > 1) {
        rowIterator = [4];
        rowSpaceClass = 'mb-5';
      }
    }else{
      if(col.row > 1) {
        rowIterator = [4, 5];
        rowSpaceClass = 'mb-5';
      }
    }
  
    return(
      <div className={`card-deck webmd-card-deck ${rowSpaceClass} text-left`}>
        {
        rowIterator.map((row, index) =>   
          <Row key={row} colNum={row} category={col.category} />
        )}        
    </div>
    );
  }


export default Column;