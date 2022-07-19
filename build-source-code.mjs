#!/usr/bin/env zx

const core = require('@actions/core');
const github = require('@actions/github');
const zx =require('zx/globals');

try {
  const workspace=github.context.github_workspace;
  const github_account=github.context.github_actor;
  const user_work_space=workspace+"/"+github_account;
  console.log(user_work_space);
  
  zx cd (user_work_space);
  //modify maven package version
  const jar_version=core.getInput('JAR_VERSION');
  console.log(jar_version);
  zx echo (jar_version);
  zx mvn versions:set -DnewVersion=jar_version;
  //maven package
  zx mvn clean package -U
} catch (error) {
  core.setFailed(error.message);
}
