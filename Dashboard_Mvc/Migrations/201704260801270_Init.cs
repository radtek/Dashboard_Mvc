namespace Dashboard_Mvc.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "EmpNo", c => c.String());
            AddColumn("dbo.AspNetUsers", "Dept", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Dept");
            DropColumn("dbo.AspNetUsers", "EmpNo");
        }
    }
}
