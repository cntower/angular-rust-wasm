#!/usr/bin/env sh

if [ -e "`pwd`/src/pkg/worker" ]
then echo "You already have a 'src/pkg/worker'";

else
  echo "You haven't a 'src/pkg/worker' so we build it";
  ./build-worker.sh
fi
