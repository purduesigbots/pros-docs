# PROS Documentation

[![Build Status](https://dev.azure.com/purdue-acm-sigbots/Docs/_apis/build/status/purduesigbots.pros-docs?branchName=master)](https://dev.azure.com/purdue-acm-sigbots/Docs/_build/latest?definitionId=2&branchName=master)

This repository hosts the documentation for [PROS for V5](https://github.com/purduesigbots/pros3)
and [PROS for Cortex](https://github.com/purduesigbots/pros). These docs are hosted
at https://pros.cs.purdue.edu/.

## How are these docs built?

The PROS docs are built with [Sphinx](http://www.sphinx-doc.org/en/master/). 

A few Sphinx extensions are used as well:

* [Ablog](http://ablog.readthedocs.io/) - Used to generate the release notes blog posts
* [Sphinx-tabs](https://github.com/djungelorm/sphinx-tabs) - Used for the code tabs found
  in the API docs and tutorials. This is also modified from its original state, and that
  fork can be found at [this fork](https://github.com/purduesigbots/sphinx-tabs).

## I Just Want to Help
Great! Please help us. Choose one of the following that best suits your needs. 

#### Easy
If you want ot change a page or a couple words, it is simple. All you have to do is to edit a file and [Github's UI](https://help.github.com/en/articles/editing-files-in-another-users-repository) will take care of the rest of it! Then you have officially contributed to `pros-docs`! 

#### Medium
Here you will install a basic html version of `pros-docs` This is adequate for most people
To make this process easier. If you don't already have a basic understanding of how these work:       [git](https://rogerdudler.github.io/git-guide/), 
                  [github](https://github.com/firstcontributions/first-contributions), 
                  [sphinx](https://www.mageworx.com/blog/2016/05/sphinx-the-beginners-guide/), 
                  [python3](https://wiki.python.org/moin/BeginnersGuide), you should go check them out before you start.
 
 Clone the project, change the directory to `pros-docs`
 ```sh
git clone https://github.com/purduesigbots/pros-docs
cd pros-docs
```

The `sphinx_rtd_theme` and `sphinx-tabs` folders within the documentation are
[git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). As a result,
you need to initialize these submodules and pull them separately when updating the docs.

```sh
# Repeat this in both the sphinx_rtd_theme and sphinx-tabs directories
> git submodule init
> git submodule update
```

 Install These Dependancies:
* Python3
* Sphinx (pip package)
* Sphinx-tabs (pip package)
* Ablog (pip package)

We recommend working in a virtual environment, but the following 2 lines are optional
> python3 -m venv ./docs-venv
> . ./docs-venv/bin/activate

Whether or not you decide to use the python virtual environment install all of the dependencies for building the PROS Documentation, run:

```sh
pip3 install -r requirements.txt
```
Note: to get out of the virtual environment run `deactivate`

Once you have installed the requirements, building is very straightforward. Just
run `make` in the `pros-docs` directory.

Now, pull up a browser and open `pros-docs/build/index.html`

Great! Now you can edit the `.rst` files, make new files, and send a PR to change those files on the actual website.

#### Hard
Modifying the tabs theming

Modification of the tabs theming should be done within the [SIGBots fork of the tabs extension](https://github.com/purduesigbots/sphinx-tabs). Testing modifications to the
theming is often easier done from within the main docs repo; since the theming is just CSS
no compilation is required outside of the typical build process.

Modifying the general theming

Modifying the Read the Docs theme is a much more difficult process to get set up than the
tabs theming, but is very straightforward after the initial work.

Walk through the following steps to modify the `sphinx_rtd_theme` folder/repo
(Assuming WSL):

```
1. Install virtualenv: sudo pip install virtualenv.
2. Set up a virtual environment with: virtualenv.
3. Install ruby with: sudo apt-get install ruby-full. Just sudo apt-get install ruby won't work.
4. Install SASS: sudo gem install sass
5. Install Node.js: sudo apt-get install nodejs
6. Install npm: sudo apt-get install npm
7. Install Bower and Grunt: sudo npm install -g bower grunt-cli
8. Finalize installation with: sudo npm install
9. Symlink nodejs to node with: sudo ln -s /usr/bin/nodejs /usr/bin/node
10. Reinstall xdg-utils for some unknown reason with: sudo apt-get install --reinstall xdg-utils
11. Symlink xdg-open to the start command (only works with more recent versions of WSL I guess) with: sudo ln -s start xdg-open
12. Install x3m because StackOverflow said to and it worked: sudo apt-get install w3m
13. Configure xdg-settings with: xdg-settings set default-web-browser w3m.desktop
```

From there, you can start a build watch process and server by running `grunt` in
the `sphinx_rtd_theme` folder.

If you want to also build in a different folder (i.e. building in the `sphinx_rtd_theme`
folder of this repo as well as building our fork of the theme), then run
`sudo npm install` in that folder.
