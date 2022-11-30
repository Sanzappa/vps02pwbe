drop database if exists cursos;
create database cursos charset=UTF8 collate utf8_general_ci;
use cursos;

create table alunos(
    alunoId integer primary key auto_increment,
    nome varchar(50) not null,
    nascimento varchar(15)
);

create table cursos(
    cursoId integer primary key auto_increment,
    curso varchar(50) not null,
    duracao varchar(15)
);

create table cursados(
    aluno integer not null,
    curso integer not null,
    data varchar(20) not null,
    foreign key (aluno) references alunos(alunoId),
    foreign key (curso) references cursos(cursoId)
);

create view vw_cursos as
select a.alunoId as alunoId, a.nome as nome, a.nascimento as nascimento, c.cursoId as cursoId, c.curso as curso, c.duracao as duracao, s.data from cursados s
INNER JOIN alunos a on a.alunoId = s.aluno
INNER JOIN cursos c on c.cursoId = s.curso;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provabackend2/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provabackend2/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/provabackend2/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;