const express = require('express');
const app = express();

app.use(express.json());

app.post('/roblox_action', (req, res) => {
    const { action_type, user_id, reason } = req.body;
    console.log(`Action: ${action_type}, User: ${user_id}, Reason: ${reason}`);
    res.send('Action received');
});

const PORT = process.env.PORT || 1024;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
