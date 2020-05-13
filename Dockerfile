FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq
WORKDIR /src
COPY ["SurveyIt.Web/SurveyIt.Web.csproj", "SurveyIt.Web/"]
RUN dotnet restore "SurveyIt.Web/SurveyIt.Web.csproj"
COPY . .
WORKDIR "/src/SurveyIt.Web"
RUN dotnet build "SurveyIt.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SurveyIt.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SurveyIt.Web.dll"]