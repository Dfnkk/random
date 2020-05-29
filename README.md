# A random module!

## Intallation

`npm i randomgener --save`

## Importing

```JavaScript
import { random } from 'random';
```

# Usage

```JavaScript
random.int(num);
```

return's a integer that is bettween 1 and num

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

