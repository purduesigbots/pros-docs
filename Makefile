.PHONY: cortex home v5 all clean linkcheck

all: home v5 cortex

cortex:
	sphinx-build ./cortex/ ./build/cortex

home:
	sphinx-build ./home/ ./build/

v5:
	sphinx-build ./v5/ ./build/v5/

clean:
	-rm -rf ./build

linkcheck:
	sphinx-build -b linkcheck ./cortex/ ./build/cortex
	sphinx-build -b linkcheck ./home/ ./build/
	sphinx-build -b linkcheck ./v5/ ./build/v5/
