# README
* Author: JP

# Mac Dependencies
* Ruby v3.0.0
* Rail v7.1.4
* npm v9.2.0
* yarn v1.22.17

## Ruby
Get ruby by [frum](https://github.com/TaKO8Ki/frum)
```bash
brew install openssl # MUST get openssl first
brew install frum
eval "$(frum init)" # init frum
frum install 3.0.0
frum global 3.0.0
ruby -v # --> 3.0.0
```
A more detailed guid is [here](https://mac.install.guide/ruby/14.html)

## ESBuild
- Get esbuild
```bash
./bin/bundle add jsbundling-rails
./bin/rails javascript:install:esbuild
```
Run `yarn build --watch`. Remember to run esbuild with `--loader:.js=jsx` option (script defined in `package.json`)


## NPM & Yarn
Get [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) by [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## React
Get React/DOM
```bash
yarn add react react-dom node-uuid
```
* Versions
```json
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.6.2"
```

## Database
### Setup PostgreSQL
Version: postgresql@14

Install PostgreDB on your local environment
MACOS (error-prone):
```bash
brew install postgresql@14
```

Start PostgreSQL service
```bash
brew services start postgresql@14
```

### Database migration
```bash
./bin/rails db:reset # if db exists
./bin/rails db:migrate
```

### Populate the database with dummy data entries
```bash
./bin/rails db:seed
```

## Install Gems
```bash
bundle install
```

# Run Application on localhost
The app is currently set up to build application on change - feel free to modify code on the fly :)
## Workflow
- Build frontend on change: `yarn build --watch`
- Install any gems if have been change: `bundle install`
- Start application: `./bin/rails server -u puma` or `./bin/dev` (which triggers esbuild)
- Change code and refresh page, changes will reflect.


# Appendix
## Legacy Configuration
### Webpacker (deprecated)
"@rails/webpacker": "4.3.0"

```bash
bundle exec rake webpacker:install
bundle exec rake webpacker:install:react
yarn add antd react-router-dom
```
or
```bash
./bin/rails javascript:install:webpack
```

- Get react: `./bin/rails webpacker:install:react`
- Complaints about webpacker? [Possible answer](https://github.com/reactjs/react-rails/issues/997)
    Tips: make your nodeJS compatible with webpacker


