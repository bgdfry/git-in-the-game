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
    const view = graph;
    this.setState({commits: false, issues: false, pullRequests: false});
    this.setState({[view]: true});
  }

  displayGraph() {
    let data;
    let graphData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [12, 10, 25, 14, 1, 2, 0],
      previousWeekData: [8, 12, 28, 11, 10, 6, 2],
      title: 'Commits This Week VS Last Week'
    };
    let graphData2 = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [1, 1, 2, 1, 1, 2, 0],
      previousWeekData: [2, 2, 3, 1, 1, 0, 2],
      title: 'Issues This Week VS Last Week'
    };
    let graphData3 = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [1, 4, 3, 2, 1, 0, 1],
      previousWeekData: [0, 0, 1, 3, 2, 1, 1],
      title: 'PRs This Week VS Last Week'
    };
    const { commits, issues, pullRequests } = this.state;
    if(commits){ data = graphData; }
    if(issues){ data = graphData2; }
    if(pullRequests){ data = graphData3; }
    return LineGraph(data);
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
          <section className='repo-chart'>
            { this.displayGraph() }
          </section>
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
