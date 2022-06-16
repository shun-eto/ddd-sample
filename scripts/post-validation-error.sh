MESSAGE="message"

BODY='{"message":"'$MESSAGE'"}'

curl \
  -X POST \
  -H "Content-Type:application/json" \
  -d "$BODY" \
  "http://localhost:3000/validation-error" | jq
