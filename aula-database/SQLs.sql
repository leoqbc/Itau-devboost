
-- Migrations (comando na liguagem do projeto que executam a criação das tabelas)

-- Migrations: Padronização de estrutura
-- Cria uma tabela
CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `sobrenome` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` text NOT NULL
);

-- Antigamente: atualizar fonte prod > roda o SQL atualizar DB

-- CI/CD - tester pre homolog(migrations > seeders)

-- Destroi a tabela
DROP table users;

-- Seeders fezem inserts fakes
INSERT INTO users 
(name, sobrenome, email, password)
VALUES
('Leonardo', 'Tumadjian', 'tumadjian@gmail.com', '123456');

SELECT * FROM users;

-- ADD column adicionando a coluna nova
ALTER TABLE users 
ADD COLUMN status int not null default 0 after password;

-- Alterando a coluna
ALTER TABLE users 
MODIFY COLUMN status tinyint not null default 0 after password;

-- ordenação
select *
from users
order by name ASC;

-- Cria tabela com relacionamento
create table todos (
	id int primary key auto_increment,
	title varchar(255) not null,
	completed tinyint unsigned not null,
	user_id int not null,
	constraint fk_userid 
		foreign key (user_id) references users(id)
);

-- insere com coluna user_id
insert into todos (title, completed, user_id) 
VALUES ('Estudar REACT', 0, 2);

SELECT * from todos;

-- /images/hotel1.jpg
