<?php

define('UC_CONNECT', 'mysql');
define('UC_DBHOST', 'localhost');
define('UC_DBUSER', 'root');
define('UC_DBPW', '');
define('UC_DBNAME', 'ultrax');
define('UC_DBCHARSET', 'utf8');
define('UC_DBTABLEPRE', '`ultrax`.pre_ucenter_');
define('UC_DBCONNECT', '0');
define('UC_KEY', '99f2LeeoruRkF8trXBr38fyerp5tHGdbZMSwF5dPandb0Ry0');
define('UC_API', 'http://bbs.360sht.com/uc_server');
define('UC_CHARSET', 'utf-8');
define('UC_IP', '');
define('UC_APPID', '2');
define('UC_PPP', '20');
$dbhost = UC_DBHOST;            // 数据库服务器
$dbuser = UC_DBUSER;            // 数据库用户名
$dbpw = UC_DBPW;                // 数据库密码
$dbname = UC_DBNAME;            // 数据库名
$pconnect = 0;                // 数据库持久连接 0=关闭, 1=打开
$tablepre = UC_DBTABLEPRE;           // 表名前缀
$dbcharset = UC_DBCHARSET;            // MySQL 字符集, 可选 'gbk', 'big5', 'utf8'
//同步登录 Cookie 设置
$cookiedomain = '';             // cookie 作用域
$cookiepath = '/';            // cookie 作用路径
