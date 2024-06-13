# Build an app with ASPNET Core and Angular

## SSL Certs
### Regenerate keys
1. dotnet dev-certs https --clean
2. IF NECESSARY: Remove your keys and pem from C:\Users\%username%\AppData\Roaming\ASP.NET\https
3. dotnet dev-certs https --trust
4. Client side cert: `cd client && npm run cert`

## Dotnet
- Install Entity Framework globally:
- `dotnet tool install --global dotnet-ef --version 8.0.6`
- Run a migration:
- `dotnet ef migrations add UserPasswordAdded`
- Update the database:
- `dotnet ef database update`
- Disable hotreload:
- `dotnet watch --no-hot-reload`

