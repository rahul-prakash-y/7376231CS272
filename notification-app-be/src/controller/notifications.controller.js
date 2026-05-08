const axios = require("axios")

async function getNotifications(req, res) {
    const { limit, page, notification_type } = req.params;
    try {
            const notifications = await axios.get(`http://4.224.186.213/evaluation-service/notifications?limit=${limit}&page=${page}&notification_type=${notification_type}`,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWh1bC5jczIzQGJpdHNhdGh5LmFjLmluIiwiZXhwIjoxNzc4MjM4ODYwLCJpYXQiOjE3NzgyMzc5NjAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkY2I5YWM5MC00MTE0LTQ5ZWYtOGZiOS02MDhiZTlkNWE1OTIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYWh1bCBwIiwic3ViIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1In0sImVtYWlsIjoicmFodWwuY3MyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJyYWh1bCBwIiwicm9sbE5vIjoiNzM3NjIzMWNzMjcyIiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1IiwiY2xpZW50U2VjcmV0Ijoid0ptcGJHZXpKUkR0RlZwZyJ9.qfo8v2RZaf2qdGJMIKA-7tawYQCbWCY75bEocemb9TU"
                    }
                }
            );
            if (notifications.data.notifications.length > 0) {
                return res.status(200).json({ message: "Notifications fetched successfully.", notifications: notifications.data.notifications })
            } else {
                return res.status(404).json({ message: "No notifications found." })
            }
    } catch (error) {
        console.log("Error while fetching Notifications: ", error);
    }
}

module.exports = {
    getNotifications
}