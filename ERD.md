## E-Learning Platform – Database ERD (Text-Based)

### Tables & Relationships

#### 1. `users`

* **id** (UUID, PK)
* **name** (VARCHAR 100, NOT NULL)
* **email** (VARCHAR 150, UNIQUE, NOT NULL)
* **password\_hash** (TEXT, NOT NULL)
* **role** (ENUM: 'student', 'admin', NOT NULL)
* **created\_at** (TIMESTAMP, DEFAULT NOW())

---

#### 2. `lectures`

* **id** (UUID, PK)
* **title** (VARCHAR 255, NOT NULL)
* **description** (TEXT)
* **grade\_level** (VARCHAR 50)
* **subject** (VARCHAR 100)
* **video\_url** (TEXT, NOT NULL)
* **created\_at** (TIMESTAMP, DEFAULT NOW())

---

#### 3. `lecture_codes`

* **id** (UUID, PK)
* **lecture\_id** (UUID, FK → lectures.id, ON DELETE CASCADE)
* **code** (CHAR(20), UNIQUE, NOT NULL)
* **is\_used** (BOOLEAN, DEFAULT FALSE)
* **used\_by** (UUID, FK → users.id)
* **used\_at** (TIMESTAMP)
* **created\_at** (TIMESTAMP, DEFAULT NOW())

---

#### 4. `lecture_access`

* **id** (UUID, PK)
* **user\_id** (UUID, FK → users.id, ON DELETE CASCADE)
* **lecture\_id** (UUID, FK → lectures.id, ON DELETE CASCADE)
* **access\_granted\_at** (TIMESTAMP, DEFAULT NOW())
* **access\_expires\_at** (TIMESTAMP, GENERATED ALWAYS AS access\_granted\_at + INTERVAL '7 days')
* **code\_id** (UUID, FK → lecture\_codes.id)
* **status** (ENUM: 'active', 'expired', GENERATED ALWAYS AS CASE WHEN NOW() <= access\_expires\_at THEN 'active' ELSE 'expired' END)

---

#### 5. `payment_logs` (Optional)

* **id** (UUID, PK)
* **user\_id** (UUID, FK → users.id)
* **lecture\_id** (UUID, FK → lectures.id)
* **amount** (NUMERIC(10,2))
* **status** (ENUM: 'pending', 'completed', 'failed')
* **payment\_method** (VARCHAR 50) -- e.g., 'whatsapp'
* **created\_at** (TIMESTAMP, DEFAULT NOW())

---

### Relationships

* `users` (1) —— (N) `lecture_access` —— (1) `lectures`
* `lectures` (1) —— (N) `lecture_codes`
* `users` (1) —— (N) `lecture_codes` (via used\_by)
* `lecture_codes` (1) —— (1) `lecture_access` (via code\_id)
* `users` (1) —— (N) `payment_logs`
* `lectures` (1) —— (N) `payment_logs`
