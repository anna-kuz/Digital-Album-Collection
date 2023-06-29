# Digital-Album-Collection
Unit-2-Project

ROUTE TABLE
|       **URL**               | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**        | **Created Yet?**  |
| --------------------------- | -------------- | ------------- | --------------- | ------------------------ | ----------------- |
| /                           |                | GET           | read            | home.ejs                 | YES               |
| /albums                     | index          | GET           | read            | album-index.ejs            | YES               |
| /albums/:id                 | show           | GET           | read            | album-details.ejs          | YES               |
| /albums/new                 | new            | GET           |                 | album-pet.ejs              | YES               |
| /albums                     | create         | POST          | create          |                          | YES               |
| /albums/:id/edit            | edit           | GET           | read            | edit-album.ejs             | YES               |
| /albums/:id                 | update         | PATCH/PUT     | update          |                          | YES               |
| /albums/:id                 | destroy        | DELETE        | delete          |                          | YES               |
| /comments/                  | index          | GET           | read            | app-index.ejs            | NO                |
| /comments/:id               | show           | GET           | read            | app-details.ejs          | NO                |
| /comments/new/:albumId      | new            | GET           | read            | new-comment.ejs              | NO                |
| /comments/create/:albumId   | create         | POST          | create          |                          | NO                |
| /comments/:id               | destroy        | DELETE        | delete          |                          | NO                |
| /seed                       |                | GET           | delete & create |                          | YES               |
| /about                      |                | GET           |                 | about.ejs                | YES               |
| /*                          |                | GET           |                 | 404.ejs                  | YES               |
