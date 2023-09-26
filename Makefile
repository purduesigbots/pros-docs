.PHONY: cortex home v5 all clean linkcheck quick

quick: home v5 cortex

all: clean home v5 cortex

cortex:
	sphinx-build ./cortex/ ./build/cortex

home:
	sphinx-build ./home/ ./build/
	mv ./build/_static/githubupdate.php ./build || true
	mv ./build/_static/pros-tux-b-b.png ./build || true
	mv ./build/_static/pros-tux-b.png ./build || true
	mv ./build/_static/pros-tux-fc-b.png ./build || true
	mv ./build/_static/pros-tux-fc.png ./build || true
	mv ./build/_static/pros-tux-w-w.png ./build || true
	mv ./build/_static/windows-updates.txt ./build || true

v5:
	git submodule init
	git submodule update --remote
	sphinx-build ./v5/ ./build/v5/
	cp -r pros-doxygen-docs/ ./build/v5/pros-4

clean:
	-rm -rf ./build

linkcheck:
	sphinx-build -b linkcheck ./cortex/ ./build/cortex
	sphinx-build -b linkcheck ./home/ ./build/
	sphinx-build -b linkcheck ./v5/ ./build/v5/
