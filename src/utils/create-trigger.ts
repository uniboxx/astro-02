import { turso } from '../turso';

async function createTrigger(table: any) {
  await turso.execute(`
    CREATE TRIGGER update_${table}_updated_at
    AFTER UPDATE ON ${table}
    WHEN old.updated_at <> current_timestamp
    BEGIN
        UPDATE ${table}
        SET updated_at = CURRENT_TIMESTAMP
        WHERE id = OLD.id;
    END;`);
}

createTrigger('users');
