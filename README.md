# synth-ui

Web UI components for building synthesizer and midi tools and applications

# knob

### Usage

    .knob {
        width: 100px;
    }

    <svg class="knob" id="knob"></svg>

    <script type="text/javascript">
        var k = new knob(document.getElementById('knob'), {});        
    </script>

# envelope

### Usage

## FIXME

- Do not draw cursor on back arc.

## TODO

- presets
- non-stop rotation, like a jog-dial
- split track true/false for zero-centered knobs
- back arc outside the "value" arc, also with own start and end angles.
- "smart" features
- make the label zone optional
- use speech API to annouce a change of the value