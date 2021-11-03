--Up
CREATE TABLE task1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    status TEXT DEFAULT 'incomplete'
);

CREATE TABLE task2(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    task1Id INTEGER REFERENCES task1(id)
);

CREATE TABLE task3(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    task2Id INTEGER REFERENCES task2(id)
);

INSERT INTO task1 (name) values ('bruno');
INSERT INTO task1 (name) values ('jack');

INSERT INTO task2 (brand, model, ownerId) values ('audi', 'R8', 1);
INSERT INTO task2 (brand, model, ownerId) values ('mercedes', 'benz', 2);
