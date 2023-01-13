# README

* author:
- JP

* Ruby version
3.0.0

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

## React

- get React/DOM
```bash
./bin/importmap pin react react-dom
yarn add react react-dom node-uuid
```
- get esbuild and webpack on existing project
```bash
./bin/bundle add jsbundling-rails
./bin/rails javascript:install:[esbuild|rollup|webpack]
```

- get react
```bash
./bin/rails webpacker:install:react
```


* esbuild
run `yarn build --watch`. remember to run esbuild with `--loader:.js=jsx` option.

### Legacy
This is a React application! Make sure React is installed
```bash
bundle install
bundle exec rake webpacker:install
bundle exec rake webpacker:install:react

yarn add antd react-router-dom
```
* versions
```json
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.6.2"
"@rails/webpacker": "4.3.0"
```
### FAQ
- Complaints about webpacker? [Possible answer](https://github.com/reactjs/react-rails/issues/997)
    Tips: make your nodeJS compatible with webpacker

## Database
### PostgreSQL
Populate the database with dummy data entries
```bash
rake bootstrap.rake
```

