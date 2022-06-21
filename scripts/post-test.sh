LAST_NAME="name"
FIRST_NAME="name"
ROLE="manager"

BODY='{"lastName":"'$LAST_NAME'","firstName":"'$FIRST_NAME'","role":"'$ROLE'"}'

curl \
  -X POST \
  -H "Content-Type:application/json" \
  -d "$BODY" \
  "http://localhost:2000/sign-up"
