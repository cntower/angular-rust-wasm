#!/usr/bin/env sh

set -ex

# This example requires to *not* create ES modules, therefore we pass the flag
# `--target no-modules`
wasm-pack build wasm/console_log --out-dir ../../src/pkg/worker --target no-modules
