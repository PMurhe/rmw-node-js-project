CREATE TABLE `billing_schema`.`product_intake` (
  `product_id` INT NOT NULL,
  `product_code` varchar(100) NOT NULL,
  `product_qty` INT NOT NULL,
  `product_price` DOUBLE NOT NULL,
  `created_date` DATE NOT NULL,
  `sell_date` DATE NOT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `product_code_idx` (`product_code` ASC),
  CONSTRAINT `product_code_fk`
    FOREIGN KEY (`product_code`)
    REFERENCES `billing_schema`.`master_product` (`product_code`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);