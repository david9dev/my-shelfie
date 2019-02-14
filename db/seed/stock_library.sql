drop table if exists books_in_store;

create table if not exists books_in_store (
    book_id serial primary key,
    price decimal,
    cover_img_url text,
    genre varchar(40),
    title varchar(80),
    description text,
    selflink text,
    bookmark integer
);

insert into books_in_store (
    price,
    genre,
    title,
    description,
    selflink,
    cover_img_url,
    bookmark
) values (
    29.99,
    'classic',
    'Ferinheit 451',
    'Guy Montag is a fireman. In his world, where television rules and literature is on the brink of extinction, firemen start fires rather than put them out. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television "family". But then he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television. When Mildred attempts suicide and Clarisse suddenly disappears, Montag begins to question everything he has ever known. He starts hiding books in his home, and when his pilfering is discovered, the fireman has to run for his life.',
    -- 'https://www.secret-satire-society.org/wp-content/uploads/2014/01/Ray-Bradbury-Fahrenheit-451.pdf',
    '/Users/davidwells/Documents/david/devmtn/week6/my-shelfie/server/book_library/fahrenheit-451.txt',
    'https://images-na.ssl-images-amazon.com/images/I/81v%2BjygSh2L.jpg',
    0
);
insert into books_in_store (
    price,
    genre,
    title,
    description,
    selflink,
    cover_img_url,
    bookmark
) values (
    29.99,
    'classic',
    'Of Mice and Men',
    'While the powerlessness of the laboring class is a recurring theme in Steinbeck’s work of the late 1930s, he narrowed his focus when composing Of Mice and Men (1937), creating an intimate portrait of two men facing a world marked by petty tyranny, misunderstanding, jealousy, and callousness. But though the scope is narrow, the theme is universal: a friendship and shared dream that make an individual’s existence meaningful.',
    'http://nisbah.com/summer_reading/ff_mice_and_men_steinbeck.pdf',
    'https://images-na.ssl-images-amazon.com/images/I/81M0xCw-HJL.jpg',
    0
);
