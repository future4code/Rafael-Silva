CREATE TABLE TodoListUser (
	id INT PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    nickname VARCHAR(255) UNIQUE NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE TodoListTask (
	id INT PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL, 
    status VARCHAR(255) NOT NULL DEFAULT "to_do",
    limit_date DATE NOT NULL,
    creator_user_id INT NOT NULL,
    FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
);


CREATE TABLE TodoListResponsibleUserTaskRelation (
	task_id INT,
    responsible_user_id INT,
    FOREIGN KEY (task_id) REFERENCES TodoListTask(id) ON DELETE CASCADE,
    FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id) ON DELETE CASCADE
);