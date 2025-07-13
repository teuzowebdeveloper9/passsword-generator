# React Native Strong Password Generator

This is a simple React Native application that generates strong, random passwords for users. It provides an easy-to-use interface to create, display, copy, and clear passwords, helping users improve their security by using complex passwords.

## Features

- Generate a strong password with a fixed length of 20 characters.
- Passwords include lowercase letters, uppercase letters, numbers, and special characters.
- Display the generated password prominently.
- Copy the generated password to the clipboard with a single tap.
- Clear the displayed password when no longer needed.

## How It Works

The core logic of the app is implemented in the `MainComponent`:

- **Password Generation:**  
  When the user presses the "Generate a strong password" button, the app runs the `passwordGenerator` function. This function creates a password by randomly selecting characters from a predefined character set that includes letters (both cases), digits, and special symbols. It loops 20 times to build a password string of length 20.

- **Displaying the Password:**  
  Once generated, the password is stored in the component's state using React's `useState` hook and displayed on the screen.

- **Copy to Clipboard:**  
  Next to the displayed password, there is a copy icon. Pressing it triggers the `copyToClipBoard` function, which copies the current password to the device clipboard using the `@react-native-clipboard/clipboard` library.

- **Clear Password:**  
  A clear button allows users to reset the password display, removing the current password from the screen.

## Technologies Used

- React Native for building the mobile UI.
- React hooks (`useState`) for state management.
- `@react-native-clipboard/clipboard` for clipboard functionality.
- `react-icons` for iconography (copy and trash icons).
- Custom stylesheets using React Native's `StyleSheet` API for consistent styling.

## Usage

1. Tap the "Generate a strong password" button to create a new password.
2. View the generated password displayed on the screen.
3. Tap the copy icon to copy the password to your clipboard.
4. Tap the clear button to remove the password from the display.
