# 🚀 NestJS Boilerplate – JWT Auth + Refresh Tokens + Prisma + Swagger

A production-ready NestJS boilerplate with:

* JWT **Access** & **Refresh** tokens
* **Prisma ORM** integration
* **Swagger** API documentation
* **Validation**, **CORS**, **API Versioning**, and **Global Prefix**
* **.env** configuration for easy customization

---

## 📌 Features

* **Authentication** using JWT (access & refresh tokens)
* **Hashed refresh tokens** stored in DB for security
* **Swagger** API documentation with BearerAuth for both token types
* **Prisma ORM** for database access
* **Global validation pipe** for DTOs
* **Environment-based configuration**
* **CORS** setup for frontend communication
* API versioning & global prefixing

---

## 🛠 Technologies Used

* [NestJS](https://nestjs.com/)
* [Prisma](https://www.prisma.io/)
* [Swagger](https://swagger.io/)
* [Passport.js](https://www.passportjs.org/)
* [JWT](https://jwt.io/)
* [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
* TypeScript

---

## 📂 Folder Structure

```
src/
│
├── auth/
│   ├── dto/
│   │   ├── login.dto.ts
│   │   ├── register.dto.ts
│   │   └── tokens.dto.ts
│   ├── strategies/
│   │   ├── access-token.strategy.ts
│   │   └── refresh-token.strategy.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│
├── config/
│   ├── app-setup.ts
│   ├── cors.config.ts
│   ├── prefix.config.ts
│   ├── swagger.config.ts
│   ├── validation.config.ts
│   └── versioning.config.ts
│
├── prisma/
│   ├── prisma.module.ts
│   ├── prisma.service.ts
│
├── users/ (example resource)
│
├── app.module.ts
└── main.ts
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the project:

```env
# Server
PORT=3000
CORS_ORIGIN=http://localhost:3000
API_PREFIX=api
API_VERSION=1

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/nest_auth"

# JWT
JWT_ACCESS_SECRET=supersecretaccesstoken
JWT_ACCESS_EXPIRATION=15m
JWT_REFRESH_SECRET=supersecretrefreshtoken
JWT_REFRESH_EXPIRATION=7d
```

---

## 📖 API Documentation (Swagger)

Once the server is running, open:

```
http://localhost:3000/api-docs
```

Here you can:

* View all endpoints
* Test requests directly
* Provide **Bearer tokens** for protected routes

---

## 🔐 Authentication Flow

1. **Register**
   `POST /auth/register` → Returns access & refresh tokens
2. **Login**
   `POST /auth/login` → Returns access & refresh tokens
3. **Refresh**
   `POST /auth/refresh` → Requires refresh token, returns new tokens
4. **Logout**
   `POST /auth/logout` → Invalidates refresh token in DB

---

## 🛠 Step-by-Step Commands to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/nestjs-boilerplate.git
cd nestjs-boilerplate
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment

Create `.env` in project root (use example above).

### 4️⃣ Setup Database

Make sure your database is running (PostgreSQL/MySQL/SQLite).

Run migrations:

```bash
npx prisma migrate dev --name init_auth
```

(Optional) Open Prisma Studio:

```bash
npx prisma studio
```

### 5️⃣ Start the Project

```bash
npm run start:dev
```
