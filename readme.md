# Intercom Events Uploader

Intercom doesn't have any functionality to upload a .csv to backdate or manually add *Events*, it's only possible to upload a .csv to backdate or add *Custom Attributes*, & things such as contact information etc. I wrote this script to solve that problem.

## Requirements:
* Node
* Fetch (npm install fetch)

You can run node scripts from the terminal by being in the correct directory and typing `node FILENAME.js`

## How it works:
Your *Events* need to be in JSON format (the Intercom API only takes JSON objects). The easiest thing (I found) to do is to have all your events in a .csv file, then use an online file formatting tool (such as https://csvjson.com/csv2json) to get the required format.

Copy & paste your JSON objects into the array `const postArrayOfEvents = [];`

You'll need to add in your Bearer Token which is specific to your own Intercom account in the Authorization header `'Authorization': 'Bearer <<TOKEN HERE>>'` **Never share this token online.**

You should now be set to begin uploading Events to the Intercom API.

## Notes:
Please refer to the Intercom documentation regarding rate limiting. I experienced some issues when trying to do bulk upload, so just a word of caution on that one.

I found that it often took some time for the *Events* to show on the platform. Sometimes it was immediate, sometimes not.

Intercom also has functionality to ensure duplicates do not get uploaded, but it's pretty opaque how that works.

I hope that people find this little script useful.