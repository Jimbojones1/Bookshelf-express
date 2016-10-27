create database cats_fansite;
use cats_fansite;
create table user_accounts (
	id int not null auto_increment,
	email varchar(255) not null,
	password_hash varchar(61) not null,
	primary key (id)
	);

# then insert 1 row
# select * from table to verify it works
# do this for all 3 tables on the whiteboard