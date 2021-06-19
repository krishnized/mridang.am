# Mantra format

Terms: tala/tal, avartan, anga/vibhag.

As natural as Mayapur Mridang / standard notation (see [wiki](https://en.wikipedia.org/wiki/Tala_(music))):

```
te re ke ta
```

Rupakatal:
```
Tin Tin Na
Dhi Na
Dhi Na
```

Dharamital:
```
Ka Dhi Te Dhi Te
Dha -
Ga Ti Te
Ti Te Ka/2
```

Keherwa:
```
dha ge na ti
na ka dhin na
```

### Extensions

Case can reflect loudness technique (laghu-sangitamrita), so should be accounted for, but generally don't matter. Mayapur Mridang upcases everything.

```
Te Re Khe Ta
```

_Optional_ bol can be marked as in js/regexp with ?:

```
te re? khe ta
```

Alternative bols/angas can be split with \| as in regexp:

```
te|dhe re ke ta
```

Pseudo class can define angas depending on speed:

```
te|dhe:fast re ke ta
```

Double-speed can be marked by joining bols:

```
tere tere khe ta
```

Or via brackets, as in laghu-sangitamrita:

```
(te re) (te re) khe ta
((te re te re)) (te re) khe ta
```

Angas can be shown as multiline:

```
te re khe ta
tere tere khe ta
```

or vertical separator
```
te re khe ta | tere tere khe ta
```
(can be confusing with alternative beat)
