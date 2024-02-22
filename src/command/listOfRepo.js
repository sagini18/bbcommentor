import axios from "axios";

export async function listOfRepo(workspace) {
  try {
    const listOfRepo = await axios.get(
      `https://api.bitbucket.org/2.0/repositories/${workspace}`,
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
    listOfRepo.data.values.forEach((repo) => {
      console.log(repo.full_name);
    });
  } catch (err) {
    console.log(err);
  }
}
