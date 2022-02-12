#!/usr/bin/env sh

./build-module.sh julia
./build-module.sh hello
./build-module.sh console_log

./build-worker.sh indexeddb indexeddb
./build-worker.sh console_log worker
