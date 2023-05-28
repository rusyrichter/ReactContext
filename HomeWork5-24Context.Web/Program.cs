using System.Text.Json.Serialization;
namespace HomeWork5_24Context.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllersWithViews()

               .AddJsonOptions(opts =>
               {
                   var enumConverter = new JsonStringEnumConverter();
                   opts.JsonSerializerOptions.Converters.Add(enumConverter);
               });

            var app = builder.Build();

           
            if (!app.Environment.IsDevelopment())
            {
               
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();


            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}