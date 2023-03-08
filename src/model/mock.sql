create database school182;

create table admins(
     id serial primary key,
     username varchar(30) not null,
     hash text not null
);


