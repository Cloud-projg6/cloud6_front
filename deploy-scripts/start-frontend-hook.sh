#!/bin/bash

sudo chown -R nginx:nginx /var/www/bookapp/frontend
sudo service nginx restart
