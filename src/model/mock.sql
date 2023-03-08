create database school182;

create table admins(
     id serial primary key,
     username varchar(30) not null,
     hash text not null
);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  -- uuid ni install qilish


-- uuid default uuid_generate_v4() - ishlatish

create table news(
     id uuid default uuid_generate_v4(),
     heading varchar(50) not null,
     news_text text not null,
     date date default current_date
); 