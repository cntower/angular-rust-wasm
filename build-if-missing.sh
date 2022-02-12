#!/usr/bin/env sh

if [ -e "$(pwd)/src/pkg/worker" ]; then
  echo "You already have a 'src/pkg/worker' so we skip its build"

else
  echo "You haven't a 'src/pkg/worker' so we build it"
  ./build-worker.sh
fi

if [ -e "$(pwd)/src/pkg/console_log" ]; then
  echo "You already have a 'src/pkg/console_log' so we skip its build"

else
  echo "You haven't a 'src/pkg/console_log' so we build it"
  ./build-console_log.sh
fi

if [ -e "$(pwd)/src/pkg/julia" ]; then
  echo "You already have a 'src/pkg/julia' so we skip its build"

else
  echo "You haven't a 'src/pkg/julia' so we build it"
  ./build-julia.sh
fi

if [ -e "$(pwd)/src/pkg/hello" ]; then
  echo "You already have a 'src/pkg/hello' so we skip its build"

else
  echo "You haven't a 'src/pkg/hello' so we build it"
  ./build-hello.sh
fi

if [ -e "$(pwd)/src/pkg/indexeddb" ]; then
  echo "You already have a 'src/pkg/indexeddb' so we skip its build"
else
  echo "You haven't a 'src/pkg/indexeddb' so we build it"
  ./build-indexeddb.sh
fi
