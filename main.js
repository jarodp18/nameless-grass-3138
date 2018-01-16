/**
 * My API Sandbox
 * 
 */










Sandbox.define('/health','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.render(resp1);
})

Sandbox.define('/passwords/recovery','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "PasswordRecoveryResponse",
            "id": "C0312345667",
            "attributes": {
                "expiresAt": "2015-11-03T10:15:57.000Z",
                "status": "RECOVERY",
                "recoveryToken": "VBQ0gwBp5LyJJFdbmWCM"
            }
        }
    });
})

Sandbox.define('/users/me/passwords/change','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "PasswordChangeResponse",
            "id": "C0312345667",
            "recoveryQuestion": {
                "question": "Who's a major player in the cowboy scene?"
            }
        }
    });
})

Sandbox.define('/passwords/recovery/tokens/verify','POST', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "RecoveryTokenVerificationResponse",
            "id": "C0312345667",
            "attributes": {
                "stateToken": "00lMJySRYNz3u_rKQrsLvLrzxiARgivP8FB_1gpmVb",
                "expiresAt": "2015-11-03T10:15:57.000Z",
                "status": "RECOVERY"
            }
        },
        "included": [{
            "type": "user",
            "id": "00ub0oNGTSWTBKOLGLNR",
            "attributes": {
                "passwordChanged": "2015-09-08T20:14:45.000Z",
                "profile": {
                    "login": "dade.murphy@example.com",
                    "firstName": "Dade",
                    "lastName": "Murphy",
                    "locale": "en_US",
                    "timeZone": "America/Los_Angeles"
                },
                "recoveryQuestion": {
                    "question": "Who's a major player in the cowboy scene?"
                }
            }
        }]
    });
})

Sandbox.define('/passwords/recovery/questions/verify','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "RecoveryQuestionVerificationResponse",
            "id": "C0312345667",
            "attributes": {
                "stateToken": "00lMJySRYNz3u_rKQrsLvLrzxiARgivP8FB_1gpmVb",
                "expiresAt": "2015-11-03T10:15:57.000Z",
                "status": "PASSWORD_RESET"
            }
        }
    });
})

Sandbox.define('/passwords/reset','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "PasswordResetResponse",
            "id": "C0312345667",
            "attributes": {
                "expiresAt": "2015-11-03T10:15:57.000Z",
                "status": "SUCCESS",
                "sessionToken": "00t6IUQiVbWpMLgtmwSjMFzqykb5QcaBNtveiWlGeM"
            }
        }
    });
})

Sandbox.define('/policies/password','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "PasswordPolicy",
            "attributes": {
                "complexity": {
                    "minLength": 8,
                    "minLowerCase": 1,
                    "minUpperCase": 1,
                    "minNumber": 1,
                    "minSymbol": 0,
                    "excludeUsername": true
                },
                "age": {
                    "maxAgeDays": 0,
                    "expireWarnDays": 0,
                    "minAgeMinutes": 0,
                    "historyCount": 0
                },
                "lockout": {
                    "maxAttempts": 10,
                    "autoUnlockMinutes": 0,
                    "showLockoutFailures": false
                }
            }
        }
    });
})

Sandbox.define('/complaints-fed-mock','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/selfInsurance/complaints/lodge','POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/selfInsurance/certificateOfCurrency/standard', 'POST', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "StandardCertificateOfCurrencyLocation",
            "id": "b12591b-9175-4a2b-8171-2a796dd51881",
            "attributes": {
                "method": "GET",
                "url": "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf"
            }
        }
    });
})



Sandbox.define('/selfInsurance/certificateOfCurrency/custom', 'POST', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})

Sandbox.define('/customers/me','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "type": "customer",
        "id": "2aed591b-9175-4a2b-8171-2a796dd51885",
        "attributes": {
            "firstName": "John",
            "lastName": "Smith",
            "contact": {
                "emailAddress": "john.smith@mail.com",
                "phone": [{
                    "type": "mobile",
                    "number": "0412343121",
                    "countryCode": "",
                    "extension": ""
                }, {
                    "type": "home",
                    "number": "",
                    "countryCode": "",
                    "extension": ""
                }, {
                    "type": "other",
                    "number": "",
                    "countryCode": "",
                    "extension": ""
                }, {
                    "type": "fax",
                    "number": "",
                    "countryCode": "",
                    "extension": ""
                }],
                "phonePreference": "mobile"
            },
            "organisation": {
                "agency": "DOH",
                "district": "WSydney"
            }
        }
    });
})

