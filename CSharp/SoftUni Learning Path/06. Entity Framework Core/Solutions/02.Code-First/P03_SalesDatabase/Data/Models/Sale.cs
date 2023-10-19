﻿namespace P03_SalesDatabase.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.Text;


    public class Sale
    {
        public int SaleId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public int CustomerId { get; set; }

        public Customer Customer { get; set; }

        public int StoreId { get; set; }

        public Store Store { get; set; }
    }
}
