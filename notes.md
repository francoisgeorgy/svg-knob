## Other knob libs:

- https://github.com/padenot/knob.js
- https://github.com/g200kg/webaudio-controls
- https://www.g200kg.com/renoid/
- https://github.com/ryoyakawai/webaudio-slider
https://github.com/naikus/svg-gauge
https://github.com/denilsonsa/html5-knob
https://github.com/createbang/svg-dial


### knobs images

- JKnobMan/WebKnobMan
    - https://www.g200kg.com/jp/software/knobman.html
    - https://www.g200kg.com/en/webknobman/
    - https://www.g200kg.com/en/webknobman/gallery.php
    
    
----

# MISC

Add ES5 support: 

    yarn add --dev babel-loader babel-core
    yarn add --dev babel-preset-es2015
    
create `.babelrc` with:
    
    {
        "presets": ["es2015"]
    }

add in webpack config:

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }


