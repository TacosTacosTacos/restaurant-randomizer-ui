curl --include --request PATCH "http://localhost:4741/patients/${ID}" \
--header "Content-Type: application/json" \
--data '{
  "patient": {
    "first_name": "'"${FIRST_NAME}"'",
    "last_name": "'"${LAST_NAME}"'"
  }
}'
