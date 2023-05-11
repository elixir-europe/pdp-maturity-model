#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Push modifications
git add -A
git commit -m 'deploy'
git push -f git@github.com:elixir-europe/fosp-maturity-model.git main:main

touch .output/public/.nojekyll

push-dir --dir=dist --branch=gh-pages --cleanup