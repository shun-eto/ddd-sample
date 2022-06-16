NAME="name"

BODY='{"name":"'$NAME'"}'

curl \
  -X POST \
  -H "Content-Type:application/json" \
  -d "$BODY" \
  "http://localhost:3000/test" | jq
