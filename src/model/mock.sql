create database school182;



CREATE EXTENSION IF NOT EXISTS "uuid-ossp";  -- uuid ni install qilish


-- uuid default uuid_generate_v4() - ishlatish

create table admins(
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
     text text not null,
     img1 text not null,
     img2 text not null
);


create table contact(
     id uuid default uuid_generate_v4(),
     fullName text not null,
     phone text not null,
     email text not null,
     comment text not null,
     time date default current_date
);