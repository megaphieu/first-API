// fake some JSON data
const users = [
    {
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
const router = (app) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });

    app.get("/users", (request, response) => {
        response.send(users);
    });

    // Display a single user by ID
    // Dấu ":" thể hiện "id" là 1 parameter.
    app.get("/users/:id", (request, response) => {
        const id = request.params.id;

        // pool.query("SELECT * FROM users WHERE id = ?", id, (error, result) => {
        //     if (error) throw error;

        //     response.send(result);
        // });
    });
};

// Export the router
module.exports = router;
