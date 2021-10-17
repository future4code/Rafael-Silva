## LabECommerce:

No LabEcommerce você encontrará os melhores produtos para sua viagem espacial.

## Link:

-   https://labesystem5.herokuapp.com/

## ENDPOINTS

---

### **Endpoint**: Criar um usuário

-   **Método:** POST
-   **Path:** `/user`
-   **Body de Exemplo:**

```json
{
    "name": "Carlos",
    "email": "carlos@email.com",
    "age": 27
}
```

---

### **Endpoint**: Criar um produto

-   **Método:** POST
-   **Path:** `/product`
-   **Body de Exemplo:**

```json
{
    "name": "Camiseta Branca",
    "description": "Camiseta Slim Branca",
    "price": 9
}
```

---

### **Endpoint**: Criar uma viagem

-   **Método:** POST
-   **Path:** `/ticket`
-   **Body de Exemplo:**

```json
{
    "name": "Rio de Janeiro",
    "description": "Viagem para Rio de Janeiro RJ",
    "price": 1100,
    "origin": "22/10/2021",
    "destination": "24/10/2021"
}
```

---

### **Endpoint**: Listar todos os usuários

-   **Método:** GET
-   **Path:** `/users/all`

---

### **Endpoint**: Listar todos os produtos

-   **Método:** GET
-   **Path:** `/products/all`

---

### **Endpoint**: Listar todas as viagens

-   **Método:** GET
-   **Path:** `/tickets/all`

---

## Créditos

-   [Rafael N. Silva](https://github.com/rafansilva) (Developer)
-   [Labenu](https://www.labenu.com.br/) (Turma Lovalace)
