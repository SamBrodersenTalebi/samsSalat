#!/bin/sh
# Exit on any error
set -e

# Execute the command passed to the docker container
exec "$@"