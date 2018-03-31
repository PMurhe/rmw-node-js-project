CREATE TABLE `master_product` (
  `product_code` varchar(100) NOT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `base_price` double DEFAULT NULL,
  PRIMARY KEY (`product_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
