#!/bin/bash

set -e

echo "Stopping Nginx..."

# nginx 중지
systemctl stop nginx || service nginx stop || true

echo "Frontend stopped successfully"
