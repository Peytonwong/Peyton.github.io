(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{230:function(_,v,t){"use strict";t.r(v);var r=t(2),d=Object(r.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"视图、索引、存储过程优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#视图、索引、存储过程优缺点","aria-hidden":"true"}},[_._v("#")]),_._v(" "),t("a",{attrs:{href:"https://www.cnblogs.com/SanMaoSpace/p/3147059.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("视图、索引、存储过程优缺点"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("1.视图\n(1).什么是视图？\n视图(View)作为一种数据库对象，为用户提供了一个可以检索数据表中的数据方式。用户通过视图来浏览数据表中感兴趣的部分或全部数据，而数据的物理存储位置仍然在表中。\n视图是一个虚拟表，并不代表任何物理数据，只是用来查看数据的窗口而已。视图并不是以一组数据的形式存储在数据库中，数据库中只存储视图的定义，而不存储视图对应的数据，这些数据仍存储在导出视图的基本表中。当基本表中的数据发生变化时，从视图中查询出来的数据也随之改变。\n视图中的数据行和列都是来自于基本表，是在视图被引用时动态生成的。使用视图可以集中、简化和制定用户的数据库显示，用户可以通过视图来访问数据，而不必直接去访问该视图的基本表。\n视图由视图名和视图定义两个部分组成。视图是从一个或多个表导出来的表，它实际上是一个查询结果，视图的名字和视图对应的查询存储在数据字典中。")]),_._v(" "),t("p",[_._v("(2).视图的优缺点？\n<1>.视图的优点\nA.数据安全性。\n对不同的用户定义不同的视图，使用户只能看到与自己有关的数据。数据库授权命令可以使每个用户对数据库的检索限制到特定的数据库对象上，但不能授权到数据库特定行和特定的列上。通过视图，用户可以被限制在数据的不同子集上。\nB.查询简单化。\n为复杂的查询建立一个视图，用户不必输入复杂的查询语句，只需针对此视图做简单的查询即可。那些被经常使用的查询可以被定义为视图，从而使用户不必为以后的操作每次都指定全部的条件。\nC.逻辑数据独立性。\n视图可以使应用程序和数据库表在一定程度上独立。如果没有视图，应用一定是建立在表上的。有了视图之后，程序可以建立在视图之上，从而程序与数据库表被视图分割开来。\n对于视图的操作，例如，查询只依赖于视图的定义，当构成视图的基本表需要修改时，只需要修改视图定义中的子查询部分，而基于视图的查询不用改变。")]),_._v(" "),t("p",[_._v("<2>.视图的缺点\nA.性能。\nSQL Server必须把视图的查询转化成对基本表的查询，如果这个视图是由一个复杂的多表查询所定义，那么，即使是视图的一个简单查询，SQL Server也把它变成一个复杂的结合体，需要花费一定的时间。\nB.修改限制。\n当用户试图修改视图的某些行时，SQL Server必须把它转化为对基本表的某些行的修改。事实上，当从视图中插入或者删除时，情况也是这样。对于简单视图来说，这是很方便的，但是，对于比较复杂的视图，可能是不可修改的，这些视图有如下特征：\n　　a.有UNIQUE等集合操作符的视图。\n　　b.有GROUP BY子句的视图。\n　　c.有诸如AVG\\SUM\\MAX等聚合函数的视图。\n　　d.使用DISTINCT关键字的视图。\n　　e.连接表的视图（其中有些例外）\n(3).创建视图的限制：\n在创建视图时，还要注意试图必须满足以下几点限制：\n<1>.不能将规则或者DEFAULT定义关联于视图。\n<2>.定义视图的查询中不能含有ORDER BY\\COMPURER\\COMPUTER BY 子句和INTO关键字\n<3>.如果视图中某一列是一个算术表达式、构造函数或者常数，而且视图中两个或者更多的不同列拥有一个相同的名字(这种情况通常是因为在视图的定义中有一个连接，而且这两个或者多个来自不同表的列拥有相同的名字)，此时，用户需要为视图的每一列指定列的名称。")]),_._v(" "),t("p",[_._v("参考博客：\n《"),t("a",{attrs:{href:"http://database.51cto.com/art/201011/233240.htm",target:"_blank",rel:"noopener noreferrer"}},[_._v("使用SQL Server视图的优缺点"),t("OutboundLink")],1),_._v("》")]),_._v(" "),t("p",[_._v("2.索引\n(1).什么是索引？\n索引是以表列为基础的数据库对象，它保存着表中排序的索引列，并且记录了索引列在数据表中的物理存储位置，实现了表中数据的逻辑排序，其主要目的是提高SQL Server系统的性能，加快数据的查询速度和减少系统的响应时间。索引通过记录表中的关键值指向表中的记录，这样数据库引擎就不用扫描整个表而定位到相关的记录。相反，如果没有索引，则会导致SQL Server搜索表中的所有记录，以获取匹配结果。\n索引除了可以提高查询表内数据的速度以外，还可以使表和表之间的连接速度加快。例如，在实现数据参照完整性时，可以将表的外键制作为索引，这样将加速表与表之间的连接。")]),_._v(" "),t("p",[_._v("(2).索引的分类\n有3种索引类型：聚集索引、非聚集索引和唯一索引。如果表中存在聚集索引，则非聚集索引使用聚集索引来加快数据查询。\n<1>.聚集索引\n聚集索引会对表和视图进行物理排序，所以这种索引对查询非常有效，在表和视图中只能有一个聚集索引。当建立主键约束时，如果表中没有聚集索引，SQL Server会用主键列作为聚集索引键。可以在表的任何列或列的组合上建立索引，实际应用中一般定义成主键约束的列建立聚集索引。\n<2>.非聚集索引\n非聚集索引不会对表和视图进行物理排序。如果表中不存在聚集索引，则表示未排序的。在表或视图中，最多可以建立250个非聚集索引，或者249个非聚集索引和1个聚集索引。\n<3>.唯一索引\n唯一索引不允许两行具有相同的索引值。只要列中数据是唯一的，就可在同一个表上创建一个唯一的聚集索引。如果必须实施唯一性以确保数据的完整性，则应在列上创建UNIQUE或PRIMARY KEY约束，而不要创建唯一索引。")]),_._v(" "),t("p",[_._v("(3).使用索引的代价\n虽然索引有很多优点，但索引的存在也让系统付出了一定的代价。创建索引和维护索引都会消耗时间，当对表中的数据进行增加、删除和修改操作时，索引就要进行维护，否则索引的作用就会下降；另外，每个索引都会占用一定的物理空间，如果占用的物理空间过多，就会影响到整个SQL Server系统的性能。")]),_._v(" "),t("p",[_._v("(4).建立索引的原则\n创建索引虽然可以提高查询速度，但是它是牺牲一定的系统性能。因此，在创建时，哪些列适合创建索引，哪些列不适合创建索引，需要进行判断，具体以下原则:\n<1>.有主键的数据列要建立索引。因为主键可以加速定位到表中的某一行。\n<2>.有外键的数据列要建立索引。外键列通常用于表与表之间的连接，在其上创建索引可以加快表间的连接。\n<3>.对于经常查询的数据列最好建立索引。\nA.对于需要在指定范围内快速或频繁查询的数据列，因为索引已经排序，其指定的范围是连续的，查询可以利用索引的排序，加快查询的时间。\nB.经常用在WHERE子句中的数据列，将索引建立在WHERE子句的集合过程中，对于需要加速或频繁检索的数据列，可以让这些经常参与查询的数据列按照索引的排序进行查询，加快查询的时间。\n<4>.对于那些查询中很少涉及的列、重复值比较多的列不要建立索引。\n例如，在查询中很少使用的列，有无索引并不能提高查询的速度，相反增加了系统维护时间和消耗了系统空间。\n<5>.对于定义为text、image和bit数据类型的列不要建立索引。因为这些数据类型的数据列的数据量要么很大、要么很小，不利于使用索引。")]),_._v(" "),t("p",[_._v("参考博客：\n《"),t("a",{attrs:{href:"http://www.cnblogs.com/Mainz/archive/2009/10/28/1591501.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("SQLServer索引调优实践"),t("OutboundLink")],1),_._v("》\n《"),t("a",{attrs:{href:"http://database.51cto.com/art/200804/69905.htm",target:"_blank",rel:"noopener noreferrer"}},[_._v("SQL Server索引维护指导(1)"),t("OutboundLink")],1),_._v("》\n《"),t("a",{attrs:{href:"http://kb.cnblogs.com/page/85229/",target:"_blank",rel:"noopener noreferrer"}},[_._v("详细讲解SQL Server索引的性能问题"),t("OutboundLink")],1),_._v("》")]),_._v(" "),t("p",[_._v("3.存储过程\n(1).什么是存储过程？\n当开发一个应用程序时，为了易于修改和扩充，经常会将负责不同功能的语句集中起来而且按照用途分别放置，以便能够反复调用，而这些独立放置且拥有不同功能的语言，即是“过程”(Procedure)。\n存储过程(Stored Producedures)是一组为完整特定功能的SQL语句集，经编译后存储在数据库中。用户通过指定存储过程的名字给出参数(如果该存储过程带有参数)来执行它。\n它能够包含执行各种数据库操作的语句，并且可以调用其他的存储过程；能够接受输入参数，并以输出参数的形式将多个数据值返回给调用程序(Calling Procedure)或批处理(Batch)；向调用程序或批处理返回一个状态值，以表明成功或失败(以及失败的原因)。")]),_._v(" "),t("p",[_._v("(2).存储过程的优点\n<1>.存储过程优点\nA.执行速度快。\n存储过程只在创造时进行编译，已经通过语法检查和性能优化，以后每次执行存储过程都不需再重新编译，而我们通常使用的SQL语句每执行一次就编译一次,所以使用存储过程可提高数据库执行速度。\nB.允许组件式编程。\n经常会遇到复杂的业务逻辑和对数据库的操作，这个时候就会用SP来封装数据库操作。当对数据库进行复杂操作时(如对多个表进行Update,Insert,Query,Delete时)，可将此复杂操作用存储过程封装起来与数据库提供的事务处理结合一起使用。只需创建存储过程一次并将其存储在数据库中，以后即可在程序中调用该过程任意次。在代码上看，SQL语句和程序代码语句的分离，可以提高程序代码的可读性。\n存储过程可以设置参数，可以根据传入参数的不同重复使用同一个存储过程，从而高效的提高代码的优化率和可读性。\nC.减少网络流量。\n一个需要数百行Transact-SQL代码的操作由一条执行过程代码的单独语句就可实现，而不需要在网络中发送数百行代码。\n对于同一个针对数据库对象的操作，如果这一操作所涉及到的T-SQL语句被组织成一存储过程，那么当在客户机上调用该存储过程时，网络中传递的只是该调用语句，否则将会是多条SQL语句。从而减轻了网络流量，降低了网络负载。\nD.提高系统安全性。\n可将存储过程作为用户存取数据的管道。可以限制用户对数据表的存取权限，建立特定的存储过程供用户使用，避免非授权用户对数据的访问，保证数据的安全。")]),_._v(" "),t("p",[_._v("<2>.存储过程缺点：\nA.移植性差。依赖于数据库厂商,难以移植(当一个小系统发展到大系统时,对数据库的要求也会发生改变)；\nB.难以调试、维护。业务逻辑大的时候,封装性不够,难调试难以维护；\nC.服务器不能负载均衡。复杂的应用用存储过程来实现，就把业务处理的负担压在数据库服务器上了。没有办法通过中间层来灵活分担负载和压力.均衡负载等。")]),_._v(" "),t("p",[_._v("(3).存储过程分类\n<1>.系统存储过程\n系统存储过程(System Stored Procedures)主要存储在master数据库中，并以sp_为前缀，并且系统存储过程主要是从系统表中获取信息，从而为系统管理员管理SQL Server提供支持。\n<2>.本地存储过程\n本地存储过程(Local Stored Procedures)也就是用户自行创建在用户数据库中的存储过程。事实上一般所说的存储过程值得就是本地存储过程。用户创建的存储过程是由用户创建并能完成某一特定功能（如查询用户所需的数据信息）的存储过程。\n<3>.临时存储过程\n临时存储过程(Temporary Stored Procedures)可分为以下两种：\nA.本地临时存储过程\n如果在创建存储过程中，以井号(#)作为其名称的第一个字符，则该存储过程将成为一个存放在tempdb数据库中的本地临时存储过程(例如，CREATE PROCEDURE #book_proc.....)。本地临时存储过程只有创建它的连接的用户才能够执行它，而且一旦这位用户断开与SQL Server的连接,本地临时存储过程就会自动删除，当然，这位用户也可以在连接期间用DROP PROCEDURE命令删除多创建的本地临时存储过程。\nB.全局临时存储过程\n如果在所创建的存储过程名称是以两个井号(# #)开始，则该存储过程将成为一个存储在tempdb数据库中的全局临时存储过程，如果没有，便立即将全局临时存储过程删除；如果有，SQL Server会让这些执行中的操作继续进行，但是不允许任何用户再执行全局临时存储过程，等到所有未完成的操作执行完毕后，全局临时存储过程就会自动删除。\n由于全局临时存储过程能够被所有的连接用户使用，因此，必须注意其名称不能和其他连接所采用的名称相同。\n<4>.远程存储过程\n远程存储过程(Remote Stored Procedures)是位于远程服务器上的存储过程，通常可以使用分布式查询和EXECUTE命令执行一个远程存储过程。\n<5>.扩展存储过程\n扩展存储过程(Extended Stored Procedures)是用户可以使用外部程序语言编写的存储过程。扩展存储过程在使用和执行上与一般的存储过程完全相同。可以将参数传递给扩展存储过程，扩展存储过程也能够返回结果和状态值。\n为了区别，扩展存储过程的名称通常以xp_开头。扩展存储过程是以动态链接库(DLLS)的形式存在，能让SQL Server动态的装载和执行。扩展存储过程一定要存储在系统数据库master中。")]),_._v(" "),t("p",[_._v("参考博客：\n《"),t("a",{attrs:{href:"http://www.cnblogs.com/hoojo/archive/2011/07/19/2110862.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("SQL Server 存储过程"),t("OutboundLink")],1),_._v("》")]),_._v(" "),t("p",[_._v("4.事务处理\n(1).什么是事务？\n事务是单个的工作单元。如果某一事务成功，则在该事务中进行的所有数据更改均会提交，成为数据库中的永久组成部分。如果事务遇到错误且必须取消或回滚，则所有数据更改均被清除。事务作为一个逻辑工作单元有4个属性，称为ACID（原子性、一致性、隔离性和持久性）属性。\n<1>.原子性：事务必须是原子工作单元，对于其数据修改，要么全都执行，要么全都不执行。\n<2>.一致性：事务在完成时，必须使所有的数据都保持一致状态。在相关数据库中，所有规则都必须应用于事务的修改，以保持所有数据的完整性。事物结束时，所有的内容数据结果都必须是正确的。\n<3>.隔离性：由并发事务所作的修改必须与任何其他并发事务所作的修改隔离，保证事务查看数据时数据处于的状态，只能是另一并发事务修改它之前的状态或者是另一事务修改它之后的状态，而不能中间状态的数据。\n<4>.持久性：事务完成之后对系统的影响是永久性的。\n(2).事务分类\n<1>.显式事务:用begin transaction明确指定事务的开始。\n<2>.隐性事务：打开隐性事务：set implicit_transactions on，当以隐性事务模式操作时，SQL Servler将在提交或回滚事务后自动启动新事务。无法描述事务的开始，只需要提交或回滚事务。\n<3>.自动提交事务：SQL Server的默认模式，它将每条单独的T-SQL语句视为一个事务。如果成功执行，则自动提交，否则回滚。")]),_._v(" "),t("p",[_._v("参见博客：\n《"),t("a",{attrs:{href:"http://www.cnblogs.com/wenanry/archive/2006/07/10/447157.aspx",target:"_blank",rel:"noopener noreferrer"}},[_._v("SQL SERVER事务处理"),t("OutboundLink")],1),_._v("》")]),_._v(" "),t("p",[_._v("5.SQL Server内部函数\n内部函数的作用是用来帮助用户获得系统的有关信息、执行有关计算、实现数据转换以及统计功能等。SQL所提供的内部函数又分为系统函数、日期函数、字符串函数、数学函数、集合函数等几种。\n(1).系统函数\n系统函数可帮助在不直接访问系统表的情况下，获取SQL Server系统表中的信息。系统函数对SQL Server服务器和 数据库对象进行操作，并返回服务器配置和数据库对象数值等信息。系统函数可用于选择列表、WHERE子句以及任何允许使用表达式的地方。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("系统函数")]),_._v(" "),t("th",[_._v("功能")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("APP_NAME()")]),_._v(" "),t("td",[_._v("返回当前会话的应用程序名称(如果应用程序进行了设置)")])]),_._v(" "),t("tr",[t("td",[_._v("CASE表达式")]),_._v(" "),t("td",[_._v("计算条件列表，并返回表达式的多个可能结果之一。")])]),_._v(" "),t("tr",[t("td",[_._v("CAST(expression AS data_type)")]),_._v(" "),t("td",[_._v("将表达式显示转换为另一种数据类型。")])]),_._v(" "),t("tr",[t("td",[_._v("CONVERT(data_type[length],expression[,style])")]),_._v(" "),t("td",[_._v("将表达式显示转换为另一种数据类型。CAST和CONVERT提供相似的功能。")])]),_._v(" "),t("tr",[t("td",[_._v("COL_LENGTH")]),_._v(" "),t("td",[_._v("返回列长度而不是列中存储的任何单个字符串的长度。")])]),_._v(" "),t("tr",[t("td",[_._v("CURRENT_TIMESTAMP")]),_._v(" "),t("td",[_._v("返回当前日期和时间。此函数等价于GETDATE()。")])]),_._v(" "),t("tr",[t("td",[_._v("CURRENT_USER")]),_._v(" "),t("td",[_._v("返回当前的用户，此函数等价于USER_NAME()。")])]),_._v(" "),t("tr",[t("td",[_._v("DATALENGTH(expression)")]),_._v(" "),t("td",[_._v("返回表达式所占用的字节数。")])]),_._v(" "),t("tr",[t("td",[_._v("GETANSINULL(['database'])")]),_._v(" "),t("td",[_._v("返回会话的数据库的默认为空值。当给定数据库为空值时允许空值并且列或数据类型为空值没有显示定义，GETANSINULL返回1。")])]),_._v(" "),t("tr",[t("td",[_._v("HOST_ID()")]),_._v(" "),t("td",[_._v("返回主机标识。")])]),_._v(" "),t("tr",[t("td",[_._v("HOST_NAME()")]),_._v(" "),t("td",[_._v("返回主机名称。")])]),_._v(" "),t("tr",[t("td",[_._v("IDENT_CURRENT('table_name')")]),_._v(" "),t("td",[_._v("任何会话和任何范围中对指定的表生成的最后标识值.")])]),_._v(" "),t("tr",[t("td",[_._v("IDENT_INCR('table_or_view')")]),_._v(" "),t("td",[_._v("返回表的标识列的标识增量。")])]),_._v(" "),t("tr",[t("td",[_._v("IDENT_SEED('table_or_view')")]),_._v(" "),t("td",[_._v("返回种子值，该值是在带有标识列的表或视图中创建标识列时指定的值。")])]),_._v(" "),t("tr",[t("td",[_._v("IDENTITY(data_type[,seed,increment]) AS  col_name")]),_._v(" "),t("td",[_._v("只在SELECT IINTO生成新表中的标识列。")])]),_._v(" "),t("tr",[t("td",[_._v("ISDATE(expression)")]),_._v(" "),t("td",[_._v("表达式为有效日期格式时返回1，否则返回0。")])]),_._v(" "),t("tr",[t("td",[_._v("ISNULL(check_expression,replacement_value)")]),_._v(" "),t("td",[_._v("表达式值为NULL,用指定的替换值进行替换")])]),_._v(" "),t("tr",[t("td",[_._v("ISNUMERIC(expression)")]),_._v(" "),t("td",[_._v("表达式为数值类型时返回1，否则返回0。")])]),_._v(" "),t("tr",[t("td",[_._v("NEWID()")]),_._v(" "),t("td",[_._v("生成全局唯一标识符。")])]),_._v(" "),t("tr",[t("td",[_._v("NULLIF(expression,expression)")]),_._v(" "),t("td",[_._v("如果两个指定的表达式相等，则返回空值。")])]),_._v(" "),t("tr",[t("td",[_._v("PARSENAME('object_name','object_part')")]),_._v(" "),t("td",[_._v("返回对象名的指定部分。")])]),_._v(" "),t("tr",[t("td",[_._v("PERMISSIONS([objectid[,'column']])")]),_._v(" "),t("td",[_._v("返回一个包含位图的值，表明当前用户的语句，对象或列权限。")])]),_._v(" "),t("tr",[t("td",[_._v("ROWCOUNT_BIG()")]),_._v(" "),t("td",[_._v("返回执行最后一个语句所影响的行数。")])]),_._v(" "),t("tr",[t("td",[_._v("SCOPE_IDENTITY()")]),_._v(" "),t("td",[_._v("插入当前范围IDENTITY列中的最后一个标识值。")])]),_._v(" "),t("tr",[t("td",[_._v("SERVERPROPERTY(propertyname)")]),_._v(" "),t("td",[_._v("返回服务器属性的信息。")])]),_._v(" "),t("tr",[t("td",[_._v("SESSIONPROPERTY(option)")]),_._v(" "),t("td",[_._v("会话的SET选项。")])]),_._v(" "),t("tr",[t("td",[_._v("STATS_DATE(table_id,index_id)")]),_._v(" "),t("td",[_._v("对table_id和index_id更新分配页的日期。")])]),_._v(" "),t("tr",[t("td",[_._v("USER_NAME([id])")]),_._v(" "),t("td",[_._v("返回给指定标识号的用户数据库的用户名。")])])])]),_._v(" "),t("p",[_._v("(2).日期函数\n日期函数用来显示日期和时间的信息。它们处理datatime和smalldatetime的值，并对其进行算术运算。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("日期函数")]),_._v(" "),t("th",[_._v("功能")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("GETDATE()")]),_._v(" "),t("td",[_._v("返回服务器当前的系统日期和时间。")])]),_._v(" "),t("tr",[t("td",[_._v("DATENAME(日期元素,日期)")]),_._v(" "),t("td",[_._v("返回指定日期的名字，返回字符串。")])]),_._v(" "),t("tr",[t("td",[_._v("DATERART(日期元素,日期)")]),_._v(" "),t("td",[_._v("返回指定日期的一部分，返回整数。")])]),_._v(" "),t("tr",[t("td",[_._v("DATEDIFF(日期元素,日期1,日期2)")]),_._v(" "),t("td",[_._v("返回两个日期间的差值并转换为指定日期元素形式")])]),_._v(" "),t("tr",[t("td",[_._v("DATEADD(日期元素,日期)")]),_._v(" "),t("td",[_._v("将日期元素加上日起产生新的日期。")])]),_._v(" "),t("tr",[t("td",[_._v("YEAR(日期)")]),_._v(" "),t("td",[_._v("返回年份(整数)")])]),_._v(" "),t("tr",[t("td",[_._v("MONTH(日期)")]),_._v(" "),t("td",[_._v("返回月份(整数)")])]),_._v(" "),t("tr",[t("td",[_._v("DAY(日期)")]),_._v(" "),t("td",[_._v("返回某月几号的整数值")])]),_._v(" "),t("tr",[t("td",[_._v("GETUTCDATE()")]),_._v(" "),t("td",[_._v("返回表示当前UTC时间(世界时间坐标和格林尼治报纸时间)的日起值")])])])]),_._v(" "),t("p",[_._v("日期元素参照：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("日期元素")]),_._v(" "),t("th",[_._v("缩写")]),_._v(" "),t("th",[_._v("取值")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("year")]),_._v(" "),t("td",[_._v("yy")]),_._v(" "),t("td",[_._v("1753-9999")])]),_._v(" "),t("tr",[t("td",[_._v("month")]),_._v(" "),t("td",[_._v("mm")]),_._v(" "),t("td",[_._v("1-12")])]),_._v(" "),t("tr",[t("td",[_._v("day")]),_._v(" "),t("td",[_._v("dd")]),_._v(" "),t("td",[_._v("1-31")])]),_._v(" "),t("tr",[t("td",[_._v("Day of year")]),_._v(" "),t("td",[_._v("dy")]),_._v(" "),t("td",[_._v("1-366")])]),_._v(" "),t("tr",[t("td",[_._v("week")]),_._v(" "),t("td",[_._v("wk")]),_._v(" "),t("td",[_._v("0-52")])]),_._v(" "),t("tr",[t("td",[_._v("weekday")]),_._v(" "),t("td",[_._v("dw")]),_._v(" "),t("td",[_._v("1-7")])]),_._v(" "),t("tr",[t("td",[_._v("hour")]),_._v(" "),t("td",[_._v("hh")]),_._v(" "),t("td",[_._v("0-23")])]),_._v(" "),t("tr",[t("td",[_._v("minute")]),_._v(" "),t("td",[_._v("mi")]),_._v(" "),t("td",[_._v("0-59")])]),_._v(" "),t("tr",[t("td",[_._v("quarter")]),_._v(" "),t("td",[_._v("qq")]),_._v(" "),t("td",[_._v("1-4")])]),_._v(" "),t("tr",[t("td",[_._v("second")]),_._v(" "),t("td",[_._v("ss")]),_._v(" "),t("td",[_._v("0-59")])]),_._v(" "),t("tr",[t("td",[_._v("millisecond")]),_._v(" "),t("td",[_._v("ms")]),_._v(" "),t("td",[_._v("0-999")])])])]),_._v(" "),t("p",[_._v("(3).字符串函数\n字符串函数用于对字符串进行连接、截取等操作。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("字符串函数")]),_._v(" "),t("th",[_._v("功能")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("ASCII(字符表达式)")]),_._v(" "),t("td",[_._v("返回字符表达式最左边字符的ASCII码。")])]),_._v(" "),t("tr",[t("td",[_._v("CHAR(整型表达式)")]),_._v(" "),t("td",[_._v("讲一个ASCII码转换成字符，ASCII码应在0-255之间。")])]),_._v(" "),t("tr",[t("td",[_._v("SPACE(整型表达式)")]),_._v(" "),t("td",[_._v("返回n个空格组成的字符串，n整型表达式的值。")])]),_._v(" "),t("tr",[t("td",[_._v("LEA(字符表达式)")]),_._v(" "),t("td",[_._v("返回字符表达式的字符(而不是字节)个数,不计算尾部空格")])]),_._v(" "),t("tr",[t("td",[_._v("RIGHT(字符表达式,整型表达式)")]),_._v(" "),t("td",[_._v("从字符表达式中返回最右边n个字符，n为整型表达式.")])]),_._v(" "),t("tr",[t("td",[_._v("LEFT(字符表达式,整型表达式)")]),_._v(" "),t("td",[_._v("从字符表达式中返回最左边n个字符，n为 整型表达式.")])]),_._v(" "),t("tr",[t("td",[_._v("SUBSTRING(字符表达式,起始点,n)")]),_._v(" "),t("td",[_._v("返回字符串表达式中从“起始点”开始的n个字符.")])]),_._v(" "),t("tr",[t("td",[_._v("STR(浮点表达式[,长度[,小数]])")]),_._v(" "),t("td",[_._v("将浮点表达式转换为所给定长度的字符串，小数点后的位数由所给出的“小数”决定。")])]),_._v(" "),t("tr",[t("td",[_._v("LTRIM(字符表达式)")]),_._v(" "),t("td",[_._v("去掉字符表达式的前导空格。")])]),_._v(" "),t("tr",[t("td",[_._v("RTEIM(字符表达式)")]),_._v(" "),t("td",[_._v("去掉字符表达式的尾部空格。")])]),_._v(" "),t("tr",[t("td",[_._v("LOWER(字符表达式)")]),_._v(" "),t("td",[_._v("将字符表达式的字母转换为小写字母。")])]),_._v(" "),t("tr",[t("td",[_._v("UPPER(字符表达式)")]),_._v(" "),t("td",[_._v("将字符表达式的字母转换为大写字母。")])]),_._v(" "),t("tr",[t("td",[_._v("REVERSE(字符表达式)")]),_._v(" "),t("td",[_._v("返回字符表达式的逆序。")])]),_._v(" "),t("tr",[t("td",[_._v("DIFFERENCES(字符表达式1，字符表达式2)")]),_._v(" "),t("td",[_._v("返回两个字符表达式发音的相似程度(0-4)，4为发音最相似。")])]),_._v(" "),t("tr",[t("td",[_._v('PATINDEX("%模式%",表达式)')]),_._v(" "),t("td",[_._v("返回指定模式在表达式中的起始位置，找不到时为0。")])]),_._v(" "),t("tr",[t("td",[_._v("PEPLICATE(字符表达式,整型表达式)")]),_._v(" "),t("td",[_._v("将字符表达式重复多次，整数给出的是重复次数.")])]),_._v(" "),t("tr",[t("td",[_._v("SOUNDEX(字符表达式)")]),_._v(" "),t("td",[_._v("返回字符表达式所对应的4个字符的代码。")])]),_._v(" "),t("tr",[t("td",[_._v("NCHAR(整型表达式)")]),_._v(" "),t("td",[_._v("返回Unicode的字符。")])]),_._v(" "),t("tr",[t("td",[_._v("UNICODE(字符表达式)")]),_._v(" "),t("td",[_._v("返回字符表达式最左侧字符的Unicode代码。")])]),_._v(" "),t("tr",[t("td",[_._v("STUFF(字符表达式,start,length,字符表达式2)")]),_._v(" "),t("td",[_._v("字符表达式1中从start开始的length个字符换成字符表达式2。")])]),_._v(" "),t("tr",[t("td",[_._v("CHARINDEX(字符表达式1,字符表达式2,[开始位置])")]),_._v(" "),t("td",[_._v("返回字符表达式1在字符表达式2的开始位置，可以从所给的“开始位置”进行查找， 如果没指定开始位置，或者指定为负数或0，则默认从字符表达2的开始位置查找。")])])])]),_._v(" "),t("p",[_._v("(4).数学函数")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("数学函数")]),_._v(" "),t("th",[_._v("功能")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("ABS(数值表达式)")]),_._v(" "),t("td",[_._v("返回表达式的绝对值（正值）。")])]),_._v(" "),t("tr",[t("td",[_._v("ACOS(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式反余弦值（单位为弧度）。")])]),_._v(" "),t("tr",[t("td",[_._v("ASIN(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式反正弦值（单位为弧度）。")])]),_._v(" "),t("tr",[t("td",[_._v("ATAN(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式反正切值（单位为弧度）。")])]),_._v(" "),t("tr",[t("td",[_._v("ATAN2(浮点表达式1,浮点表达式2)")]),_._v(" "),t("td",[_._v("返回以弧度为单位的角度值，此值的反正切值在所给的浮点表达式1和浮点表达式2之间。")])]),_._v(" "),t("tr",[t("td",[_._v("COS(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式三角余弦值。")])]),_._v(" "),t("tr",[t("td",[_._v("COT(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式三角余切值。")])]),_._v(" "),t("tr",[t("td",[_._v("CEILIGN(数值表达式)")]),_._v(" "),t("td",[_._v("返回大于或等于数值表达式的最小整数。")])]),_._v(" "),t("tr",[t("td",[_._v("DEGREES(数值表达式)")]),_._v(" "),t("td",[_._v("将弧度转换为度。")])]),_._v(" "),t("tr",[t("td",[_._v("EXP(浮点表达式)")]),_._v(" "),t("td",[_._v("返回数值的指数形式。")])]),_._v(" "),t("tr",[t("td",[_._v("FLOOR(数值表达式)")]),_._v(" "),t("td",[_._v("返回大于或等于数值表达式的最大整数，CEILIGN的反函数")])]),_._v(" "),t("tr",[t("td",[_._v("LOG(浮点表达式)")]),_._v(" "),t("td",[_._v("返回数值的自然对数值。")])]),_._v(" "),t("tr",[t("td",[_._v("LOG10(浮点表达式)")]),_._v(" "),t("td",[_._v("返回以10为底浮点数的对数。")])]),_._v(" "),t("tr",[t("td",[_._v("PI()")]),_._v(" "),t("td",[_._v("返回的值3.1415962653。")])]),_._v(" "),t("tr",[t("td",[_._v("POWER(数值表达式,幂)")]),_._v(" "),t("td",[_._v("返回数字表达式的指定次幂的值。")])]),_._v(" "),t("tr",[t("td",[_._v("RADIANS(数值表达式)")]),_._v(" "),t("td",[_._v("将度转换为弧度，DEGREES反函数。")])]),_._v(" "),t("tr",[t("td",[_._v("RAND(整数表达式)")]),_._v(" "),t("td",[_._v("返回一个0-1之间的随机十进制数。")])]),_._v(" "),t("tr",[t("td",[_._v("ROUND(数值表达式,整数表达式)")]),_._v(" "),t("td",[_._v("将设置表达式四舍五入为整型表达式所给的精度。")])]),_._v(" "),t("tr",[t("td",[_._v("SIGN(数值表达式)")]),_._v(" "),t("td",[_._v("符号函数，正数返回1，负数返回-1,0返回0。")])]),_._v(" "),t("tr",[t("td",[_._v("SQUARE(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式的平方。")])]),_._v(" "),t("tr",[t("td",[_._v("SIN(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式的三角正弦值（弧度为单位）。")])]),_._v(" "),t("tr",[t("td",[_._v("SQRT(浮点表达式)")]),_._v(" "),t("td",[_._v("返回一个浮点表达式的平方根。")])]),_._v(" "),t("tr",[t("td",[_._v("TAN(浮点表达式)")]),_._v(" "),t("td",[_._v("返回浮点表达式正切值（弧度为单位）。")])])])]),_._v(" "),t("p",[_._v("(5).集合函数\n集合函数也称为统计函数，它对一组进行计算并返回一个数值。聚合函数经常与SELECT语句的子句一起使用。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("聚合函数")]),_._v(" "),t("th",[_._v("功能")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("SUM([ALL|DISTINCT]expression)")]),_._v(" "),t("td",[_._v("计算一组数据的和")])]),_._v(" "),t("tr",[t("td",[_._v("MIN([ALL|DISTINCT]expression)")]),_._v(" "),t("td",[_._v("给出一组数据的最小值")])]),_._v(" "),t("tr",[t("td",[_._v("MAX([ALL|DISTINCT]expression)")]),_._v(" "),t("td",[_._v("给出一组数据的最大值")])]),_._v(" "),t("tr",[t("td",[_._v("COUNT([ALL|DISTINCT]expression|*)")]),_._v(" "),t("td",[_._v("计算总行数。COUNT(*)返回行数，包括含有空值的行，不能与DISTINCT一起使用")])]),_._v(" "),t("tr",[t("td",[_._v("CHECKSUM(*|expression[,...n])")]),_._v(" "),t("td",[_._v("对一组数值的和进行校验，可探测表的变化")])]),_._v(" "),t("tr",[t("td",[_._v("BINARY_CHECKSUM(*|expression[,...n])")]),_._v(" "),t("td",[_._v("对二进制的和进行校验，可探测表的变化")])]),_._v(" "),t("tr",[t("td",[_._v("AVG([ALL|DISTINCT]expression)")]),_._v(" "),t("td",[_._v("计算一组值的平均值")])])])])])},[],!1,null,null,null);v.default=d.exports}}]);