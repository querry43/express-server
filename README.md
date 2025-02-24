express-server
==============

This is a sample express api which lacks any sort of persistance backend.  The
goal is to configure a backend and connect it up to this service.

This will be paired with administrator access to an AWS account which could
host the data store. If someone would prefer to use Azure or Google Cloud, they
are welcome to bring their own accounts.

Requirements
------------

* github.com account
* computer with internet access
* chrome, firefox, or safari
* access to an email account (for AWS access)

Getting started
---------------

1. Visit https://github.dev/querry43/express-server
2. Select `Run and Debug` on the left
3. Select `Continue Working On...`
4. Select `Create New Codespace` and pick a small instance type
5. In the terminal, run `npm install` and `npm start` to start the app

It should prompt to open a browser to port 3000.  This is how we will test the
API.

Tasks
-----

We want to store students (see index.mjs) and any other relevant data in a
persistent and mutable data store.  To this end, we need to:

* Select and create a data store in AWS.
* Configure the data store to hold student data.
* Configure this app to use the data store.

API
---

`GET /v1/students` - lists all students and their badges

`GET /v1/badgeSummary` - lists all badges and the number of times they have been awarded
