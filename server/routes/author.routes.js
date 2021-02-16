const AuthorController = require("../controllers/author.controller");
module.exports = app => {
    app.post("/api/newauthor", AuthorController.createAuthor);
    app.get("/api/authors",AuthorController.allAuthor);
    app.delete("/api/delete/:id",AuthorController.deleteAuthor);
    app.get("/api/authors/:id",AuthorController.getAuthor);
    app.put("/api/:id/edit",AuthorController.updateAuthor);
}