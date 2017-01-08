export default [
  {
    "id": "5117698863",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "opened",
      "number": 46,
      "pull_request": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46",
        "id": 100579708,
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/46",
        "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/46.diff",
        "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/46.patch",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/46",
        "number": 46,
        "state": "open",
        "locked": false,
        "title": "Refactor Api",
        "user": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "## Purpose\r\n\r\nRefactor the ability to make various api calls to gather data on our user.\r\n\r\n## Approach\r\n\r\n1. Add action for getting events.\r\n2. Add reducer for events.\r\n3. Add container to map state and dispatch to props for events\r\n4. Make new api call and confirm that everything is set up properly\r\n\r\n### Learning\r\n\r\nApi calls for events: https://developer.github.com/v3/activity/events/types/\r\n\r\n### Open Questions and Pre-Merge TODOs\r\n- This is ready to merge, but the next step should be to modify our data elsewhere (i.e. any function in the Home component)",
        "created_at": "2017-01-07T19:39:26Z",
        "updated_at": "2017-01-07T19:39:26Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46/commits",
        "review_comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46/comments",
        "review_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/46/comments",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/f113c449ba107edffb806ba6567686de2c86f62c",
        "head": {
          "label": "bcgodfrey91:refactor-api",
          "ref": "refactor-api",
          "sha": "f113c449ba107edffb806ba6567686de2c86f62c",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T19:34:28Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 213,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 13,
            "forks": 1,
            "open_issues": 13,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "bcgodfrey91:master",
          "ref": "master",
          "sha": "defc6795663339ad5f624c31abbcfb039d44ef4e",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T19:34:28Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 213,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 13,
            "forks": 1,
            "open_issues": 13,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46"
          },
          "html": {
            "href": "https://github.com/bcgodfrey91/git-in-the-game/pull/46"
          },
          "issue": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/46"
          },
          "comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/46/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/46/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/f113c449ba107edffb806ba6567686de2c86f62c"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 4,
        "additions": 48,
        "deletions": 7,
        "changed_files": 5
      }
    },
    "public": true,
    "created_at": "2017-01-07T19:39:26Z"
  },
  {
    "id": "5117691371",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489052491,
      "size": 9,
      "distinct_size": 3,
      "ref": "refs/heads/refactor-api",
      "head": "f113c449ba107edffb806ba6567686de2c86f62c",
      "before": "89e734f1ef0bf539253be2d9fd485e74d443379c",
      "commits": [
        {
          "sha": "09f93b3728ec9af528f82083ade28ba2e66bb6d1",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert commit",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/09f93b3728ec9af528f82083ade28ba2e66bb6d1"
        },
        {
          "sha": "6839ae2163f20fc092acda0c4909ada269fd5d1d",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add events to rootReducer\"\n\nThis reverts commit 0434df03db4acdeb61dc30c7ce485e8808a50323.",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/6839ae2163f20fc092acda0c4909ada269fd5d1d"
        },
        {
          "sha": "063c74633ae48617f131955c401369c267023bc5",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add event reducer\"\n\nThis reverts commit a3268070847b0fa9db2fb4f590b30dac456c3d0a.",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/063c74633ae48617f131955c401369c267023bc5"
        },
        {
          "sha": "349bccf5eb5283c907274c079f9407d355d8ea61",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add userEvents container\"\n\nThis reverts commit dc1ff0d3f61542f29e2f7357d8ac97e46e4ab1da.",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/349bccf5eb5283c907274c079f9407d355d8ea61"
        },
        {
          "sha": "25d8de048fc45750136433588153cd476bf5129d",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add getEvents action\"\n\nThis reverts commit 904e2a4668128cd3adfd2eeb8a52951b90f9bb13.",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/25d8de048fc45750136433588153cd476bf5129d"
        },
        {
          "sha": "defc6795663339ad5f624c31abbcfb039d44ef4e",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "Merge pull request #45 from bcgodfrey91/revert-master\n\nRevert master",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/defc6795663339ad5f624c31abbcfb039d44ef4e"
        },
        {
          "sha": "9d2433fa11f282be72cb0827d59d7a68d2ffda91",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Re-add userEvents container",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/9d2433fa11f282be72cb0827d59d7a68d2ffda91"
        },
        {
          "sha": "94c7f359e28d7c9c26cf8be18d83c745ed31e4bc",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Re-add event reducer; touch up userEvents",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/94c7f359e28d7c9c26cf8be18d83c745ed31e4bc"
        },
        {
          "sha": "f113c449ba107edffb806ba6567686de2c86f62c",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Re-add ability to make api call, grab events, and store them in state",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/f113c449ba107edffb806ba6567686de2c86f62c"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:34:28Z"
  },
  {
    "id": "5117670562",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "ref": "refactor-api",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "App used to track various Github activities. Uses Electron and React.",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-01-07T19:20:54Z"
  },
  {
    "id": "5117657060",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "opened",
      "number": 45,
      "pull_request": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45",
        "id": 100578815,
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/45",
        "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/45.diff",
        "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/45.patch",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/45",
        "number": 45,
        "state": "open",
        "locked": false,
        "title": "Revert master",
        "user": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "Removes commits that were pushed to master. Will revert our commits back to commit b16a8ad8576c1967b43bc6fb230236bd85cabe3f.",
        "created_at": "2017-01-07T19:13:05Z",
        "updated_at": "2017-01-07T19:13:05Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45/commits",
        "review_comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45/comments",
        "review_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/45/comments",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/25d8de048fc45750136433588153cd476bf5129d",
        "head": {
          "label": "bcgodfrey91:revert-master",
          "ref": "revert-master",
          "sha": "25d8de048fc45750136433588153cd476bf5129d",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T19:12:16Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 203,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 14,
            "forks": 1,
            "open_issues": 14,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "bcgodfrey91:master",
          "ref": "master",
          "sha": "eada5dc75076c1b1da7429707175234f74962171",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T19:12:16Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 203,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 14,
            "forks": 1,
            "open_issues": 14,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45"
          },
          "html": {
            "href": "https://github.com/bcgodfrey91/git-in-the-game/pull/45"
          },
          "issue": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/45"
          },
          "comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/45/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/45/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/25d8de048fc45750136433588153cd476bf5129d"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 5,
        "additions": 7,
        "deletions": 49,
        "changed_files": 5
      }
    },
    "public": true,
    "created_at": "2017-01-07T19:13:06Z"
  },
  {
    "id": "5117655853",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489038982,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/revert-master",
      "head": "25d8de048fc45750136433588153cd476bf5129d",
      "before": "349bccf5eb5283c907274c079f9407d355d8ea61",
      "commits": [
        {
          "sha": "25d8de048fc45750136433588153cd476bf5129d",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add getEvents action\"\n\nThis reverts commit 904e2a4668128cd3adfd2eeb8a52951b90f9bb13.",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/25d8de048fc45750136433588153cd476bf5129d"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:12:17Z"
  },
  {
    "id": "5117654537",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489038478,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/revert-master",
      "head": "349bccf5eb5283c907274c079f9407d355d8ea61",
      "before": "063c74633ae48617f131955c401369c267023bc5",
      "commits": [
        {
          "sha": "349bccf5eb5283c907274c079f9407d355d8ea61",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add userEvents container\"\n\nThis reverts commit dc1ff0d3f61542f29e2f7357d8ac97e46e4ab1da.",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/349bccf5eb5283c907274c079f9407d355d8ea61"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:11:26Z"
  },
  {
    "id": "5117652643",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489037753,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/revert-master",
      "head": "063c74633ae48617f131955c401369c267023bc5",
      "before": "6839ae2163f20fc092acda0c4909ada269fd5d1d",
      "commits": [
        {
          "sha": "063c74633ae48617f131955c401369c267023bc5",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add event reducer\"\n\nThis reverts commit a3268070847b0fa9db2fb4f590b30dac456c3d0a.",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/063c74633ae48617f131955c401369c267023bc5"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:10:12Z"
  },
  {
    "id": "5117650172",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489036830,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/revert-master",
      "head": "6839ae2163f20fc092acda0c4909ada269fd5d1d",
      "before": "09f93b3728ec9af528f82083ade28ba2e66bb6d1",
      "commits": [
        {
          "sha": "6839ae2163f20fc092acda0c4909ada269fd5d1d",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert \"Add events to rootReducer\"\n\nThis reverts commit 0434df03db4acdeb61dc30c7ce485e8808a50323.",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/6839ae2163f20fc092acda0c4909ada269fd5d1d"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:08:48Z"
  },
  {
    "id": "5117647611",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489035843,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/revert-master",
      "head": "09f93b3728ec9af528f82083ade28ba2e66bb6d1",
      "before": "eada5dc75076c1b1da7429707175234f74962171",
      "commits": [
        {
          "sha": "09f93b3728ec9af528f82083ade28ba2e66bb6d1",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Revert commit",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/09f93b3728ec9af528f82083ade28ba2e66bb6d1"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T19:07:06Z"
  },
  {
    "id": "5117645456",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "ref": "revert-master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "App used to track various Github activities. Uses Electron and React.",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-01-07T19:05:40Z"
  },
  {
    "id": "5117610482",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1489020829,
      "size": 5,
      "distinct_size": 5,
      "ref": "refs/heads/master",
      "head": "eada5dc75076c1b1da7429707175234f74962171",
      "before": "b16a8ad8576c1967b43bc6fb230236bd85cabe3f",
      "commits": [
        {
          "sha": "904e2a4668128cd3adfd2eeb8a52951b90f9bb13",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Add getEvents action",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/904e2a4668128cd3adfd2eeb8a52951b90f9bb13"
        },
        {
          "sha": "dc1ff0d3f61542f29e2f7357d8ac97e46e4ab1da",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Add userEvents container",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/dc1ff0d3f61542f29e2f7357d8ac97e46e4ab1da"
        },
        {
          "sha": "a3268070847b0fa9db2fb4f590b30dac456c3d0a",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Add event reducer",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/a3268070847b0fa9db2fb4f590b30dac456c3d0a"
        },
        {
          "sha": "0434df03db4acdeb61dc30c7ce485e8808a50323",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Add events to rootReducer",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/0434df03db4acdeb61dc30c7ce485e8808a50323"
        },
        {
          "sha": "eada5dc75076c1b1da7429707175234f74962171",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Adjust typos in actions, reducers, and components",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/eada5dc75076c1b1da7429707175234f74962171"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T18:42:50Z"
  },
  {
    "id": "5117479379",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1488967727,
      "size": 6,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "b16a8ad8576c1967b43bc6fb230236bd85cabe3f",
      "before": "f4789cab7e0394440345cf2d1a2cd01a31eda1b6",
      "commits": [
        {
          "sha": "0ec09a8e95f0ef65fca3a0f339463338062a8b53",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds appropriate font to circularprogressbar",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/0ec09a8e95f0ef65fca3a0f339463338062a8b53"
        },
        {
          "sha": "9e4ee8fe542f008d4cd70b05227ed2a42d3d4c09",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "moves navigation into component",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/9e4ee8fe542f008d4cd70b05227ed2a42d3d4c09"
        },
        {
          "sha": "e2dc44f2b4ad4ce4e90140335a3ee956b3c40972",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds styling changes to settings component",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/e2dc44f2b4ad4ce4e90140335a3ee956b3c40972"
        },
        {
          "sha": "be2a837d890f3c3c0664596b18df7df333e514d5",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Resolving conflicts plus cleanup",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/be2a837d890f3c3c0664596b18df7df333e514d5"
        },
        {
          "sha": "e0c9793781cd31f8a591ea4b744c028d0d9f5a69",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "cleans up warning",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/e0c9793781cd31f8a591ea4b744c028d0d9f5a69"
        },
        {
          "sha": "b16a8ad8576c1967b43bc6fb230236bd85cabe3f",
          "author": {
            "email": "bcgodfrey91@users.noreply.github.com",
            "name": "Ben Godfrey"
          },
          "message": "Merge pull request #37 from bcgodfrey91/styling-structure\n\nReusable Nav component and styling",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/b16a8ad8576c1967b43bc6fb230236bd85cabe3f"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T17:17:37Z"
  },
  {
    "id": "5117479368",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "closed",
      "number": 37,
      "pull_request": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37",
        "id": 100559699,
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37",
        "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37.diff",
        "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37.patch",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37",
        "number": 37,
        "state": "closed",
        "locked": false,
        "title": "Reusable Nav component and styling",
        "user": {
          "login": "blakeworsley",
          "id": 7154163,
          "avatar_url": "https://avatars.githubusercontent.com/u/7154163?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/blakeworsley",
          "html_url": "https://github.com/blakeworsley",
          "followers_url": "https://api.github.com/users/blakeworsley/followers",
          "following_url": "https://api.github.com/users/blakeworsley/following{/other_user}",
          "gists_url": "https://api.github.com/users/blakeworsley/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/blakeworsley/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/blakeworsley/subscriptions",
          "organizations_url": "https://api.github.com/users/blakeworsley/orgs",
          "repos_url": "https://api.github.com/users/blakeworsley/repos",
          "events_url": "https://api.github.com/users/blakeworsley/events{/privacy}",
          "received_events_url": "https://api.github.com/users/blakeworsley/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "This fixes some of the issues we were having with the styling and makes the nav component simple and easy to use. If anyone wants to make another nav, all they have to do is \r\n\r\n> <Navigation forward={true} route={'/repos'} />",
        "created_at": "2017-01-07T05:56:13Z",
        "updated_at": "2017-01-07T17:17:37Z",
        "closed_at": "2017-01-07T17:17:37Z",
        "merged_at": "2017-01-07T17:17:37Z",
        "merge_commit_sha": "b16a8ad8576c1967b43bc6fb230236bd85cabe3f",
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37/commits",
        "review_comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37/comments",
        "review_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37/comments",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/e0c9793781cd31f8a591ea4b744c028d0d9f5a69",
        "head": {
          "label": "bcgodfrey91:styling-structure",
          "ref": "styling-structure",
          "sha": "e0c9793781cd31f8a591ea4b744c028d0d9f5a69",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T17:17:37Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 217,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 10,
            "forks": 1,
            "open_issues": 10,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "bcgodfrey91:master",
          "ref": "master",
          "sha": "f4789cab7e0394440345cf2d1a2cd01a31eda1b6",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-07T17:02:31Z",
            "pushed_at": "2017-01-07T17:17:37Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 217,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 10,
            "forks": 1,
            "open_issues": 10,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37"
          },
          "html": {
            "href": "https://github.com/bcgodfrey91/git-in-the-game/pull/37"
          },
          "issue": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37"
          },
          "comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/e0c9793781cd31f8a591ea4b744c028d0d9f5a69"
          }
        },
        "merged": true,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "comments": 2,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 5,
        "additions": 109,
        "deletions": 132,
        "changed_files": 10
      }
    },
    "public": true,
    "created_at": "2017-01-07T17:17:37Z"
  },
  {
    "id": "5117479266",
    "type": "IssueCommentEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "created",
      "issue": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37",
        "repository_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
        "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37/labels{/name}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37/comments",
        "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37/events",
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37",
        "id": 199344153,
        "number": 37,
        "title": "Reusable Nav component and styling",
        "user": {
          "login": "blakeworsley",
          "id": 7154163,
          "avatar_url": "https://avatars.githubusercontent.com/u/7154163?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/blakeworsley",
          "html_url": "https://github.com/blakeworsley",
          "followers_url": "https://api.github.com/users/blakeworsley/followers",
          "following_url": "https://api.github.com/users/blakeworsley/following{/other_user}",
          "gists_url": "https://api.github.com/users/blakeworsley/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/blakeworsley/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/blakeworsley/subscriptions",
          "organizations_url": "https://api.github.com/users/blakeworsley/orgs",
          "repos_url": "https://api.github.com/users/blakeworsley/repos",
          "events_url": "https://api.github.com/users/blakeworsley/events{/privacy}",
          "received_events_url": "https://api.github.com/users/blakeworsley/received_events",
          "type": "User",
          "site_admin": false
        },
        "labels": [
          {
            "id": 511155704,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels/in%20progress",
            "name": "in progress",
            "color": "ededed",
            "default": false
          }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "comments": 1,
        "created_at": "2017-01-07T05:56:13Z",
        "updated_at": "2017-01-07T17:17:33Z",
        "closed_at": null,
        "pull_request": {
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/37",
          "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37",
          "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37.diff",
          "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37.patch"
        },
        "body": "This fixes some of the issues we were having with the styling and makes the nav component simple and easy to use. If anyone wants to make another nav, all they have to do is \r\n\r\n> <Navigation forward={true} route={'/repos'} />"
      },
      "comment": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments/271096542",
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/37#issuecomment-271096542",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/37",
        "id": 271096542,
        "user": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "created_at": "2017-01-07T17:17:33Z",
        "updated_at": "2017-01-07T17:17:33Z",
        "body": "Looks good!"
      }
    },
    "public": true,
    "created_at": "2017-01-07T17:17:33Z"
  },
  {
    "id": "5117433818",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1488949194,
      "size": 13,
      "distinct_size": 1,
      "ref": "refs/heads/api-calls",
      "head": "227619054b6243c247d9265ff491ba1b6d3fd01b",
      "before": "3b650b70b471c93df71aad9385a4018226019c83",
      "commits": [
        {
          "sha": "d14760df179b43c703a3df7feac1e03c2020c2d7",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds styling  to repos and adjusts classnames",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/d14760df179b43c703a3df7feac1e03c2020c2d7"
        },
        {
          "sha": "e309ca679cffbd4dbb1bb4b09ebc3f7c66ebc0d1",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds css and fixes index in repos",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/e309ca679cffbd4dbb1bb4b09ebc3f7c66ebc0d1"
        },
        {
          "sha": "a305b8cf89f1758a4943c4d745a5b70915960454",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "components re-routed",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/a305b8cf89f1758a4943c4d745a5b70915960454"
        },
        {
          "sha": "56ac52e9319bbf26d2b0b8f73fb51d49a0a901ae",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "invidual repo renders by name",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/56ac52e9319bbf26d2b0b8f73fb51d49a0a901ae"
        },
        {
          "sha": "591a1c9c77c860da455b01f2907eb375254be7b1",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "add back button to middle component",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/591a1c9c77c860da455b01f2907eb375254be7b1"
        },
        {
          "sha": "068bb515a38bf953fb05b41fe9447c0f010c8dd9",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "resolve mergies",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/068bb515a38bf953fb05b41fe9447c0f010c8dd9"
        },
        {
          "sha": "5c43d6978440552b1c0bf61b97a5a7fb1e0a461a",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "add welcome name on homepage",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/5c43d6978440552b1c0bf61b97a5a7fb1e0a461a"
        },
        {
          "sha": "bcd80949bcad2d6ad14780a3870dc9d6392a3f70",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "fix empty object default state bug",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/bcd80949bcad2d6ad14780a3870dc9d6392a3f70"
        },
        {
          "sha": "64b1608e08556fd6c93cdebc7d1bd519ee2e337f",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds repo compenent name with styling",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/64b1608e08556fd6c93cdebc7d1bd519ee2e337f"
        },
        {
          "sha": "8e753c450bd66aaa734759e767e8f8f626418f5e",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Merge pull request #29 from bcgodfrey91/component-flip-flop\n\nComponent flip flop",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/8e753c450bd66aaa734759e767e8f8f626418f5e"
        },
        {
          "sha": "4fe2b62b10788238e81fc1d530e3d43a31bd5ad7",
          "author": {
            "email": "blakeworsley@gmail.com",
            "name": "Blake Worsley"
          },
          "message": "adds more styling to settings component",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/4fe2b62b10788238e81fc1d530e3d43a31bd5ad7"
        },
        {
          "sha": "34c6b0878a006fe839a42c7f57d71ddeb007ef65",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "Merge pull request #32 from bcgodfrey91/repo-component\n\nRepo component",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/34c6b0878a006fe839a42c7f57d71ddeb007ef65"
        },
        {
          "sha": "227619054b6243c247d9265ff491ba1b6d3fd01b",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Merge master and fix conflicts",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/227619054b6243c247d9265ff491ba1b6d3fd01b"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-07T16:48:39Z"
  },
  {
    "id": "5111251535",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "opened",
      "number": 33,
      "pull_request": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33",
        "id": 100410279,
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/33",
        "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/33.diff",
        "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/33.patch",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/33",
        "number": 33,
        "state": "open",
        "locked": false,
        "title": "Api calls",
        "user": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "## Purpose\r\n\r\nSetup the ability to make various api calls to gather data on our user (to eventually be used for data visualization)\r\n\r\n## Approach\r\n\r\n1. Make basic fetch call to make sure we can grab the data we need.\r\n2. Create helper.js file in order to assure we don't run over the Github api limits.\r\n3. I made a state on the Home component to get the initial calls done quickly.\r\n3. Create various functions that allow for us to filter and map through data in order to get what we need for eventual data visualization\r\n4. Move functions over to Actions and state Store in order to make them compatible with Redux.\r\n\r\n### Learning\r\n\r\nApi calls for events: https://developer.github.com/v3/activity/events/types/\r\n\r\n### Open Questions and Pre-Merge TODOs\r\n- Can probably combine `getIssuesCreated()` and `getIssuesClosed()` into one function.\r\n- Need to transition most functions into Actions and the state into Store.",
        "created_at": "2017-01-06T05:00:48Z",
        "updated_at": "2017-01-06T05:00:48Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33/commits",
        "review_comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33/comments",
        "review_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/33/comments",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/3b650b70b471c93df71aad9385a4018226019c83",
        "head": {
          "label": "bcgodfrey91:api-calls",
          "ref": "api-calls",
          "sha": "3b650b70b471c93df71aad9385a4018226019c83",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-05T16:54:09Z",
            "pushed_at": "2017-01-06T04:49:26Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 195,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 8,
            "forks": 1,
            "open_issues": 8,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "bcgodfrey91:master",
          "ref": "master",
          "sha": "8e753c450bd66aaa734759e767e8f8f626418f5e",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-05T16:54:09Z",
            "pushed_at": "2017-01-06T04:49:26Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 195,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 8,
            "forks": 1,
            "open_issues": 8,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33"
          },
          "html": {
            "href": "https://github.com/bcgodfrey91/git-in-the-game/pull/33"
          },
          "issue": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/33"
          },
          "comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/33/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/33/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/3b650b70b471c93df71aad9385a4018226019c83"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 11,
        "additions": 3577,
        "deletions": 2,
        "changed_files": 2
      }
    },
    "public": true,
    "created_at": "2017-01-06T05:00:48Z"
  },
  {
    "id": "5111225917",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "ref": "api-calls",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "App used to track various Github activities. Uses Electron and React.",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-01-06T04:49:26Z"
  },
  {
    "id": "5109992058",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "push_id": 1486474679,
      "size": 13,
      "distinct_size": 1,
      "ref": "refs/heads/master",
      "head": "ea0d6ab42b49838654d19263a5fd166025d97bcc",
      "before": "a7e93b4d4be3920f623ac39a8f5e11ef90b3d8ce",
      "commits": [
        {
          "sha": "5fee5c46edf8ffbb63cd9e28d7122005e11febd2",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "input is rendering",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/5fee5c46edf8ffbb63cd9e28d7122005e11febd2"
        },
        {
          "sha": "82bdf4a0e2214523eebc88807f601420b99aff2f",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Resolving conflict",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/82bdf4a0e2214523eebc88807f601420b99aff2f"
        },
        {
          "sha": "775de221a0b88948dc6556c1c521e5b0ade4e41a",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "routing to component and redux taking value",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/775de221a0b88948dc6556c1c521e5b0ade4e41a"
        },
        {
          "sha": "718cee0a255e25d05996f8d573f53bdc7f7ba8f2",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Routing issue",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/718cee0a255e25d05996f8d573f53bdc7f7ba8f2"
        },
        {
          "sha": "21513321a3ae265a87608e3565a758a74ccc9ab8",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Merge branch 'master' into username-input",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/21513321a3ae265a87608e3565a758a74ccc9ab8"
        },
        {
          "sha": "be32d78014832a7411375e44e2c5ad4e1cec85bc",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "username not getting to store",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/be32d78014832a7411375e44e2c5ad4e1cec85bc"
        },
        {
          "sha": "ae1054ae369e2f3afd34f94a59bf7a420ac5f932",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Merge branch 'master' into username-input",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/ae1054ae369e2f3afd34f94a59bf7a420ac5f932"
        },
        {
          "sha": "0aa47a453fc24a7ab6107e024f91fddc03c8dd50",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Cant call container function",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/0aa47a453fc24a7ab6107e024f91fddc03c8dd50"
        },
        {
          "sha": "6c054d469e6f22882035dee646b223739ccfed64",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Conflict resolved",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/6c054d469e6f22882035dee646b223739ccfed64"
        },
        {
          "sha": "bd0d2b81c2b0a4372ac52895df5c2416ff86879f",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Potentially getting name into state",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/bd0d2b81c2b0a4372ac52895df5c2416ff86879f"
        },
        {
          "sha": "890c8376e748f7fcd9297d7be99bd43c39293b9e",
          "author": {
            "email": "misenckj@gmail.com",
            "name": "kylem038"
          },
          "message": "Name successfully saved in state using redux",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/890c8376e748f7fcd9297d7be99bd43c39293b9e"
        },
        {
          "sha": "9c124739f983dbda17b55fe263faaf700b3c5cee",
          "author": {
            "email": "caseymetz@gmail.com",
            "name": "Casey Metz"
          },
          "message": "flatten store to remove double username key, change argument name in action to reduce overloading the word username",
          "distinct": false,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/9c124739f983dbda17b55fe263faaf700b3c5cee"
        },
        {
          "sha": "ea0d6ab42b49838654d19263a5fd166025d97bcc",
          "author": {
            "email": "bcgodfrey91@users.noreply.github.com",
            "name": "Ben Godfrey"
          },
          "message": "Merge pull request #28 from bcgodfrey91/username-input\n\nUsername input",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits/ea0d6ab42b49838654d19263a5fd166025d97bcc"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-05T22:32:51Z"
  },
  {
    "id": "5109992018",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "action": "closed",
      "number": 28,
      "pull_request": {
        "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28",
        "id": 100376158,
        "html_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/28",
        "diff_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/28.diff",
        "patch_url": "https://github.com/bcgodfrey91/git-in-the-game/pull/28.patch",
        "issue_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/28",
        "number": 28,
        "state": "closed",
        "locked": false,
        "title": "Username input",
        "user": {
          "login": "kylem038",
          "id": 19688765,
          "avatar_url": "https://avatars.githubusercontent.com/u/19688765?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/kylem038",
          "html_url": "https://github.com/kylem038",
          "followers_url": "https://api.github.com/users/kylem038/followers",
          "following_url": "https://api.github.com/users/kylem038/following{/other_user}",
          "gists_url": "https://api.github.com/users/kylem038/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/kylem038/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/kylem038/subscriptions",
          "organizations_url": "https://api.github.com/users/kylem038/orgs",
          "repos_url": "https://api.github.com/users/kylem038/repos",
          "events_url": "https://api.github.com/users/kylem038/events{/privacy}",
          "received_events_url": "https://api.github.com/users/kylem038/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "",
        "created_at": "2017-01-05T22:26:42Z",
        "updated_at": "2017-01-05T22:32:50Z",
        "closed_at": "2017-01-05T22:32:50Z",
        "merged_at": "2017-01-05T22:32:50Z",
        "merge_commit_sha": "ea0d6ab42b49838654d19263a5fd166025d97bcc",
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28/commits",
        "review_comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28/comments",
        "review_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/28/comments",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/9c124739f983dbda17b55fe263faaf700b3c5cee",
        "head": {
          "label": "bcgodfrey91:username-input",
          "ref": "username-input",
          "sha": "9c124739f983dbda17b55fe263faaf700b3c5cee",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-05T16:54:09Z",
            "pushed_at": "2017-01-05T22:32:50Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 178,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 5,
            "forks": 1,
            "open_issues": 5,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "bcgodfrey91:master",
          "ref": "master",
          "sha": "a7e93b4d4be3920f623ac39a8f5e11ef90b3d8ce",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77092459,
            "name": "git-in-the-game",
            "full_name": "bcgodfrey91/git-in-the-game",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "description": "App used to track various Github activities. Uses Electron and React.",
            "fork": false,
            "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/deployments",
            "created_at": "2016-12-21T23:02:17Z",
            "updated_at": "2017-01-05T16:54:09Z",
            "pushed_at": "2017-01-05T22:32:50Z",
            "git_url": "git://github.com/bcgodfrey91/git-in-the-game.git",
            "ssh_url": "git@github.com:bcgodfrey91/git-in-the-game.git",
            "clone_url": "https://github.com/bcgodfrey91/git-in-the-game.git",
            "svn_url": "https://github.com/bcgodfrey91/git-in-the-game",
            "homepage": null,
            "size": 178,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "CSS",
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 1,
            "mirror_url": null,
            "open_issues_count": 5,
            "forks": 1,
            "open_issues": 5,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28"
          },
          "html": {
            "href": "https://github.com/bcgodfrey91/git-in-the-game/pull/28"
          },
          "issue": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/28"
          },
          "comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/issues/28/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/pulls/28/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/bcgodfrey91/git-in-the-game/statuses/9c124739f983dbda17b55fe263faaf700b3c5cee"
          }
        },
        "merged": true,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "comments": 1,
        "review_comments": 0,
        "maintainer_can_modify": false,
        "commits": 12,
        "additions": 111,
        "deletions": 84,
        "changed_files": 13
      }
    },
    "public": true,
    "created_at": "2017-01-05T22:32:51Z"
  },
  {
    "id": "5096346497",
    "type": "MemberEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "member": {
        "login": "kylem038",
        "id": 19688765,
        "avatar_url": "https://avatars.githubusercontent.com/u/19688765?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kylem038",
        "html_url": "https://github.com/kylem038",
        "followers_url": "https://api.github.com/users/kylem038/followers",
        "following_url": "https://api.github.com/users/kylem038/following{/other_user}",
        "gists_url": "https://api.github.com/users/kylem038/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kylem038/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kylem038/subscriptions",
        "organizations_url": "https://api.github.com/users/kylem038/orgs",
        "repos_url": "https://api.github.com/users/kylem038/repos",
        "events_url": "https://api.github.com/users/kylem038/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kylem038/received_events",
        "type": "User",
        "site_admin": false
      },
      "action": "added"
    },
    "public": true,
    "created_at": "2017-01-03T17:54:28Z"
  },
  {
    "id": "5096107336",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77118194,
      "name": "bcgodfrey91/socket-hunt",
      "url": "https://api.github.com/repos/bcgodfrey91/socket-hunt"
    },
    "payload": {
      "push_id": 1482025417,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/api-call",
      "head": "03c555ac730205fd85afb89f4af2092905274f47",
      "before": "82b290faed40a5f37f3b87d7f4fddde4158d02c2",
      "commits": [
        {
          "sha": "03c555ac730205fd85afb89f4af2092905274f47",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Add ability to cycle through different topics",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/socket-hunt/commits/03c555ac730205fd85afb89f4af2092905274f47"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-03T17:08:59Z"
  },
  {
    "id": "5095944547",
    "type": "PullRequestEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 68747091,
      "name": "turingschool/front-end-submissions-public",
      "url": "https://api.github.com/repos/turingschool/front-end-submissions-public"
    },
    "payload": {
      "action": "opened",
      "number": 28,
      "pull_request": {
        "url": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28",
        "id": 99982910,
        "html_url": "https://github.com/turingschool/front-end-submissions-public/pull/28",
        "diff_url": "https://github.com/turingschool/front-end-submissions-public/pull/28.diff",
        "patch_url": "https://github.com/turingschool/front-end-submissions-public/pull/28.patch",
        "issue_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/28",
        "number": 28,
        "state": "open",
        "locked": false,
        "title": "Update homework_submissions.md",
        "user": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "body": "I didn't know this existed. Added homework.",
        "created_at": "2017-01-03T16:40:25Z",
        "updated_at": "2017-01-03T16:40:25Z",
        "closed_at": null,
        "merged_at": null,
        "merge_commit_sha": null,
        "assignee": null,
        "assignees": [

        ],
        "milestone": null,
        "commits_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28/commits",
        "review_comments_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28/comments",
        "review_comment_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/comments{/number}",
        "comments_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/28/comments",
        "statuses_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/statuses/75bc12c5c344fa90b77b8630acb67b9dc59ae701",
        "head": {
          "label": "bcgodfrey91:patch-1",
          "ref": "patch-1",
          "sha": "75bc12c5c344fa90b77b8630acb67b9dc59ae701",
          "user": {
            "login": "bcgodfrey91",
            "id": 15333016,
            "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bcgodfrey91",
            "html_url": "https://github.com/bcgodfrey91",
            "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
            "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
            "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
            "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
            "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
            "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
            "type": "User",
            "site_admin": false
          },
          "repo": {
            "id": 77933693,
            "name": "front-end-submissions-public",
            "full_name": "bcgodfrey91/front-end-submissions-public",
            "owner": {
              "login": "bcgodfrey91",
              "id": 15333016,
              "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/bcgodfrey91",
              "html_url": "https://github.com/bcgodfrey91",
              "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
              "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
              "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
              "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
              "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
              "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
              "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/bcgodfrey91/front-end-submissions-public",
            "description": "Scores for projects and homework",
            "fork": true,
            "url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public",
            "forks_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/forks",
            "keys_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/teams",
            "hooks_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/hooks",
            "issue_events_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues/events{/number}",
            "events_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/events",
            "assignees_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/assignees{/user}",
            "branches_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/branches{/branch}",
            "tags_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/tags",
            "blobs_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/languages",
            "stargazers_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/stargazers",
            "contributors_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/contributors",
            "subscribers_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/subscribers",
            "subscription_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/subscription",
            "commits_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/contents/{+path}",
            "compare_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/merges",
            "archive_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/downloads",
            "issues_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues{/number}",
            "pulls_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/labels{/name}",
            "releases_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/releases{/id}",
            "deployments_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/deployments",
            "created_at": "2017-01-03T16:26:22Z",
            "updated_at": "2016-12-09T02:33:27Z",
            "pushed_at": "2017-01-03T16:39:55Z",
            "git_url": "git://github.com/bcgodfrey91/front-end-submissions-public.git",
            "ssh_url": "git@github.com:bcgodfrey91/front-end-submissions-public.git",
            "clone_url": "https://github.com/bcgodfrey91/front-end-submissions-public.git",
            "svn_url": "https://github.com/bcgodfrey91/front-end-submissions-public",
            "homepage": "",
            "size": 302,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": null,
            "has_issues": false,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "open_issues_count": 0,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "base": {
          "label": "turingschool:master",
          "ref": "master",
          "sha": "0c7512cd64c774d15888f2d41246f2dabd45aa3c",
          "user": {
            "login": "turingschool",
            "id": 7934292,
            "avatar_url": "https://avatars.githubusercontent.com/u/7934292?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/turingschool",
            "html_url": "https://github.com/turingschool",
            "followers_url": "https://api.github.com/users/turingschool/followers",
            "following_url": "https://api.github.com/users/turingschool/following{/other_user}",
            "gists_url": "https://api.github.com/users/turingschool/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/turingschool/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/turingschool/subscriptions",
            "organizations_url": "https://api.github.com/users/turingschool/orgs",
            "repos_url": "https://api.github.com/users/turingschool/repos",
            "events_url": "https://api.github.com/users/turingschool/events{/privacy}",
            "received_events_url": "https://api.github.com/users/turingschool/received_events",
            "type": "Organization",
            "site_admin": false
          },
          "repo": {
            "id": 68747091,
            "name": "front-end-submissions-public",
            "full_name": "turingschool/front-end-submissions-public",
            "owner": {
              "login": "turingschool",
              "id": 7934292,
              "avatar_url": "https://avatars.githubusercontent.com/u/7934292?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/turingschool",
              "html_url": "https://github.com/turingschool",
              "followers_url": "https://api.github.com/users/turingschool/followers",
              "following_url": "https://api.github.com/users/turingschool/following{/other_user}",
              "gists_url": "https://api.github.com/users/turingschool/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/turingschool/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/turingschool/subscriptions",
              "organizations_url": "https://api.github.com/users/turingschool/orgs",
              "repos_url": "https://api.github.com/users/turingschool/repos",
              "events_url": "https://api.github.com/users/turingschool/events{/privacy}",
              "received_events_url": "https://api.github.com/users/turingschool/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/turingschool/front-end-submissions-public",
            "description": "Scores for projects and homework",
            "fork": false,
            "url": "https://api.github.com/repos/turingschool/front-end-submissions-public",
            "forks_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/forks",
            "keys_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/teams",
            "hooks_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/hooks",
            "issue_events_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/events{/number}",
            "events_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/events",
            "assignees_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/assignees{/user}",
            "branches_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/branches{/branch}",
            "tags_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/tags",
            "blobs_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/languages",
            "stargazers_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/stargazers",
            "contributors_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/contributors",
            "subscribers_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/subscribers",
            "subscription_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/subscription",
            "commits_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/contents/{+path}",
            "compare_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/merges",
            "archive_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/downloads",
            "issues_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues{/number}",
            "pulls_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/labels{/name}",
            "releases_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/releases{/id}",
            "deployments_url": "https://api.github.com/repos/turingschool/front-end-submissions-public/deployments",
            "created_at": "2016-09-20T19:40:32Z",
            "updated_at": "2016-12-09T02:33:27Z",
            "pushed_at": "2017-01-03T16:05:02Z",
            "git_url": "git://github.com/turingschool/front-end-submissions-public.git",
            "ssh_url": "git@github.com:turingschool/front-end-submissions-public.git",
            "clone_url": "https://github.com/turingschool/front-end-submissions-public.git",
            "svn_url": "https://github.com/turingschool/front-end-submissions-public",
            "homepage": "",
            "size": 302,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": null,
            "has_issues": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 27,
            "mirror_url": null,
            "open_issues_count": 2,
            "forks": 27,
            "open_issues": 2,
            "watchers": 0,
            "default_branch": "master"
          }
        },
        "_links": {
          "self": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28"
          },
          "html": {
            "href": "https://github.com/turingschool/front-end-submissions-public/pull/28"
          },
          "issue": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/28"
          },
          "comments": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/issues/28/comments"
          },
          "review_comments": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28/comments"
          },
          "review_comment": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/comments{/number}"
          },
          "commits": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/pulls/28/commits"
          },
          "statuses": {
            "href": "https://api.github.com/repos/turingschool/front-end-submissions-public/statuses/75bc12c5c344fa90b77b8630acb67b9dc59ae701"
          }
        },
        "merged": false,
        "mergeable": null,
        "mergeable_state": "unknown",
        "merged_by": null,
        "comments": 0,
        "review_comments": 0,
        "maintainer_can_modify": true,
        "commits": 1,
        "additions": 3,
        "deletions": 3,
        "changed_files": 1
      }
    },
    "public": true,
    "created_at": "2017-01-03T16:40:25Z",
    "org": {
      "id": 7934292,
      "login": "turingschool",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/turingschool",
      "avatar_url": "https://avatars.githubusercontent.com/u/7934292?"
    }
  },
  {
    "id": "5095941628",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77933693,
      "name": "bcgodfrey91/front-end-submissions-public",
      "url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public"
    },
    "payload": {
      "push_id": 1481973858,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/patch-1",
      "head": "75bc12c5c344fa90b77b8630acb67b9dc59ae701",
      "before": "0c7512cd64c774d15888f2d41246f2dabd45aa3c",
      "commits": [
        {
          "sha": "75bc12c5c344fa90b77b8630acb67b9dc59ae701",
          "author": {
            "email": "bcgodfrey91@users.noreply.github.com",
            "name": "Ben Godfrey"
          },
          "message": "Update homework_submissions.md",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/commits/75bc12c5c344fa90b77b8630acb67b9dc59ae701"
        }
      ]
    },
    "public": true,
    "created_at": "2017-01-03T16:39:56Z"
  },
  {
    "id": "5095934333",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77934624,
      "name": "bcgodfrey91/sql-example",
      "url": "https://api.github.com/repos/bcgodfrey91/sql-example"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-01-03T16:38:38Z"
  },
  {
    "id": "5095927829",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77934624,
      "name": "bcgodfrey91/sql-example",
      "url": "https://api.github.com/repos/bcgodfrey91/sql-example"
    },
    "payload": {
      "ref": null,
      "ref_type": "repository",
      "master_branch": "master",
      "description": null,
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2017-01-03T16:37:31Z"
  },
  {
    "id": "5095863062",
    "type": "ForkEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 68747091,
      "name": "turingschool/front-end-submissions-public",
      "url": "https://api.github.com/repos/turingschool/front-end-submissions-public"
    },
    "payload": {
      "forkee": {
        "id": 77933693,
        "name": "front-end-submissions-public",
        "full_name": "bcgodfrey91/front-end-submissions-public",
        "owner": {
          "login": "bcgodfrey91",
          "id": 15333016,
          "avatar_url": "https://avatars.githubusercontent.com/u/15333016?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/bcgodfrey91",
          "html_url": "https://github.com/bcgodfrey91",
          "followers_url": "https://api.github.com/users/bcgodfrey91/followers",
          "following_url": "https://api.github.com/users/bcgodfrey91/following{/other_user}",
          "gists_url": "https://api.github.com/users/bcgodfrey91/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/bcgodfrey91/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/bcgodfrey91/subscriptions",
          "organizations_url": "https://api.github.com/users/bcgodfrey91/orgs",
          "repos_url": "https://api.github.com/users/bcgodfrey91/repos",
          "events_url": "https://api.github.com/users/bcgodfrey91/events{/privacy}",
          "received_events_url": "https://api.github.com/users/bcgodfrey91/received_events",
          "type": "User",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/bcgodfrey91/front-end-submissions-public",
        "description": "Scores for projects and homework",
        "fork": true,
        "url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public",
        "forks_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/forks",
        "keys_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/teams",
        "hooks_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/hooks",
        "issue_events_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues/events{/number}",
        "events_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/events",
        "assignees_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/assignees{/user}",
        "branches_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/branches{/branch}",
        "tags_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/tags",
        "blobs_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/languages",
        "stargazers_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/stargazers",
        "contributors_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/contributors",
        "subscribers_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/subscribers",
        "subscription_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/subscription",
        "commits_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/contents/{+path}",
        "compare_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/merges",
        "archive_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/downloads",
        "issues_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/issues{/number}",
        "pulls_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/labels{/name}",
        "releases_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/releases{/id}",
        "deployments_url": "https://api.github.com/repos/bcgodfrey91/front-end-submissions-public/deployments",
        "created_at": "2017-01-03T16:26:22Z",
        "updated_at": "2016-12-09T02:33:27Z",
        "pushed_at": "2017-01-03T16:05:02Z",
        "git_url": "git://github.com/bcgodfrey91/front-end-submissions-public.git",
        "ssh_url": "git@github.com:bcgodfrey91/front-end-submissions-public.git",
        "clone_url": "https://github.com/bcgodfrey91/front-end-submissions-public.git",
        "svn_url": "https://github.com/bcgodfrey91/front-end-submissions-public",
        "homepage": "",
        "size": 302,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": null,
        "has_issues": false,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "public": true
      }
    },
    "public": true,
    "created_at": "2017-01-03T16:26:22Z",
    "org": {
      "id": 7934292,
      "login": "turingschool",
      "gravatar_id": "",
      "url": "https://api.github.com/orgs/turingschool",
      "avatar_url": "https://avatars.githubusercontent.com/u/7934292?"
    }
  },
  {
    "id": "5084531303",
    "type": "PushEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77118194,
      "name": "bcgodfrey91/socket-hunt",
      "url": "https://api.github.com/repos/bcgodfrey91/socket-hunt"
    },
    "payload": {
      "push_id": 1477893078,
      "size": 1,
      "distinct_size": 1,
      "ref": "refs/heads/api-call",
      "head": "82b290faed40a5f37f3b87d7f4fddde4158d02c2",
      "before": "3ac4d2eec14ab2f9b89d5bff4a9d4beb55204815",
      "commits": [
        {
          "sha": "82b290faed40a5f37f3b87d7f4fddde4158d02c2",
          "author": {
            "email": "bcgodfrey91@gmail.com",
            "name": "Ben Godfrey"
          },
          "message": "Make api call and render results.",
          "distinct": true,
          "url": "https://api.github.com/repos/bcgodfrey91/socket-hunt/commits/82b290faed40a5f37f3b87d7f4fddde4158d02c2"
        }
      ]
    },
    "public": true,
    "created_at": "2016-12-30T04:52:09Z"
  },
  {
    "id": "5063082719",
    "type": "MemberEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77092459,
      "name": "bcgodfrey91/git-in-the-game",
      "url": "https://api.github.com/repos/bcgodfrey91/git-in-the-game"
    },
    "payload": {
      "member": {
        "login": "Casey1449",
        "id": 18562083,
        "avatar_url": "https://avatars.githubusercontent.com/u/18562083?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Casey1449",
        "html_url": "https://github.com/Casey1449",
        "followers_url": "https://api.github.com/users/Casey1449/followers",
        "following_url": "https://api.github.com/users/Casey1449/following{/other_user}",
        "gists_url": "https://api.github.com/users/Casey1449/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Casey1449/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Casey1449/subscriptions",
        "organizations_url": "https://api.github.com/users/Casey1449/orgs",
        "repos_url": "https://api.github.com/users/Casey1449/repos",
        "events_url": "https://api.github.com/users/Casey1449/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Casey1449/received_events",
        "type": "User",
        "site_admin": false
      },
      "action": "added"
    },
    "public": true,
    "created_at": "2016-12-22T21:19:05Z"
  },
  {
    "id": "5059295758",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77118194,
      "name": "bcgodfrey91/socket-hunt",
      "url": "https://api.github.com/repos/bcgodfrey91/socket-hunt"
    },
    "payload": {
      "ref": "api-call",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "Randomly generating data visualizations for Product Hunt using React and Websockets",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2016-12-22T07:11:26Z"
  },
  {
    "id": "5059289040",
    "type": "CreateEvent",
    "actor": {
      "id": 15333016,
      "login": "bcgodfrey91",
      "display_login": "bcgodfrey91",
      "gravatar_id": "",
      "url": "https://api.github.com/users/bcgodfrey91",
      "avatar_url": "https://avatars.githubusercontent.com/u/15333016?"
    },
    "repo": {
      "id": 77121380,
      "name": "bcgodfrey91/product-hunt-server",
      "url": "https://api.github.com/repos/bcgodfrey91/product-hunt-server"
    },
    "payload": {
      "ref": "master",
      "ref_type": "branch",
      "master_branch": "master",
      "description": "Server to access Product Hunt api/cors errors are frustrating",
      "pusher_type": "user"
    },
    "public": true,
    "created_at": "2016-12-22T07:09:01Z"
  }
]
