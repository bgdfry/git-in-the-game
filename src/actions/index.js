const types = {
  USERNAME: 'USERNAME',
  GET_EVENTS: 'GET_EVENTS'
  SET_PUSH_EVENTS
};

export const submitUserName = (inputVal) => {
  localStorage.setItem('username', JSON.stringify(inputVal));
  return {
    type: types.USERNAME,
    username: inputVal
  };
};

export const getEvents = (data) => {
  return {
    type: types.GET_EVENTS,
    data: data
  };
};

export const setPushEvents = (data) => {
  return {
    type: types.GET_EVENTS,
    data: data
  };
}

+getThisWeeksEvents(arr) {
+  arr.filter(e => {
+    return  moment.utc(e.created_at).year() == moment.utc(new Date()).year() &&
+            moment.utc(e.created_at).isoWeek() == moment.utc(new Date()).isoWeek();
+  });
+}

+sortCommitsByDay(pushEvents) {
+  let arr = [0,0,0,0,0,0,0];
+  pushEvents.map(e => {
+    return e.payload.commits ?
+      arr[moment(e.created_at).isoWeekday() - 1] += e.payload.commits.length : null
+  });
+  return arr
+}

export const getPullRequestByType = (events, prType) => {
  const pullReq = events.filter((ghEvent) => ghEvent.type==='PullRequestEvent');
  const listOfPullRequests = pullReq.filter((obj) => obj.payload.action===`${prType}`);
  return listOfPullRequests
}

export const getIssueByType = (events, issueType) => {
  const issues = events.filter((ghEvent) => ghEvent.type==='IssuesEvent');
  const listOfIssues = issues.filter((obj) => obj.payload.action===`${issueType}`);
  return listOfIssues
}

export const getAllCommits = (events) => {
  const pushEvents = events.filter((ghEvent) => ghEvent.type==='PushEvent')
  const allCommits = pushEvents.map((obj) => obj.payload.commits.length);
  return allCommits
}
