docker-build:
	docker build --tag=ephox/tinymce-docs .

docker-push:
	docker push ephox/tinymce-docs	

serve:
	_scripts/serve.sh

init:
	_scripts/init.sh

build:
	_scripts/build.sh
