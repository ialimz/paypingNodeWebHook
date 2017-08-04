/**
 * Created by Ali Moazenzadeh on 7/8/17.
 */
"use strict";
var appRouter = function (app) {
 app.post('/webhook', function (req, res) {
        const amount = req.body['Amount'];
        const code = req.body['Code'];
        const title = req.body['Title'];
        const description = req.body['Description'];
        const name = req.body['Name'];
        const phone = req.body['Phone'];
        const email = req.body['Email'];
        const address = req.body['Address'];
        const city = req.body['City'];
        const postalCode = req.body['PostalCode'];
        const payDate = req.body['PayDate']; //in UnixTimeStamp format
        const customField = req.body['CustomField'];
        
        //DO WHATEVER YOU WANT WITH FOLLOWING CONSTs
        
    });
}

module.exports = appRouter;

