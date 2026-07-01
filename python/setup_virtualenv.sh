#!/usr/bin/env bash

# 1. Safety Check: Ensure the script is sourced, not just executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
  echo "❌ Error: To activate the environment in your current terminal, you MUST source this script."
  echo "👉 Please run: source ${0}"
  exit 1
fi

echo "====== Python Environment Setup ======"

# 2. Get the directory where this script lives (the 'python' folder)
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" 1>/dev/null 2>/dev/null && pwd )"

# 3. Step up one level to get the root directory ('PORTfolIO')
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# 4. Define the target virtual environment path
VENV_NAME="pip_packages"
VENV_PATH="$ROOT_DIR/$VENV_NAME"

# 5. Create the virtual environment if it doesn't exist
if [ ! -d "$VENV_PATH" ]; then
  echo "🐍 Creating virtual environment '$VENV_NAME' at $VENV_PATH..."
  python3 -m venv "$VENV_PATH"
  echo "✅ Virtual environment created successfully."
else
  echo "ℹ️ Virtual environment '$VENV_NAME' already exists. Skipping creation."
fi

# 6. Activate the environment
echo "🚀 Activating the environment..."
source "$VENV_PATH/bin/activate"

echo "✨ Done! You are now using the '$VENV_NAME' environment."