import axios from "axios";

export async function addComment(pullRequest, repository, workspace, comment) {
  try {
    const addCommentResponse = await axios.post(
      `https://api.bitbucket.org/2.0/repositories/${workspace}/${repository}/pullrequests/${pullRequest}/comments`,
      {
        content: {
          raw: comment,
        },
      },
      {
        auth: {
          username: process.env.BITBUCKET_USERNAME,
          password: process.env.BITBUCKET_PASSWORD,
        },
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log(`Comment has been added successfully\nView at:${addCommentResponse.data.links.html.href}`);
  } catch (err) {
    console.log(err);
  }
}