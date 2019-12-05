# README

This is a sample React + Rails Todo list app. To run this:

```
rails db:create
rails db:migrate
rails db:seed

cd todo-app && yarn install

overmind start -f Procfile.dev
```

To run on Heroku:

```
heroku run rake db:migrate db:seed --app HEROKU_APP
