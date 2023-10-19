namespace P01_HospitalDatabase
{
    using Microsoft.EntityFrameworkCore;
    using P01_HospitalDatabase.Data;

    public static class StartUp
    {
        public static void Main()
        {
            var db = new HospitalContext();

            db.Database.Migrate();
        }
    }
}
