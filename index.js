// import 'zx/globals'

const core = require('@actions/core');
const github = require('@actions/github');

try {
  const workspace=core.getInput('WORKSPACE');
  const github_account=github.context.actor;
  const user_work_space=workspace+"/"+github_account;
  console.log(user_work_space+"*******");
  
  const jar_version=core.getInput('JAR_VERSION');
  console.log(jar_version+"&&&&&&&&&&&");
  
//   cd (user_work_space);
//   //modify maven package version
//   const jar_version=core.getInput('JAR_VERSION');
//   console.log(jar_version);
//   echo (jar_version);
//   zx mvn versions:set -DnewVersion=jar_version;
//   //maven package
//   mvn clean package -U
} catch (error) {
  core.setFailed(error.message);
}
