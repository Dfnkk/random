# A random module!

# NPM

[randomgener](https://www.npmjs.com/package/randomgener)

## Intallation

`npm i randomgener --save`

## Importing

```JavaScript
import { random } from 'randomgener';
```

# Usage

```JavaScript
random.int(max);
```

return's a integer that is between 1 and max including them

```JavaScript
random.gen();
```

return's male or female

```JavaScript
random.choice(array);
```

return's a random part of the array

```JavaScript
random.float3(max);
```

return a number to the thousanths less the max (possible to get a two digit if the thousanths is 0)

```JavaScript
random.will(array, whatyouwant);
```

return a part of the array though there is a higher change of getting `whatyouwant`;
`whatyouwant` is a length in the array that starts at 1 instead of 0


```JavaScript
random.int0(max)
```

return's a integer number between 0 and max including them

