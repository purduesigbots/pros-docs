.PHONY: cortex home v5 all clean

all: home v5 cortex

cortex:
	sphinx-build ./cortex/ ./build/cortex

home:
	sphinx-build ./home/ ./build/

v5:
	sphinx-build ./v5/ ./build/v5/

clean:
	-rm -rf ./build
