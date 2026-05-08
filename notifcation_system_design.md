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

Stage 2: 
    I suggest MongoDB because it store datas in the form of document type (JSON format).
    DB schema for notification:
        const notificationScheme = mongoose.Schema({
            type:{
                required: true,
                type: String,
            },
            message:{
                required: true,
                type: String,  
            } 
        }, { timeStamp: true})
    When thw data volume increases, the api call data size could increase which may cause a delay.
    I get offset and pagination in the payload to send the certain amount of datas.
    I choose NoSql MongoDB.


