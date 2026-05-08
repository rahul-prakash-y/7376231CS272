async function getNotifications(req, res) {
    const { limit, page, notification_type } = req.params;
    try {
        if (limit) {
            const notifications = await fetch(`http://4.224.186.213/evaluation-service/notifications?limit=${limit}&page=${page}&notification_type=${notification_type}`);
            if (notifications.notifications.length > 0) {
                return res.status(200).json({ message: "Notifications fetched successfully.", notifications: notifications.notifications })
            } else {
                return res.status(404).json({ message: "No notifications found." })
            }
        } else {
            const notifications = await fetch("http://4.224.186.213/evaluation-service/notifications",{
                headers:{
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyYWh1bC5jczIzQGJpdHNhdGh5LmFjLmluIiwiZXhwIjoxNzc4MjM3NDkzLCJpYXQiOjE3NzgyMzY1OTMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmNjZhYTJmNy03MWFmLTQ2MDItOWY0Yy0zYTIzMmJiNTMzZTQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJyYWh1bCBwIiwic3ViIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1In0sImVtYWlsIjoicmFodWwuY3MyM0BiaXRzYXRoeS5hYy5pbiIsIm5hbWUiOiJyYWh1bCBwIiwicm9sbE5vIjoiNzM3NjIzMWNzMjcyIiwiYWNjZXNzQ29kZSI6InVLYUpmbSIsImNsaWVudElEIjoiY2ViNmM3MGYtZmJkMC00NDY5LTg2YWYtZGY2MzdjYjQ4Nzg1IiwiY2xpZW50U2VjcmV0Ijoid0ptcGJHZXpKUkR0RlZwZyJ9.NiXEL18anLD1xNMnzQVBK73hrE_bEMRNDirXy5EYsE0"
                }
            });
            
                return res.status(200).json({ message: "Notifications fetched successfully.", notifications: notifications })
            
        }
    } catch (error) {
        console.log("Error while fetching Notifications: ", error);
    }
}

module.exports = {
    getNotifications
}