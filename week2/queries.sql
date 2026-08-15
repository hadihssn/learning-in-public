// insert
INSERT INTO users (name, email) VALUES
  ('Sara', 'sara@gmail.com'),
  ('Jamal', 'jamal@gmail.com');


// update
UPDATE users SET name = 'Sara Omar' WHERE name = 'Sara'

// soft delete
ALTER TABLE users ADD COLUMN deleted_at timestamptz;
UPDATE users SET deleted_at = now() WHERE name = 'Sara Omar'; 