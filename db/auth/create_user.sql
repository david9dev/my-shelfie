insert into users (
    first_name,
    last_name,
    hash_password,
    email
) values (
    ${firstname},
    ${lastname},
    ${hash},
    ${email}
)
returning first_name, last_name, email;