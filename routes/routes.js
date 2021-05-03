// fake some JSON data
const users = [{
        id: 1,
        name: "megaphieu",
        email: "megaphieu@gmail.com",
    },
    {
        id: 2,
        name: "TTP",
        email: "17520883@gm.uit.edu.vn",
    },
];

// Router
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });
}

// Export the router
module.exports = router;
