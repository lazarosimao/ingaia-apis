FROM mongo

COPY seed/init.json /init.json

CMD mongoimport --host mongo --db ingaia_db --collection api_db --type json --file /init.json --jsonArray
