# svg-knob

A flexible and customizable knob for your web applications.

## Usage

    .knob {
        width: 100px;
    }

    <svg class="knob" id="knob"></svg>

### Without ES6 module support:

    <script src="dist/svg-knob.min.js"></script>
    <script>
        var Knob = svgKnob.default;
        var k = new Knob('#knob', { /* config... */ });   
    </script>


### With ES6 module support:

    <script type="module">
        import Knob from './svg-knob.js';
        const k = new Knob('#knob', { /* config... */ });        
    </script>

## Options

TODO...

## Built With

TODO...

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

