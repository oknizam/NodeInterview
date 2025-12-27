# NGINX

nginx is web searver used to handle 
1. Reverse proxy 
2. API gateway
3. Http request cache
4. Load balancing (using round robin)
5. image, video ,auido file caching

6. forward proxy server:
Clients can access to server using vpn , so server doesn't know actual client address called forward proxy

7. Reverse proxy :

clients doesn't know actual server like nginx will be proxy server for main server


8. Using NGNIX we can serve static files like html , css, image

9. installation 

  1. using brew install nginx
  2. run `ngnix`
  3. /opt/homebrew/etc/nginx/nginx.conf -> config file
  ![alt text](<Screenshot 2025-12-27 at 3.24.24 PM.png>)
  4. After every change in config 
    run `nginx -s reload`



