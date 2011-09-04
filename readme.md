# JST for jQuery Templates

jquery-tmpl-jst: Pre-compiled jQuery Templates with Node.js

## Install with NPM
The best / easiest way to start using jquery-tmpl-jst is to install it
with npm, which looks something like this: `npm install jquery-tmpl-jst`

Be sure to use the `--global` option if you'd like to use the command
line tool.

## Basic usage

Incant jquery-tmpl-jst into your application with a require statement,
and jquery-tmpl-just will expose 2 functions: `build` and `process`

    var tmpl = require('jquery-tmpl-jst');

    // Builds a template string
    tmpl.build( 'path/to/my/templates', function( output ){

      // Creates a file called templates.js
      tmpl.process( output, 'path/to/output/dir' );
    },
    '_'); // Uses Underscore Templates, default is jQuery Templates

Build creates a string of executable javascript from a directory of
templates. It accepts the location of your templates and a callback
function.

Process creates a file called `templates.js` in the specified target
directory. It accepts a template string and a the target location.

## CLI usage

jquery-tmpl-jst also comes with a command line tool, which you can use
like this:

    $ tmpl path/to/templates [path/to/save] [template_style]

This creates the file `templates.js` to the target directory, compiled
using the template\_style: jQuery (default) or underscore (\_). If no
arguments are passed, the current path will be used instead.

## Using as a Cakefile

Since this is really meant to be used as a build tool, a Cakefile is
included as well, but keep in mind that _coffee-script must be included
as a dependency in order to use the Cakefile_.

To install Coffeescript, do `npm install coffee-script -g`.

Modify the Cakefile's `targetDir` and `templateDir` variables to point
to you desired build location and the location of your templates,
respectively. An underscore example Cakefile is also included, you must
rename this to just `Cakefile` for it to work with `cake`.

Run `cake build` or `cake watch` from the root of your project to
generate the compiled templates. `cake watch` will listen for changes in
your templates directory and run the build process on demand.

## JST Output

To start using the compiled templates, just include `templates.js`. Keep
in mind that these are just your templates, so you'll also need jQuery
and jQuery-tmpl in there too.

`templates.js` creates a global object called `window.JST`.

If you are using jQuery templates, the `JST` object includes a `templates`
object containing all of your precompiled templates. Helper methods for 
easier usage are attached directly to the `JST` object, which is structured
like this:

    JST = {
      <template_name>,
      <template_name_2>,
      ...
      templates: {
        <template_name>,
        <template_name_2>,
        ...
      }
    }

The helper methods are meant to make using templates as easy as
possible, so they are functions that take JSON data to be templated as
the only argument.

The functions themselves look like this:

      JST.<file_name> = function( data ){
        return $.tmpl( JST.template.<file_name>, data );
      }

And it's final usage would look something like this:

      var data = { title: "foobar" },
          compiled_template = window.JST.sample_template( my_data );

      $('body').html( compiled_template );
      
### Underscore

If you are using Underscore Templates, only the helper functions are made
(JST.templates.* is undefined).

      JST.<file_name> = function( data ) {
          return compiled_underscore_template_function(data)
      }

The usage is identical to the jQuery version.

    var data = { title: "foobar" },
        compiled_template = window.JST.sample_template( my_data );

    $('body').html( compiled_template );

## Multiple Named Templates from a single file

Add as many sub-templates as you want to a single JST file by writing a
c-style comment with the sub-template name.

    multiple_templates.JST
    ---
    <hi>Nothing to see here</h1>

    /* foo */
    <h2>{foo}</h2>
    <p>Check out this other awesome template<p>

This file will product 2 templates (and 2 corresponding helper
functions):

    JST = {
      multiple_templates,
      multiple_templates_foo,
      templates: {
        multiple_templates
        multiple_templates_foo
      }
    }


## Contributing

This is a need-based project, so I only wrote it to account for my
needs as of right now.

If you've got any suggestestions, opinions, optimizations or fixes,
please fork and pull request to contribute.

Everything original is MIT, everything else honors whatever license it
was written under.
