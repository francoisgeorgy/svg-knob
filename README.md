# svg-knob

A flexible and customizable knob for your web applications.

Open the `anatomy.html` file to view a description of how the knob is constructed.

## Usage

Check the `demo.html` file for examples.

    .knob {
        width: 100px;
    }

    <svg class="knob" id="knob"></svg>

#### Without ES6 module support:

    <script src="dist/svg-knob.min.js"></script>
    <script>
        var Knob = svgKnob.default;
        var k = new Knob('#knob', { /* config... */ });   
    </script>

#### With ES6 module support:

    <script type="module">
        import Knob from './svg-knob.js';
        const k = new Knob('#knob', { /* config... */ });        
    </script>

### change the value:

    k.value = 42;
    
### listen to the change events:

    document.getElementById("slider").addEventListener("change", function(event) {
        let [knob_id, knob_value] = [event.target.id, event.detail];
    });    

## Options

    let defaults = {
        // User configurable properties. The colors are defined in the 'palettes', later on.

        label: false,
        rotation: CW,

        default_value: 0,
        initial_value: 0,
        value_min: 0.0,
        value_max: 100.0,
        value_resolution: 1,        // null means ignore

        // split knob:
        center_zero: false,
        center_value: null,         // if null, the value will be computed from the min and max in the init() method
        center_gap: 4,              // only used when center_zero=true; is the width of the gap between the left and right track around the zero value.

        // position:
        zero_at: 270.0,             // [deg] (polar) the 0 degree will be at 270 polar degrees (6 o'clock).
        angle_min: 30.0,            // [deg] Angle in knob coordinates (0 at 6 0'clock)
        angle_max: 330.0,           // [deg] Angle in knob coordinates (0 at 6 0'clock)

        // background disk:
        bg_radius: 32,
        bg_border_width: 1,

        // track background:
        track_bg_radius: 40,
        track_bg_width: 8,

        // track:
        track_radius: 40,
        track_width: 8,

        // cursor
        cursor_radius: 18,          // same unit as radius
        cursor_length: 10,
        cursor_width: 4,

        // appearance:
        palette: 'light',
        bg: false,
        track_bg: true,
        track: true,
        cursor: false,
        // CSS class names
        linecap: 'butt',                    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap
        value_text: true,
        value_position: HALF_HEIGHT + 8,    // empirical value: HALF_HEIGHT + config.font_size / 3
        format: v => v,                     // formatting of the displayed value
        font_family: 'sans-serif',
        font_size: 25,

        font_weight: 'bold',
        markers: 0,                         // number of markers; 0 or false to disable
        markers_radius: 40,
        markers_length: 8,
        markers_width: 2,

        class_bg: 'knob-bg',
        class_track_bg : 'knob-track-bg',
        class_track : 'knob-track',
        class_value : 'knob-value',
        class_cursor : 'knob-cursor',
        class_markers: 'knob-markers',

        // mouse wheel support:
        mouse_wheel_acceleration: 1,

        // callback function:
        onchange: null                      // provides an alternative to the 'change' event   
    };

    light : {
        bg_color: '#E0E0E0',
        bg_border_color: '#BDBDBD',
        track_bg_color: '#CFD8DC',
        track_color_init: '#64B5F6',
        track_color: '#42A5F5',
        cursor_color_init: '#64B5F6',
        cursor_color: '#42A5F5',
        markers_color: '#9E9E9E',
        font_color: '#424242',
    },
    light2 : {
        bg_color: '#B1DAEE',
        bg_border_color: '#569DC0',
        track_bg_color: '#B1DAEE',
        track_color_init: '#569DC0',
        track_color: '#1D6D93',
        cursor_color_init: '#569DC0',
        cursor_color: '#1D6D93',
        markers_color: '#3680A4',
        font_color: '#1D6D93',
    },
    dark: {
        bg_color: '#000000',
        bg_border_color: '#569DC0',
        track_bg_color: '#424242',
        track_color_init: '#FDD835',
        track_color: '#FFEC00',
        cursor_color_init: '#569DC0',
        cursor_color: '#FDD835',
        markers_color: '#3680A4',
        font_color: '#FFEA00',
    }


## TODO

- log scale
- predefined positions
- contextual menu


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

