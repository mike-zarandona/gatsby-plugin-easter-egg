# gatsby-plugin-easter-egg

<div style="font-size: 28px; margin-bottom: 0.5em;">💜🔌🐰🥚</div>

A Gatsby plugin that easily adds a hidden key combination which reveals hidden fun[ctionality]

## Installation

Install with npm:

```bash
npm install --save gatsby-plugin-easter-egg
```

Install with yarn:

```bash
yarn add gatsby-plugin-easter-egg
```

## Configuration

After installing `gatsby-plugin-easter-egg`, add it to `gatsby-config.js`:

```js
module.exports = {
  plugins: [
    // ...
    `gatsby-plugin-easter-egg`
  ]
};
```

### Options

`gatsby-plugin-easter-egg` exposes a few options which can be used to customize and test the plugin.

| Option         | Default                                           | Description                                                                                                                                  |
| :------------- | :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------- |
| **`sequence`** | `up up down down left right left right b a enter` | Defaults to the [Konami Code](), can be set to anything. See [documentation](https://craig.is/killing/mice) for more key capture information |
| **`debug`**    | `false`                                           | Displays console debug information, and exposes the `secret` function on the `Window`                                                        |

```js
module.exports = {
  plugins: [
    // ...
    {
      resolve: `gatsby-plugin-easter-egg`,
      options: {
        sequence: `a s d f`,
        debug: true
      }
    }
  ]
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/#)
