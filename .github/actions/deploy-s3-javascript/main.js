import * as core from "@actions/core";
import * as github from "@actions/github";

// function run() {
//     core.notice('Hello from my custom JavaScript Action!');
// }

// run();

try {
  core.notice('Hello from my custom JavaScript Action!');
} catch (error) {
  core.setFailed(error.message);
}