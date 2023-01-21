# buymeacoffee

buymeacoffee is a unofficial [buymeacoffee.com](https://www.buymeacoffee.com/) Widget react components library.

## Installation

To install the package, run the following command in your project directory:

```shell
npm install buymeacoffee
```
or

```shell
yarn add buymeacoffee
```


## Usage

Import the package into your React component:

`import WebsiteWidget from 'buymeacoffee'`

Use the package in your component:

`<WebsiteWidget name="kalanakt" color="FF5F5F" />`


## Props

buymeacoffee -> WebsiteWidget supports the following props:

- **name**: your buymeacoffee.com username (requred : yes)
- **color**: Website Widget color (default: `"#FF813F"`) (available: `"#BD5FFF"`  `"#5F7FFF"`  `"#40DCA5"`  `"#FF5F5F"`)

## Example

```jsx
import React from 'react';
import WebsiteWidget from 'buymeacoffee';

const ExampleComponent = () => {
    return (
        <WebsiteWidget
        name="kalanakt" 
        color="FF5F5F"
        />
    );
}

export default ExampleComponent;

```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

buymeacoffee is [MIT].