Sandbox.define('/selfInsurance/certificateOfCurrency/claims/serviceProvider','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
      "type": "claimsServiceProvider",
      "id": "89coi6984fba1a00b916pe811310c825",
      "providerName": "Allianz",
      "claimType": "Injured Worker",
      "claimsPortalUrl": "https://claims.allianz.com.au/login",
      "websiteUrl": "https://provider.allianz.com.au/claims",
      "websiteDisplayName": "Service Provider Portal",
      "contact": {
        "name": "John Doe",
        "phone": "02 99998888",
        "emailAddress": "john.doe@allianz.com.au"
      }
    });
})

Sandbox.define('/events','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
       "data": {
        "type": "GetEventsResponse",
        "id": "EV10009876",
        "attributes": {
          "events": [
            {
              "ID": "11223344",
              "eventType": "Seminar",
              "eventLocation": "Sydney CBD",
              "eventTitle": "Health Promotion Network",
              "eventDescription": "Assess feasibility - POC",
              "eventCategory": "Other/General",
              "EventCode": "93NKJQRF7MC",
              "EventStartDate": "2017-12-22T09:00:00",
              "EventEndDate": "2017-12-28T13:00:00",
              "EventStatus": "Completed",
              "Capacity": "5"
            },
            {
              "ID": "22334455",
              "eventType": "Event",
              "eventLocation": "Sydney CBD",
              "eventTitle": "Health Promotion Network",
              "eventDescription": "Assess feasibility - POC",
              "eventCategory": "Enterprise Risk Management",
              "EventCode": "93NKJQRF7MC",
              "EventStartDate": "2017-12-22T09:00:00",
              "EventEndDate": "2017-12-28T13:00:00",
              "EventStatus": "Completed",
              "Capacity": "5"
            }
          ]
        }
      }
    });
})

Sandbox.define('/referenceData/products','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json(
        {
      "data": [
        {
          "type": "LOB",
          "id": "MI",
          "attributes": {
            "name": "Miscellaneous Insurance",
            "lob": "SI",
            "iconUrl": "https://icare.nsw.gov.au/icons/misc.png",
            "description": "Any other types of incidents"
          }
        },
        {
          "type": "LOB",
          "id": "MV",
          "attributes": {
            "name": "Motor Vehicles Insurance",
            "lob": "SI",
            "iconUrl": "https://icare.nsw.gov.au/icons/motor.png",
            "description": "Cars, buses and other vehicles"
          }
        }
      ]
    }
        );
})

Sandbox.define('/selfInsurance/certificateOfCurrency/authorisedPersons','GET', function(req, res){
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
      "type": "AuthorisedCoCUser",
      "agencyName": "DOH",
      "data": [
        {
          "id": "2aed591b-9175-4a2b-8171-2a796dd5188",
          "attributes": {
            "firstName": "John",
            "lastName": "Smith",
            "contact": {
              "emailAddress": "john.smith@mail.com",
              "phone": "02 9123 4567"
            }
          }
        },
        {
          "id": "89coi6-984fb-a1a0-0b916-pe811310c82",
          "attributes": {
            "firstName": "Jane",
            "lastName": "Doe",
            "contact": {
              "emailAddress": "jane.doe@mail.com",
              "phone": "02 9999 0000"
            }
          }
        }
      ]
    });
})

Sandbox.define('/events/{id}','GET', function(req, res){
    
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "data": {
            "type": "GetEventResponse",
            "attributes": {
                "ID": "11223344",
                "eventLocation": "Sydney CBD",
                "eventTitle": "Health Promotion Network",
                "eventDescription": "Assess feasibility - POC",
                "eventCategory": "Other/General",
                "eventCode": "93NKJQRF7MC",
                "eventStartDate": "2017-12-22T09:00:00",
                "eventEndDate": "2017-12-28T13:00:00",
                "eventStatus": "Completed",
                "valueProposition": "Value proposition",
                "intendedParticipants": "",
                "learningOutcomes": "Health and Safety",
                "quote": "This has been a great experience",
                "fullAddress": "309 Kent St, Sydney, NSW, 2000",
                "price": "104.95",
                "accessibility": "wheel chair access available",
                "serviceLine": "SI",
                "capacity": "Seats available",
                "channel": "Seminar",
                "fullDescription": "A long description, which includes specifics on event dates and times"
            }
        }
    });
})

Sandbox.define('/test2','GET', function(req, res) {
    // Check the request, make sure it is a compatible type
    if (!req.is('application/json')) {
        return res.send(400, 'Invalid content type, expected application/json');
    }
    
    // Set the type of response, sets the content type.
    res.type('application/json');
    
    // Set the status code of the response.
    res.status(200);
    
    // Send the response body.
    res.json({
        "status": "ok"
    });
})