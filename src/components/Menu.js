import React from 'react';

class Menu extends React.Component{

  render(){
    let sandwiches = ["Kylling/Bacon", "Kylling/Humus", "Falafel/Feta", "Laks med feta", "Æg og rejer", "Skinke med ost", "Hjemmelavet tunsalat", "Salami", "Spicy kylling", "Vegetar med humus"];
    let liSandwich = sandwiches.map(item =>{
      return(<li key={item}>{item}</li>)
    })
    return (
        <div id="menu">
            <div id="salat">
                <img alt ="salad image">
            
                </img>
                <p>
                  Text about salad
                </p>
            </div>
            <div>
              <img alt ="sandwich image">
              </img>
              <ol>
                {liSandwich}
              </ol>
            </div>
        </div>
      );
  }
  
}

export default Menu;