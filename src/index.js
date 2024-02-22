#!/usr/bin/env node
import { program } from "commander";
import { addComment } from "./command/addComment.js";
import dotenv from "dotenv";
import { listOfRepo } from "./command/listOfRepo.js";
dotenv.config();

program
  .command("listofrepo")
  .description("list of repository")
  .argument("<workspace>")
  .action((workspace) => listOfRepo(workspace));

program
  .command("addcomment")
  .description("add comment to pull request")
  .requiredOption("-p, --pull-request <pr>", "Pull request number")
  .requiredOption("-r, --repository <repo>", "Repository name")
  .requiredOption("-w, --workspace <wspace>", "Workspace name")
  .requiredOption("-c, --comment <comment>", "Comment to add")
  .action(({ pullRequest, repository, workspace, comment }) => {
    addComment(pullRequest, repository, workspace, comment);
  });

program.parse(process.argv);
