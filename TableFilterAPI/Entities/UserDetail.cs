using System;

namespace TableFilterAPI.Entities
{
    public class UserDetail
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public int Age { get; set; }
        public string Address { get; set; }
        public string Department { get; set; }
        public string Subscription { get; set; }
        public string FeeStatus { get; set; }
        public string StartDate { get; set; }
        public string EndTime { get; set; }
    }
}