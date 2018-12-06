# JavaScript Clock Intervals

Create a webpage that displays a clock.

![https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif](https://media.giphy.com/media/l0MYOUI5XfRk4LLWM/giphy.gif)

You can write some HTML, or you can start with a blank page.

Your display should have an hour, minute and seconds display:

```
12:23:23
```

### Note:
For the first iteration, your clock *does not have to display the real time*.
It can start at `0:00:00` and increment up from there. At midnight (`23:59:59`) it can reset to zero.
How do yout test it besides waiting 24 hours? Perhaps the time can be stored in a global variable you can change from the dev console.

## Further
Create a clock that displays a more accurate time:
```
12:23:43:129
```

## Further
Create a clock that displays AM and PM. (12 vs 24)

## Further: Show Actual Time
(You can try this or move on to the next step if you want)
Use JavaScripts `Date` objects to display the actual
time.

```
var now = new Date();
```

Get `now` by declaring a new Date object. Investigate
what useful functions the Date object has attached to it.

## Further: Create an analog clock

Write CSS to have the clock face, second, minute, hour
hands all display correctly on top of each other. Make
sure the red second hand displays on top of the minute
and hour hand. (Try changing the order the div elements
are written in the HTML)

Create intervals in the JavaScript file to make the
clocks tick.

Use CSS transform rotation to rotate the hands of the
clock.

```css
#myElement {
  transform: rotate(45deg);
}
```

Change CSS values in JavaScript by getting reference
to them through the DOM and setting a new value to
their CSS properties:

```js
var degrees = 45;

var el = document.getElementById("myElement");
el.style.transform = "rotate(" + degrees + "deg)";
```

It would be useful to define functions that convert
seconds, minutes and hours to how many degrees the
hand should be rotated around the clock!

```js
secondRotation(0); // returns 0
secondRotation(59); // returns (59 / 60) * 360

hourRotation(12); // returns 0
hourRotation(5); // returns (5 / 12) * 360
```

## Further: Show Actual Time
Use JavaScripts `Date` objects to display the actual
time.

```
var now = new Date();
```

Get `now` by declaring a new Date object. Investigate
what useful functions the Date object has attached to it.

## Further: Time zones
Create several clocks, each running in a different time zone.

## Further: Interplanetary Time
Create clocks that run on mars, venus or jupiter time. Show the date as well. 

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

