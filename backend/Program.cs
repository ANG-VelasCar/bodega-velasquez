var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Backend de Bodega Velásquez");

app.Run();
