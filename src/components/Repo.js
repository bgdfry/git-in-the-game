import React from 'react';
import Navigation from './Navigation';
import userSettings from '../containers/userSettings';
import LineGraph from './LineGraph';


class Repo extends React.Component {
  constructor() {
    super();
    this.state = {
      commits: true,
      issues: false,
      pullRequests: false
    };
  }

  toggleGraphView(graph){
    debugger;
    const view = graph;
    this.setState({commits: false, issues: false, pullRequests: false});
    this.setState({[view]: true});
  }

  render(){
    const { commits, issues, pullRequests } = this.state;
    return(
      <section className='main-container'>
        <Navigation backward={true} route={'/repos'}/>
        <section className='repo-container'>
          <section className='repo-header'>
            <section className='repo-title'>
              <h1>REPO:{this.props.params.name}</h1>
            </section>
            <section className='repo-stars'>
              <h3>3</h3>
              <img src='./imgs/star.svg' />
            </section>
          </section>
          { LineGraph({
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              currentWeekData: [12, 10, 25, 14, 1, 2, 0],
              previousWeekData: [8, 12, 28, 11, 10, 6, 2],
              title: 'Commits This Week VS Last Week'
            })
          }
          <ul className='graph-buttons'>
            <li className={`graph-button ${commits ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('commits')}
              >COMMITS</li>
            <li className={`graph-button ${issues ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('issues')}
              >ISSUES</li>
            <li className={`graph-button ${pullRequests ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('pullRequests')}
              >PULL REQUESTS</li>
          </ul>
        </section>
      </section>
    );
  }
};

export default userSettings(Repo);
