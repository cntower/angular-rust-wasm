#!/usr/bin/env sh

set -ex

wasm-pack build wasm/hello --out-dir ../../src/pkg/hello
