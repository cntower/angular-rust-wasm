#!/usr/bin/env sh

set -ex

wasm-pack build wasm/julia --out-dir ../../src/pkg/julia
