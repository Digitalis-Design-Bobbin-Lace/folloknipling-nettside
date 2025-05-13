#!/usr/bin/env bash
npm run build
git push origin $(git subtree split --prefix dist HEAD):gh-pages --force