v = 63 
vmin = 0 
vmax = 127 
amin = 330 
amax = 30

a = ((v - vmin) / (vmax - vmin)) * (amax - amin) + amin

a = ((63) / (127-63)) * (30-330) + 330 = 63 / 64 * - 300 + 330 = 0.98 * -300 + 330 = -295.31 + 330 = 34.69

((v - config.value_min) / (config.value_max - config.value_min)) * (config.angle_max - config.angle_min) + config.angle_min

((63 - 0) / (127 - 0)) * (30 - 330) + 330 = 181.181102362
((63.5 - 0) / (127 - 0)) * (30 - 330) + 330 = 180

300 / 127 = 2.36220472441

2.36220472441 * 63.5 = 150

2.36220472441 * 63 = 148.818897638
 
