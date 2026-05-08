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
            notificationType:{
                required: true,
                type: String,
                Enums: ["Event", "Result", "Placement"]
            },
            message:{
                required: true,
                type: String,  
            },
            isRead: {
                type: boolean,
                required: true,
                default: true,
            },
            studentID:{
                type: OjectId,
                required: true
            }

        }, { timeStamp: true})
    When thw data volume increases, the api call data size could increase which may cause a delay.
    I get offset and pagination in the payload to send the certain amount of datas.
    I choose NoSql MongoDB.


Stage 3:
    SELECT * FROM notifications
    WHERE studentID = 1042 AND isRead = false
    ORDER BY createdAt ASC;

    This is slow because it fetches all the type of notifications.
    I change the query to fetch only the required type of notification to decrease the load.
    Adding indexes on every column advice is effective because we can fetch the data with the index which improves the searching speed.

    SELECT * FROM notifications
    WHERE studentID = 1042 AND notificationType = "Placement" AND createdAt <= Date.now() - 7
    ORDERBY createdAt ASC;

Stage 4: 
    The notifications are being fetched on each page load for every student.
    The DB is getting overwhelmed which is causing a bad user experience.
    I have a solution to improve the performance by implementing the in memory DB to avoid the data fetching for every student from DB.

