drop table if exists users;
create table users(
    id    integer     not null,
    name  varchar(50) not null,
    pass  varchar(10) not null
);

insert into users (id, name, pass) values (1, 'Adam',    'sing');
insert into users (id, name, pass) values (2, 'Ben',     'sing');
insert into users (id, name, pass) values (3, 'Charles', 'sing');
insert into users (id, name, pass) values (4, 'Derek',   'sing');
insert into users (id, name, pass) values (5, 'Eddy',    'sing');

drop table if exists books;
create table books(
    id      integer     not null,
    title   varchar(50) not null,
    author  varchar(50) not null,
    likedby integer     not null,
    instock boolean
);

insert into books (id, title, author, likedby, instock) values (1, 'Treasure Island',         'Shan SaRobert Louis Stevenson', 4, true);
insert into books (id, title, author, likedby, instock) values (2, 'Wuthering Heights',       'Emily Brontë',                  2, false);
insert into books (id, title, author, likedby, instock) values (3, 'Jane Eyre',               'Charlotte Brontë',              1, true);
insert into books (id, title, author, likedby, instock) values (4, 'The Old Man and the Sea', 'Ernest Hemingway',              3, false);
insert into books (id, title, author, likedby, instock) values (5, 'Doctor Zhivago',          'Boris Pasternak',               5, false);
