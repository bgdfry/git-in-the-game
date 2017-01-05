import React from 'react';

export default class Repos extends React.Component {
  constructor() {
    super();
}


render(){
  return(
      <div className='home-container'>
        <section className='back back-left'> ▷ </section>

        <section className='home'>
          <section className='current-mod-stats'>
            <div className='stat'>

            </div>
            <div className=''>
              <div> 
                <h2>Mod 1</h2>
                <h4>Start Date:</h4>
                <input type='date' />
              </div>
              <div> 
                <h2>Mod 2</h2>
                <h4>Start Date:</h4>
                <input type='date' />
              </div>
              <div> 
                <h2>Mod 3</h2>
                <h4>Start Date:</h4>
                <input type='date' />
              </div>
              <div> 
                <h2>Mod 4</h2>
                <h4>Start Date:</h4>
                <input type='date' />
              </div>

            </div>
          </section>
        </section>
      </div>
    );
  }
};
