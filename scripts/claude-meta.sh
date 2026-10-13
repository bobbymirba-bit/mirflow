#!/usr/bin/env bash
# Launch Claude Code against the Meta Muse endpoint.
# Requires MODEL_API_KEY in the environment (never commit the key).
set -euo pipefail

if [ -z "${MODEL_API_KEY:-}" ]; then
  echo "MODEL_API_KEY is not set. Run: export MODEL_API_KEY='<your key>'" >&2
  exit 1
fi

export ANTHROPIC_BASE_URL="https://api.meta.ai"
export ANTHROPIC_AUTH_TOKEN="$MODEL_API_KEY"
export ANTHROPIC_MODEL="muse-wonder-1.0"
export ANTHROPIC_DEFAULT_OPUS_MODEL="muse-wonder-1.0"
export ANTHROPIC_DEFAULT_SONNET_MODEL="muse-wonder-1.0"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="muse-wonder-1.0"
export CLAUDE_CODE_SUBAGENT_MODEL="muse-wonder-1.0"

exec claude "$@"
