set base=%cd%
cd src\Benday.YamlDemoApp.Api

dotnet ef migrations add InitialSetup

cd %base%