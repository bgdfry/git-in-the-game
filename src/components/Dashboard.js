import React from 'react';
import Navigation from './Navigation';
import userSettings from '../containers/userSettings';
import userEvents from '../containers/userEvents';
import LineGraph from './LineGraph';


class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      commits: true,
      issuesOpened: false,
      issuesClosed: false,
      pullRequests: false
    };
  }

  toggleGraphView(graph){
    const view = graph;
    this.setState({commits: false, issuesOpened: false, issuesClosed: false, pullRequests: false});
    this.setState({[view]: true});
  }

  displayGraph() {
    let data;
    let currentWeekCommits;
    this.props.weeklyCommits.thisWeeksCommits ?  currentWeekCommits = this.props.weeklyCommits.thisWeeksCommits : currentWeekCommits = [1,1,1,1,1,1,1];
    let previousWeekCommits;
    this.props.weeklyCommits.lastWeeksCommits ?  previousWeekCommits = this.props.weeklyCommits.lastWeeksCommits : previousWeekCommits = [2,2,2,2,2,2,2];
    let graphData = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: currentWeekCommits,
      previousWeekData: previousWeekCommits,
      title: 'Commits This Week VS Last Week'
    };
    let graphData2 = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [4, 3, 2, 2, 1, 2, 0],
      // currentWeekData: this.props.currentWeekIssuesOpened,
      previousWeekData: [2, 2, 3, 1, 1, 0, 2],
      // previousWeekData: this.props.previousWeekIssuesOpened,
      title: 'Issues Opened This Week VS Last Week'
    };
    let graphData3 = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [1, 1, 2, 1, 1, 2, 0],
      // currentWeekData: this.props.currentWeekIssuesClosed,
      previousWeekData: [2, 2, 3, 1, 1, 0, 2],
      // previousWeekData: this.props.previousWeekIssuesClosed,
      title: 'Issues Closed This Week VS Last Week'
    };
    let graphData4 = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      currentWeekData: [1, 4, 3, 2, 1, 0, 1],
      // currentWeekData: this.props.currentWeekPrs,
      previousWeekData: [0, 0, 1, 3, 2, 1, 1],
      // previousWeekData: this.props.previousWeekPrs,
      title: 'PRs This Week VS Last Week'
    };
    const { commits, issuesOpened, issuesClosed, pullRequests } = this.state;
    if(commits){ data = graphData; }
    if(issuesOpened){ data = graphData2; }
    if(issuesClosed){ data = graphData3; }
    if(pullRequests){ data = graphData4; }
    return LineGraph(data);
  }

  render(){
    const { commits, issuesOpened, issuesClosed, pullRequests } = this.state;
    return(
      <section className='main-container'>
        <Navigation backward={true} route={'/home'}/>
        <section className='repo-container'>
          <section className='repo-chart'>
            { this.displayGraph() }
          </section>
          <ul className='graph-buttons'>
            <li className={`graph-button ${commits ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('commits')}
              >COMMITS</li>
            <li className={`graph-button ${issuesOpened ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('issuesOpened')}
              >ISSUES OPENED</li>
            <li className={`graph-button ${issuesClosed ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('issuesClosed')}
              >ISSUES CLOSED</li>
            <li className={`graph-button ${pullRequests ? 'selected-graph' : ''}`}
              onClick={() => this.toggleGraphView('pullRequests')}
              >PULL REQUESTS</li>
          </ul>
        </section>
      </section>
    );
  }
};

export default userEvents(userSettings(Dashboard));
