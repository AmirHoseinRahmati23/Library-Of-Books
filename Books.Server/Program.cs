
using Data;
using Microsoft.EntityFrameworkCore;

namespace Books.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            // Add services to the container
            builder.Services.AddControllers();
            builder.Services.AddDbContext<BooksDbContext>();

            #region Cors

            builder.Services.AddCors(options => {

                options.AddPolicy("All", policy => {
                    policy.AllowAnyOrigin().WithMethods(
                        HttpMethod.Get.Method,
                        HttpMethod.Put.Method,
                        HttpMethod.Post.Method,
                        HttpMethod.Delete.Method);
                    policy.AllowAnyHeader();
                    policy.AllowAnyMethod();
                });

            });
            #endregion

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();



            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseCors("All");
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
