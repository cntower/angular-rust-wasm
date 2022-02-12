#!/usr/bin/env sh

PKG_MODULES_PATH="$(pwd)/pkg/modules/"

if [ -e "${PKG_MODULES_PATH}$1" ]; then
  echo "You already have a '${PKG_MODULES_PATH}$1' so we skip its build"
else
  echo "You haven't a '${PKG_MODULES_PATH}$1' so we build it"
  set -ex
  wasm-pack build wasm/$1 --out-dir ../../pkg/modules/$1
fi

