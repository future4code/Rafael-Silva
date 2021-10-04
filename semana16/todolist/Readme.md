# To Do List

Um API simples de criação e gerenciamento de tarefas.

## ENDPOINTS

---

### **Endpoint**: Criar usuário

-   **Método:** POST
-   **Path:** `/user`
-   **Body:**

```json
{
    "name": "Astro Dev",
    "nickname": "astrodev",
    "email": "astro@dev.com"
}
```

---

### **Endpoint**: Pegar usuário pelo id

-   **Método:** GET
-   **Path:** `/user/:id`
-   **Path Param**: é o id do usuário
-   **Body de Resposta:**

```json
{
    "id": 001,
    "nickname": "astrodev"
}
```

---

### **Endpoint**: Editar usuário

-   **Método:** PUT
-   **Path:** `/user/edit/:id`
-   **Path Param**: é o id do usuário
-   **Body:**

```json
{
    "name": "Astro Dev",
    "nickname": "astrodev"
}
```

---

### **Endpoint**: Criar tarefa

-   **Método:** POST
-   **Path:** `/task`
-   **Body:**

```json
{
    "title": "Criar banco dos alunos",
    "description": "Devemos criar o banco dos alunos para o módulo do backend",
    "limitDate": "04/05/2020",
    "creatorUserId": 001
}
```

---

### **Endpoint**: Pegar tarefa pelo id

-   **Método:** GET
-   **Path:** `/task/:id`
-   **Path Param**: é o id da tarefa
-   **Body de Resposta:**

```json
{
    "taskId": "001",
    "title": "Criar banco dos alunos",
    "description": "Devemos criar o banco dos alunos para o módulo do backend",
    "limitDate": "04/05/2020",
    "status": "to_do",
    "creatorUserId": 001,
    "creatorUserNickname": "astrodev"
}
```

---

### **Endpoint**: Pegar todos os usuários

-   **Método:** GET
-   **Path:** `/user/all`
-   **Body de Resposta:**

```json
{
    "users": [
        {
            "id": 001,
            "nickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Pegar tarefas criadas por um usuário

-   **Método:** GET
-   **Path:** `/task?creatorUserId=id`
-   **Query String:** indica o id do usuário que criou através da chave `creatorUserId`
-   **Body de Resposta:**

```json
{
    "tasks": [
        {
            "taskId": 001,
            "title": "Criar banco dos alunos",
            "description": "Devemos criar o banco dos alunos para o módulo do backend",
            "limitDate": "04/05/2020",
            "creatorUserId": 001,
            "status": "to_do",
            "creatorUserNickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Pesquisar usuário

-   **Método:** GET
-   **Path:** `/user?query=astro`
-   **Query String:** indica o termo de busca através da chave `query`
-   **Body de Resposta:**

```json
{
    "users": [
        {
            "id": 001,
            "nickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Atribuir um usuário (ou mais usuários) responsável a uma tarefa

-   **Método:** POST
-   **Path:** `/task/responsible`
-   **Body:**

```json
{
    "task_id": 332,
    "responsible_user_id": 001 // or [001, 002]
}
```

---

### **Endpoint**: Pegar usuários responsáveis por uma tarefa

-   **Método:** GET
-   **Path:** `/task/:id/responsible`
-   **Path Param**: é o id da tarefa
-   **Body de Resposta:**

```json
{
    "users": [
        {
            "id": 001,
            "nickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Atualizar o status de uma ou várias tarefas

-   **Método:** PUT
-   **Path:** `/task/status/edit`
-   **Body:**

```json
{
    "task_ids": [001],
    "status": "done"
}
```

---

### **Endpoint**: Pegar todas as tarefas por status

-   **Método:** GET
-   **Path:** `/task/status?status=valor_do_status`
-   **Query String:** indica o status através da chave `status`
-   **Body de Resposta:**

```json
{
    "tasks": [
        {
            "taskId": 001,
            "title": "Criar banco dos alunos",
            "description": "Devemos criar o banco dos alunos para o módulo do backend",
            "limitDate": "04/05/2020",
            "creatorUserId": 001,
            "creatorUserNickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Pegar todas as tarefas atrasadas

-   **Método:** GET
-   **Path:** `/task/delayed`
-   **Body de Resposta:**

```json
{
    "tasks": [
        {
            "taskId": 001,
            "title": "Criar banco dos alunos",
            "description": "Devemos criar o banco dos alunos para o módulo do backend",
            "limitDate": "04/05/2020",
            "creatorUserId": 001,
            "creatorUserNickname": "astrodev"
        }
    ]
}
```

---

### **Endpoint**: Retirar um usuário responsável de uma tarefa

-   **Método:** DELETE
-   **Path:** `/task/:taskId/responsible/:responsibleUserId`
-   **Path Param**: o primeiro indica o id da task (`taskId`)e o segundo o id do usuário responsável (`responsibleUserId`)

---

### **Endpoint**: Procurar tarefa por termos

-   **Método:** GET
-   **Path:** `/task?query=banco`
-   **Query String:** indica o termo de busca através da chave `query`
-   **Body de Resposta:**

```json
{
    "tasks": [
        {
            "taskId": 001,
            "title": "Criar banco dos alunos",
            "description": "Devemos criar o banco dos alunos para o módulo do backend",
            "limitDate": "04/05/2020",
            "creatorUserId": 001,
            "creatorUserNickname": "astrodev"
        }
    ]
}
```

## Credits

-   [Rafael N. Silva](https://github.com/rafansilva) (Developer)
