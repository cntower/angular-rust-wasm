#!/usr/bin/env sh

set -ex

wasm-pack build wasm/console_log --out-dir ../../src/pkg/console_log
