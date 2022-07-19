#!/usr/bin/env zx

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const workspace=github.context.github_workspace;
  const github_account=github.context.github_actor;
  const user_work_space=workspace+"/"+github_account;
  
  cd (user_work_space);
  //modify maven package version
  const jar_version=core.getInput('JAR_VERSION');
  console.log(jar_version);
  echo (jar_version);
  mvn versions:set -DnewVersion=jar_version;
  //maven package
  mvn clean package -U
} catch (error) {
  core.setFailed(error.message);
}
