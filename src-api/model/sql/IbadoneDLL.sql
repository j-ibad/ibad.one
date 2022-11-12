CREATE TABLE IF NOT EXISTS MailboxCategory (
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name varchar(256) NOT NULL UNIQUE,
	priority int NOT NULL DEFAULT 99
);

CREATE TABLE IF NOT EXISTS Mailbox (
	email varchar(320) NOT NULL,
	category int DEFAULT 0,
	subject varchar(128) NOT NULL,
	msg varchar(12800) NOT NULL,
	createdDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	ip varchar(32) NOT NULL
);

INSERT IGNORE INTO MailboxCategory(name, priority)
VALUES ('Other', 99), ('Correspondence', 10), ('Feedback', 9);

SELECT * FROM Mailbox ORDER BY createdDate DESC;