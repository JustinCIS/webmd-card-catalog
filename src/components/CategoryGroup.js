import React from 'react';
import Column from './Column';

function CategoryGroup(category){
    const rows = [1, 2];
    return (        
        rows.map((row, index) =>      
          <Column key={index} row={row} category={category}/>
      )
    )
  }


export default CategoryGroup;