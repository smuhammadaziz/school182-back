create database school182;



CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  -- uuid ni install qilish


-- uuid default uuid_generate_v4() - ishlatish

create table administrations(
     id uuid default uuid_generate_v4(),
     fullName varchar(100) not null,
     lavozim text not null,
     birth text not null,
     birthPlace text not null,
     millat text not null,
     partiyaviyligi text not null,
     malumoti text not null,
     talim text not null,
     photo text not null
);

create table news(
     id uuid default uuid_generate_v4(),
     heading text not null,
     description text not null,
     image1 text not null,
     image2 text not null,
     image3 text not null
);

