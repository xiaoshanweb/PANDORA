SET NAMES UTF8;
#建库pandora
DROP DATABASE IF EXISTS pandora;
create database pandora CHARSET=UTF8;
#进入pandora库
use pandora;
#用户信息表user
create table user(
    uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16) NOT NULL UNIQUE,
    user_name VARCHAR(32),
    gender INT
);
INSERT INTO user VALUES(1,"郑","111111","123@qq.com","13765462823","郑爽",0);
INSERT INTO user VALUES(2,"易","222222","234@qq.com","13765463243","易烊千玺",1);
INSERT INTO user VALUES(3,"胡","333333","345@136.com","1362572362","胡一天",1);
INSERT INTO user VALUES(4,"华","123456","456@qq.com","12461426562","华晨宇",1);
INSERT INTO user VALUES(5,"林","555555","555@qq.com","12643627352","林彦俊",1);
INSERT INTO user VALUES(6,"陈","666666","666@qq.com","12461567562","陈立农",1);
INSERT INTO user VALUES(7,"井","777777","567@qq.com","12345627352","井柏然",1);
#用户地址表receiver_address
create table receiver_address(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    receiver VARCHAR(16),
    province VARCHAR(16),
    city VARCHAR(16),
    county VARCHAR(16),
    address VARCHAR(128),
    cellphone VARCHAR(16),
    fixedphone VARCHAR(16),
    postcode VARCHAR(6),
    tag VARCHAR(16)
);
#用户购物车表shopping_cart
create table shopping_cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    product_id INT,
    count INT
);
#商品类别表laptop_family
create table laptop_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(24)
);
#商品表laptop
create table laptop(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    family_id INT,
    product_id INT,
    title VARCHAR(128),
    price DECIMAL(10,2),
    spec VARCHAR(64),
    details VARCHAR(1024)
);
#商品详情图表laptop_pic
create table laptop_pic(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    laptop_id INT,
    sm VARCHAR(128),
    md VARCHAR(128),
    lg VARCHAR(128)
);
#首页商品栏目表index_product
create table index_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    price DECIMAL(10,2),
);
INSERT INTO index_product VALUES(1,"璀璨深蓝色串饰",598.00);
INSERT INTO index_product VALUES(2,"星海之辰",726.00);
INSERT INTO index_product VALUES(3,"神圣铺梦网串饰",398.00);
INSERT INTO index_product VALUES(4,"蓝色热气球串饰",498.00);
#所有商品表product
create table product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    price DECIMAL(10,2),
    pic VARCHAR(64),
    pic1 VARCHAR(64)
);
INSERT INTO product VALUES(1,"一生所爱",3008.00,"1-1.jpg",null);
INSERT INTO product VALUES(2,"醉人月夜",1146.00,"1-2.jpg",null);
INSERT INTO product VALUES(3,"繁星童话",2180.00,"1-3.jpg",null);
INSERT INTO product VALUES(4,"爱意萌动",946.00,"2-1.jpg",null);
INSERT INTO product VALUES(5,"斑斓之梦",626.00,"2-2.jpg",null);
INSERT INTO product VALUES(6,"闪烁优雅",3290.00,"2-3.jpg",null);
INSERT INTO product VALUES(7,"璀璨深蓝色串饰",590.00,"796358NTB-1.jpg",null);
INSERT INTO product VALUES(8,"璀璨深蓝色串饰",678.00,"791994CZ-1.jpg",null);
INSERT INTO product VALUES(9,"璀璨深蓝色串饰",598.00,"791993CZ-1.jpg",null);
INSERT INTO product VALUES(10,"璀璨深蓝色串饰",946.00,"297205EN168-1.jpg",null);
INSERT INTO product VALUES(11,"璀璨深蓝色串饰",626.00,"267071-1.jpg",null);
INSERT INTO product VALUES(12,"璀璨深蓝色串饰",789.00,"788079CZ-1.jpg","788079CZ-2.jpg");
INSERT INTO product VALUES(13,"璀璨深蓝色串饰",626.00,"781388CZ-1.jpg",null);
INSERT INTO product VALUES(14,"璀璨深蓝色串饰",999.00,"767796CZ-1.jpg",null);

