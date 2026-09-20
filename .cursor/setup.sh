#!/usr/bin/env bash
# Cloud Agent install script for the Leyland Cypress website.
# - Installs Node dependencies from the lockfile (idempotent).
# - Seeds placeholder Firebase client config into .env.local for any
#   NEXT_PUBLIC_FIREBASE_* value that is not already provided, so the app
#   renders out-of-the-box during development. Firebase's client SDK requires
#   these values to be present or the analytics initializer throws on the
#   client and blanks every page.
#
# To use a real Firebase project (and load live chart/table data), add the
# NEXT_PUBLIC_FIREBASE_* values as Cloud Agent Secrets. Real environment
# variables take precedence over the placeholders written here.
set -euo pipefail

cd "$(dirname "$0")/.."

npm ci

ENV_FILE=".env.local"
touch "$ENV_FILE"

seed() {
  local key="$1" val="$2"
  # Skip when a real value is already provided via the environment (Secrets).
  if [ -n "${!key:-}" ]; then
    return
  fi
  # Skip when the key already exists in .env.local.
  if grep -q "^${key}=" "$ENV_FILE" 2>/dev/null; then
    return
  fi
  echo "${key}=${val}" >> "$ENV_FILE"
}

seed NEXT_PUBLIC_FIREBASE_API_KEY "demo-api-key"
seed NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN "demo-project.firebaseapp.com"
seed NEXT_PUBLIC_FIREBASE_PROJECT_ID "demo-project"
seed NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET "demo-project.appspot.com"
seed NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID "0000000000"
seed NEXT_PUBLIC_FIREBASE_APP_ID "1:0000000000:web:0000000000000000000000"
seed NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID "G-0000000000"

echo "Install complete. Firebase config resolved (real Secrets override placeholders)."
