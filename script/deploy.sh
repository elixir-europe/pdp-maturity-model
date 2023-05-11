#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# Push modifications
git add -A
git commit -m 'deploy'
git push -f git@github.com:elixir-europe/fosp-maturity-model.git main:main

# navigate into the build output directory
touch .output/public/.nojekyll 

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:elixir-europe/fosp-maturity-model.git main:gh-pages
cd ..