Stage 1: 
    (Post) - http://localhost:3000/api/notifications
    body: 
        {
            "limit": 100,
            "page": 1,
            "notification_type": "Event"
        }

    response: 
        {
            notifications: [
                {
                    "_id": 676745353678979,
                    "type": "Result",
                    "message":"mid-sem",
                    "time-stamp":"2026-05-08 13:30"
                }
            ]
        }

    