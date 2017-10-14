---
title: Libraries
---

_Since PROS CLI 2.6.0_


PROS supports the concept of adding libraries, allowing you to modularize and share code with others. PROS libraries can be any set of files, but are typically a collection of precompiled code with some header files.

{{< note title="Under Construction" >}}
This section of our documentation is still under construction. Atom documentation is cooming soon.
{{< /note >}}

## Using Libraries for PROS
For example, to set up [Boiler Robotics' libblrs](https://github.com/purduesigbots/libblrs), you can do the following from command line:
```
pros conduct add-depot --name libblrs --registrar github-releases --location purduesigbots/libblrs --no-configure
pros conduct download libmtrmgr
pros conduct add-lib <project-path> libmtrmgr
```



## Making Libraries for PROS using GitHub Releases
Make a template.mk file in the root directory of your project and paste the following template:

```
LIBNAME=libfbc
VERSION=1.1.0

# extra files (like header files)
TEMPLATEFILES = include/fbc_pid.h include/fbc.h
# basename of the source files that should be archived
TEMPLATEOBJS = fbc_pid fbc

TEMPLATE=$(ROOT)/$(LIBNAME)-template

.DEFAULT_GOAL: all

library: clean $(BINDIR) $(SUBDIRS) $(ASMOBJ) $(COBJ) $(CPPOBJ)
	$(MCUPREFIX)ar rvs $(BINDIR)/$(LIBNAME).a $(foreach f,$(TEMPLATEOBJS),$(BINDIR)/$(f).o)
	mkdir -p $(TEMPLATE) $(TEMPLATE)/firmware $(addprefix $(TEMPLATE)/, $(dir $(TEMPLATEFILES)))
	cp $(BINDIR)/$(LIBNAME).a $(TEMPLATE)/firmware/$(LIBNAME).a
	$(foreach f,$(TEMPLATEFILES),cp $(f) $(TEMPLATE)/$(f);)
	pros conduct create-template $(LIBNAME) $(VERSION) $(TEMPLATE) --ignore project.pros --upgrade-files "firmware/$(LIBNAME).a $(TEMPLATEFILES)"
	@echo Need to zip $(TEMPLATE)
```

You should change `LIBNAME`, `VERSION`, `TEMPLATEFILES`, and `TEMPLATEOBJS` to fit your project.

In the project's Makefile, add the following line to line 14:

```
-include $(ROOT)/template.mk
```

Then to build the library, run `pros make library`. Next, you will need to zip the 
template directory. The zip file should not contain the `libfbc-template` directory
(that is, the root of the zip file should contain template.pros and all your 
other files). Next, you should [create a release on GitHub](https://help.github.com/articles/creating-releases/) and upload your template(s)
to the release. You can see Purdue SIGBots' repository at [purduesigbots/libblrs](https://github.com/purduesigbots/libblrs/releases).
