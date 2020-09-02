const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log("Begining PR lookup");
  const time = new Date().toTimeString();
} catch (error) {
  core.setFailed(error.message);
}
