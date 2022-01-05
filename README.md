## React-Countingstar

> a component for slot count animation

You can install it at npm, yarn

```sh
npm install react-countingstar
```

```sh
yarn add react-countingstar
```

### Basic usage

```js
import { CountingStar } from 'react-countingstar';

function example () {
    return {
        <CountingStar
            cntNum={20040706}
            fontSize="4rem"
            time={6}
        />
    }
}
```

\* Be careful because the style can be destroyed by the discharge or overlapping css.

### Props

#### cntNum

A number to count

- type : number

#### fontSize

CountingStar text font-size

- type : number | [cssFontUnitType](https://gist.github.com/sunwoo0706/f5562efafa91f7d08d17e26341c850b2)

> if it is number, it'll be added "px"

#### time

CountingStar Animation Duration

- type : number