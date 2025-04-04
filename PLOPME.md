# plop

Use degit and plop to scaffold a project.

* degit clones repo with plop file and plop assets into a folder
* cd into folder
* run plop script to copy files and update contents


```sh
# clone the repo
# into new folder new-thing
npx degit github:objectfoo/objectfoo-scaffold new-thing

# run the templates
# run the scaffold generator with positional input
npx plop scaffold 'some app name' 'some description'
```

