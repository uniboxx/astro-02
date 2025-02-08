import { turso } from '../turso';

async function createUserTable() {
  await turso.execute(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL,
  username TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT regular,
  created_at TEXT DEFAULT current_timestamp,
  updated_at TEXT DEFAULT current_timestamp
  )`);
}

createUserTable();
