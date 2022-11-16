# django-jquery

## about this project
this is a project with a django app that uses jquery to practise writing tests in [jest](https://jestjs.io)
we are using two pacakages from the testing-library: [DOM testing library](https://testing-library.com/docs/dom-testing-library/intro/) and [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)
babel is used to support testing jquery in jest (checkout package.json)
it has bootstrap connected vid CND for aesthetics :sparkles:

## setup
1.create a virtual environment
```
python3 -m venv myvenv
```

2.install requirements
```
pip install -r requirements.txt
```

3.run migrations
```
python manage.py migrate
```

4.create a superuser
````
python manage.py createsuperuser
````

5.to runserver
````
python manage.py runserver
````
note you do not need to collectstatic

6.have a play with the ui
when the server is running go to `http://127.0.0.1:8000/` and have a play with the ui we will be testing

## testing setup
1.run npm install at project root to install jest
````
npm install
````

2.run the practise test from the command line
````
npm test
````
looks like one test passes and two are failing

3.install jest for vs-code (here)[https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest]

4.quit and restart vscode

5.run jest test in vscode
press `command shift p` to open picker
type `Jest: Start All Runners`
press return

6.see the fun ui in the test file
it will show the one of the test blocks is passing and the other two tests are failing

## Tasks
1. fix the failing test for #getText 'returns the string with given hex colour'

2. fix the failing test for #loadButtonActions 'hide button hides the welcome text'

3. add a test for #loadButtonActions 'unhide button shows the welcome text'

## DOM mocking
you will see that in the tests only the parts of the HTML template that are needed for the test are mocked. this is because we only need the essential parts, and removing the non-essential parts makes it easier to see what is being tested