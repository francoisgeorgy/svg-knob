import knob from '../src/index.js';

document.addEventListener("DOMContentLoaded", function(event) {
    let k = new knob(document.getElementById('knob1'), {
        format: v => {
            switch (true) {
                case v < 1: return v;
                case v < 5: return v.toString() + "\nno filter";
                case v < 10: return v.toString() + "\na";
                case v < 20: return v.toString() + "\naab";
                case v < 30: return v.toString() + "\naabbc";
                case v < 40: return v.toString() + "\naabbccd";
                case v < 50: return v.toString() + "\naabbccdde";
                case v < 60: return v.toString() + "\naabbccddeef";
                case v < 70: return v.toString() + "\naabbccddeeffg";
                case v < 80: return v.toString() + "\naabbccddeeffggh";
                case v < 90: return v.toString() + "\naabbccddeeffgghh";
                default:
                    return v.toString() + "\naabbccddeeffgghhii";
            }
        }
    });
    k.enableDebug();
});
