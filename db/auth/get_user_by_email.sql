create table if not exists users (
    user_id serial primary key,
    first_name varchar(40),
    last_name varchar(40),
    hash_password varchar(60),
    email varchar(80)
);
select * from users
where email = $1;