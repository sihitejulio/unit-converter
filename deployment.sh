#!/usr/bin/env bash
# Build docker image & run
function build_and_run {
    docker build -t frontend_bank:v1 .
    docker run --name frontend_bank -d -p 8000:80 frontend_bank:v1
}

build_and_run
