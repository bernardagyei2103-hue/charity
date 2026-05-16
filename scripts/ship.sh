#!/usr/bin/env bash
# Stage everything, commit, and rely on Husky post-commit to push → GitHub → Vercel.
set -euo pipefail
cd "$(dirname "$0")/.."
MSG="${*:-chore: update Bridge Builders site}"
git add -A
if git diff --cached --quiet; then
  echo "No staged changes."
  exit 0
fi
git commit -m "$MSG"
