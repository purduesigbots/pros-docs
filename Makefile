.PHONY: cortex home v5 all clean linkcheck quick

quick: home v5 cortex

all: clean home v5 cortex

cortex:
	sphinx-build ./cortex/ ./build/cortex

home:
	mkdir -p ./build
	sphinx-build ./home/ ./build/
	mv ./build/_static/githubupdate.php ./build || true
	mv ./build/_static/pros-tux-b-b.png ./build || true
	mv ./build/_static/pros-tux-b.png ./build || true
	mv ./build/_static/pros-tux-fc-b.png ./build || true
	mv ./build/_static/pros-tux-fc.png ./build || true
	mv ./build/_static/pros-tux-w-w.png ./build || true
	mv ./build/_static/windows-updates.txt ./build || true

v5:
	sphinx-build ./v5/ ./build/v5/

clean:
	-rm -rf ./build
	ls ./build || true

linkcheck:
	sphinx-build -b linkcheck ./cortex/ ./build/cortex
	sphinx-build -b linkcheck ./home/ ./build/
	sphinx-build -b linkcheck ./v5/ ./build/v5/
