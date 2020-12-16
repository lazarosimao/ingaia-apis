start:stop
	docker-compose up

stop:
	docker-compose down

build:
	docker-compose build

run:stop
	docker-compose up --build

