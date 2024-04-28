# Code Block Beautifier for Jira Chrome Extension

Code Wrapper is a Chrome extension that allows you to easily wrap selected text with `<code>` tags in different colors and automatically insert the wrapped text into the active input field or editable element.

## Features

- Wrap selected text with `<code>` tags in red, green, or blue color
- Automatically insert the wrapped text into the active input field or editable element
- Use keyboard shortcuts or context menu to trigger the wrapping functionality

## Installation

1. Clone or download this repository to your local machine.

2. Open Google Chrome and navigate to `chrome://extensions`.

3. Enable the "Developer mode" toggle switch in the top right corner.

4. Click on the "Load unpacked" button and select the directory where you cloned or downloaded this repository.

5. The Code Wrapper extension should now be installed and visible in your Chrome extensions list.

## Usage

### Using Keyboard Shortcuts

1. Select the text you want to wrap with `<code>` tags.

2. Press one of the following keyboard shortcuts to wrap the selected text:
  - Alt+Shift+R (Windows/Linux) or Command+Shift+R (Mac) for red color
  - Alt+Shift+G (Windows/Linux) or Command+Shift+G (Mac) for green color
  - Alt+Shift+B (Windows/Linux) or Command+Shift+B (Mac) for blue color

3. The selected text will be wrapped with `<code>` tags in the chosen color and automatically inserted into the active input field or editable element.

### Using Context Menu

1. Select the text you want to wrap with `<code>` tags.

2. Right-click on the selected text to open the context menu.

3. Click on the "Wrap Selected Text" option in the context menu.

4. The selected text will be wrapped with `<code>` tags in red color and automatically inserted into the active input field or editable element.

## Customization

If you want to customize the colors or add more color options, you can modify the `background.js` and `content.js` files:

- In `background.js`, update the `color` variable in the `chrome.commands.onCommand` listener to add or modify color options.
- In `content.js`, update the `wrapText` function to handle the new color options.

## Permissions

This extension requires the following permissions:

- `activeTab`: To access the currently active tab and send messages to the content script.
- `contextMenus`: To create and interact with the context menu.
- `scripting`: To execute scripts in the context of web pages.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgements

This extension was created as a sample project to demonstrate the usage of Chrome extension APIs and functionality.

## Contact

For any questions or inquiries, please contact [hello@myroslavtryhubets.com](mailto:hello@myroslavtryhubets.com).