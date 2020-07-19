#!/bin/bash
curl 'http://localhost:4000/graphql?' \
  -H 'Connection: keep-alive' \
  -H 'Accept: application/json' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:4000' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost:4000/' \
  -H 'Accept-Language: es-ES,es;q=0.9,en;q=0.8' \
  --data-binary '{"query":"{\n  hello\n}","variables":null}' \
  --compressed