//礼品商品表
create table present(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    price DECIMAL(10,2),
    pic VARCHAR(64),
    pic1 VARCHAR(64)
);
INSERT INTO present VALUES(1,"繁星童话",2180.00,"BPVD00010-1.jpg","BPVD00010-1.jpg");
INSERT INTO present VALUES(2,"一生所爱",3088.00,"BPVD00022-1.jpg","BPVD00022-1.jpg");
INSERT INTO present VALUES(3,"爱意萌动",946.00,"BPVD00030-1.jpg","BPVD00030-1.jpg");
INSERT INTO present VALUES(4,"浪漫爱恋",2112.00,"ZT0123-1.jpg","ZT0123-1.jpg");
INSERT INTO present VALUES(5,"PANDORA我爱你礼品套装",1798.00,"B800880-1.jpg","B800880-1.jpg");
INSERT INTO present VALUES(6,"璀璨之心",1146.00,"ZT0134-1.jpg","ZT0134-1.jpg");
INSERT INTO present VALUES(7,"倾心热恋串饰",640.00,"797826CZRMX-1.jpg","797826CZRMX-1.jpg");
INSERT INTO present VALUES(8,"倾心热恋固定夹",368.00,"797838CZRMX-1.jpg","797838CZRMX-1.jpg");
INSERT INTO present VALUES(9,"爱之恋串饰",698.00,"767816CZ-1.jpg","767816CZ-1.jpg");
INSERT INTO present VALUES(10,"小爱神串饰",548.00,"767796CZ-1.jpg","767796CZ-1.jpg");
INSERT INTO present VALUES(11,"闪耀之恋串饰",398.00,"797827CZMX-1.jpg","797827CZMX-1.jpg");
INSERT INTO present VALUES(12,"俏皮爱心串饰",398.00,"797820ENMX-1.jpg","797820ENMX-1.jpg");
INSERT INTO present VALUES(13,"花木兰耳钉",368.00,"290739PCZ-1.jpg","290739PCZ-1.jpg");
INSERT INTO present VALUES(14,"神圣羽毛耳坠",398.00,"297205EN168-1.jpg","297205EN168-2.jpg");
INSERT INTO present VALUES(15,"连环圆环耳坠",946.00,"297535-1.jpg","297535-1.jpg");
INSERT INTO present VALUES(16,"粉色魔法皇冠耳环",548.00,"287127NPO-1.jpg","287127NPO-1.jpg");
INSERT INTO present VALUES(17,"爱心与蜂耳环",398.00,"267071-1.jpg","267071-2.jpg");
INSERT INTO present VALUES(18,"冰川之美耳坠",648.00,"297545CZ-1.jpg","297545CZ-1.jpg");
INSERT INTO present VALUES(19,"花冠戒指",898.00,"167119CZ-1.jpg","167119CZ-2.jpg");
INSERT INTO present VALUES(20,"璀璨抛光心形开口戒指",548.00,"186570CZR-1.jpg","186570CZR-2.jpg");
INSERT INTO present VALUES(21,"璀璨泪滴形戒指",698.00,"196251CZ-1.jpg","196251CZ-2.jpg");
INSERT INTO present VALUES(22,"闪耀之箭戒指",548.00,"197830CZ-1.jpg","197830CZ-2.jpg");
INSERT INTO present VALUES(23,"闪耀之箭戒指",548.00,"197830CZ-1.jpg","197830CZ-2.jpg");
INSERT INTO present VALUES(24,"闪耀之箭戒指",548.00,"197830CZ-1.jpg","197830CZ-2.jpg");
