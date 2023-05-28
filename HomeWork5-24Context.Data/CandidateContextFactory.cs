using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace HomeWork5_24Context.Data
{
    public class CandidateContextFactory : IDesignTimeDbContextFactory<CandidateDataContext>
    {
        public CandidateDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}HomeWork5-24Context.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new CandidateDataContext(config.GetConnectionString("ConStr"));
        }
    }
}