#!/usr/bin/env sh

PKG_WORKERS_PATH="$(pwd)/pkg/workers/"

if [ -e "${PKG_WORKERS_PATH}$2" ]; then
  echo "You already have a '${PKG_WORKERS_PATH}$2' so we skip its build"
else
  echo "You haven't a '${PKG_WORKERS_PATH}$2' so we build it"
  set -ex

  # This example requires to *not* create ES modules, therefore we pass the flag
  # `--target no-modules`
  wasm-pack build wasm/$1 --out-dir ../../pkg/workers/$2 --target no-modules
fi
