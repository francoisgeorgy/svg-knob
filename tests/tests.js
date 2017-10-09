import knob from './svg-knob.js';

document.addEventListener("DOMContentLoaded", function(event) {

    let knobs = {};

    knobs['k1'] = new knob(document.getElementById('knob1'), {});

    knobs['k2'] = new knob(document.getElementById('knob2'), {center_zero: true, value_min:-100, value_max:100});

    knobs['k3'] = new knob(document.getElementById('knob3'), {zero_at: 90});

    knobs['k4'] = new knob(document.getElementById('knob4'), {
        angle_min: 10,
        angle_max: 350,
        track_radius: 30,
        track_width: 16,
    });

    // example of change notification by callback function:
    let e5 = document.getElementById('knob5');
    knobs['k5'] = new knob(e5, {
        linecap: 'butt',
        onchange: v => document.getElementById('v5').innerHTML = v
    });

    // example of change notification by event:
    let e5b = document.getElementById('knob5b');
    knobs['k5b'] = new knob(e5b, {
        linecap: 'butt'
    });
    e5b.addEventListener("change", function(event) {
        document.getElementById('v5b').innerHTML = event.detail;
    });

    // set this settings as default
    knobs['k6'] = new knob(document.getElementById('knob6'), {
        bg: false,
        cursor: false,
        linecap: 'butt',
        track_bg_width: 20,
        track_width: 20,
        mouse_wheel_acceleration: 20
    });
    knobs['k7'] = new knob(document.getElementById('knob7'), {
        bg: false,
        track: false,
        cursor_radius: 30,          // same unit as radius
        cursor_length: 20,
        cursor_width: 10,
        linecap: 'butt',
        track_bg_width: 20,
        cursor_color: '#E98E25',
        mouse_wheel_acceleration: 1
    });
    knobs['k8'] = new knob(document.getElementById('knob8'), {
        bg: false,
        // back_color: 'transparent',
        // back_radius: 50,
        track_bg_radius: 48,
        track_bg_width: 2,
        // track_background: false,
        track: false,
        cursor_radius: 37,          // same unit as radius
        cursor_length: 0,
        cursor_width: 16,
        markers: 10,
        markers_radius: 30,          // same unit as radius
        markers_length: 14,
        markers_width: 1
    });
    knobs['k9'] = new knob(document.getElementById('knob9'), {});
    knobs['k10'] = new knob(document.getElementById('knob10'), {
        angle_min: 0,
        angle_max: 360,
        // background: true,
        bg_color: 'transparent',
        bg_radius: 48,
        bg_border_width: 2,
        track_bg: false,
        cursor: false,
        // track_bg_radius: 40,
        // track_bg_width: 1,
        linecap: 'butt',
        track_radius: 38,
        track_width: 14,
        initial_value: 42
        // track_background: false,
        // cursor_only: true,
        // cursor_radius: 15,          // same unit as radius
        // cursor_length: 30,
        // cursor_width: 10,

    });

    knobs['k11'] = new knob(document.getElementById('knob11'), {
        angle_min: 20,
        angle_max: 340,
        bg: false,
        // back_color: 'transparent',
        // back_radius: 48,
        // track_bg: false,
        // cursor: false,
        track_bg_radius: 45,
        track_bg_width: 6,
        linecap: 'butt',
        track_radius: 45,
        track_width: 6,
        initial_value: 42,
        // track_background: false,
        cursor_radius: 25,          // same unit as radius
        cursor_length: 23,
        cursor_width: 6
    });

    knobs['k12'] = new knob(document.getElementById('knob12'), {
        angle_min: 20,
        angle_max: 340,
        bg_color: 'transparent',
        bg_radius: 26,
        bg_border_width: 1,
        track_bg_radius: 30,
        track_bg_width: 2,
        // track_background: false,
        track: false,
        cursor_radius: 38,          // same unit as radius
        cursor_length: 10,
        cursor_width: 4,
        markers: 10,
        markers_radius: 36,          // same unit as radius
        markers_length: 8,
        markers_width: 2,
    });

    knobs['k13'] = new knob(document.getElementById('knob13'), {
        angle_min: 20,
        angle_max: 340,
        bg: false,
        // back_color: 'transparent',
        // back_radius: 48,
        // track_bg: false,
        // cursor: false,
        track_bg_radius: 45,
        track_bg_width: 6,
        linecap: 'butt',
        track_radius: 45,
        track_width: 6,
        initial_value: 42,
        // track_background: false,
        cursor_radius: 1,          // same unit as radius
        cursor_length: 47,
        cursor_width: 6,
        value_position: 112
    });

    knobs['k14'] = new knob(document.getElementById('knob14'), {
        angle_min: 20,
        angle_max: 340,
        bg: false,
        track_bg_radius: 45,
        track_bg_width: 6,
        linecap: 'butt',
        track_radius: 45,
        track_width: 6,
        initial_value: 42,
        // track_background: false,
        cursor_radius: 25,          // same unit as radius
        cursor_length: 23,
        cursor_width: 6,
        font_size: 20,
        format: v => v.toLocaleString(undefined, {style: 'currency', currency: 'EUR'})
    });

    knobs['k15'] = new knob(document.getElementById('knob15'), {
        angle_min: 45,
        angle_max: 315,
        bg_radius:30,
        bg_border_width: 4,
        markers: 6,                         // number of markers; 0 or false to disable
        markers_radius: 32,
        markers_length: 8,
        markers_width: 2,
        bg_border_color: '#999',
        markers_color: '#999',      // blend the markers with the bg border
        track_bg: false,
        track: false,
        cursor_radius: 32,          // same unit as radius
        cursor_length: 10,
        cursor_width: 6,
        // linecap: 'butt',
        initial_value: 42
    });

    knobs['k100'] = new knob(document.getElementById('knob100'), {
        bg: false,
        cursor: false,
        linecap: 'butt',
        track_bg_width: 20,
        track_width: 20,
        mouse_wheel_acceleration: 20,
        palette: 'dark'
    });

    knobs['k101'] = new knob(document.getElementById('knob101'), {
        palette: 'dark'
    });

    Object.getOwnPropertyNames(knobs).forEach(
        function(knob, index) {
            knobs[knob].value = 42;
        }
    );

    const value_elem = document.getElementById("value");
    const all_knobs = document.getElementsByClassName("knob");
    for (let i = 0; i < all_knobs.length; i++) {
        all_knobs[i].addEventListener("change", function(event) {
            // Event.target: a reference to the object that dispatched the event. It is different from event.currentTarget
            //               when the event handler is called during the bubbling or capturing phase of the event.
            value_elem.innerText = `#${event.target.id}: ${event.detail}`;
        });
    }

    var randomize_button = document.getElementById("randomize");
    randomize_button.addEventListener("click", function(event) {
        Object.getOwnPropertyNames(knobs).forEach(
            function(knob) {
                var v = 0;
                var m = Math.ceil(Math.random() * 100);
                var id = setInterval(frame, 15);
                function frame() {
                    if (v > m) {
                        clearInterval(id);
                    } else {
                        knobs[knob].value = v;
                        v++;
                    }
                }
            }
        );
    });

    document.getElementById('reconf2').onclick = function() {
        console.log('reconfigure #knob2');
/*
        k2.config = {
            center_zero: false
        };
*/
    };

});
