# Digital-Album-Collection
Unit-2-Project

ROUTE TABLE

|       **URL**   | **REST Route** | **HTTP Verb** | **CRUD Action** |   **EJS View(s)**   | **Created Yet?**  |
| --------------- | -------------- | ------------- | --------------- | ------------------- | ----------------- |
| /               |                | GET           | read            | home.ejs            | NO                |
| /albums         | index          | GET           | read            | pet-index.ejs       | NO                |
| /albums/:id     | show           | GET           | read            | pet-details.ejs     | NO                |
| /albums/new     | new            | GET           |                 | new-pet.ejs         | NO                |
| /albums         | create         | POST          | create          |                     | NO                |
| /albums/:id/edit| edit           | GET           | read            | edit-pet.ejs        | NO                |
| /albums/:id     | update         | PATCH/PUT     | update          |                     | NO                |
| /albums/:id     | destroy        | DELETE        | delete          |                     | NO                |
| /seed           |                | GET           | delete & create |                     | NO                |
| /about          |                | GET           |                 | about.ejs           | NO                |
| /*              |                | GET           |                 | 404.ejs             | NO                |
