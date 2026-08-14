import * as core from "@actions/core";
import * as github from "@actions/github";

function run() {
    core.notice('Hello from my custom JavaScript Action!');
}

run();