SHELL := /bin/zsh
BACKEND := cd backend
ENV := source env/bin/activate
PY := $(ENV) && python3 manage.py
NAME ?= $(shell bash -c 'read -p "name: " name; echo $$name')


help:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

venv:
	python3.9 -m venv env && $(ENV) && python3 -m pip install --upgrade pip

req:
	$(ENV) && pip3 install -r requirements.txt

proj: 
	django-admin startproject config .
	
app:
	$(PY) && $(PY) startapp $(NAME)

run:
	$(PY) runserver 8000

shell: 
	$(PY) shell -i ipython

start:
	cd frontend && npm start

mig:
	$(PY) makemigrations

migm:
	$(PY) makemigrations --merge

rate:
	$(PY) migrate

super:
	$(PY) createsuperuser

static:
	$(PY) collectstatic

com:
	docker-compose build
	docker-compose up -d

down:
	docker-compose down

https:
	ngrok http 8000

http:
	ngrok http --scheme=http 8000 --host-header=localhost:8000

npm:
	@clear
	cd frontend && npm install $(NAME)

unpm:
	@clear
	cd frontend && npm uninstall $(NAME)

pip:
	@clear
	$(ENV) && pip install $(NAME)

upip:
	@clear
	$(ENV) && pip uninstall $(NAME)

intro:
	./manage.py graphql_schema --schema config.root_schema.schema --out schema.json
rb:
	git rebase $(NAME)

rby:
	git rebase Yaqub



nb:
	git checkout -b $(NAME)

rba:
	git rebase --abort

cont:
	git rebase --continue

y:
	git checkout Yaqub

d:
	git checkout DEV

out:
	git checkout $(NAME)
add:
	git add $(NAME)

pull:
	git pull origin DEV
