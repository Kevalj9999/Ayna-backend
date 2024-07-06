module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/findMessagesByUsername/:username', // Change path to accept username
            handler: 'message.findMessagesByUsername', // Update handler to findMessagesByUsername
            config: {
                auth: false,
            },
        }
    ]
};
