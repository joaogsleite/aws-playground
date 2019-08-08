#/usr/bin/env bash

mkdir -p ./ftp-server/
touch ./ftp-server/example-file

docker run -it --rm \
  -v $(pwd)/ftp-server:/home/vsftpd \
  -p 20:20 -p 21:21 -p 47400-47470:47400-47470 \
  -e FTP_USER=username \
  -e FTP_PASS=password \
  -e PASV_ADDRESS=127.0.0.1 \
  --name ftp \
  bogem/ftp
