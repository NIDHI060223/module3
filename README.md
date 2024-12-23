React Project: CreateList & Counter
This project contains two separate React applications within different folders: CreateList and Counter. Each application demonstrates unique functionality to enhance your understanding
of React concepts, such as rendering lists and managing state.

Folder 1: CreateList
Description
The CreateList application demonstrates the "React way" of rendering lists using the Array.map method. It dynamically renders a list of statements, each paired with a checkbox,
inside a Bootstrap-styled container.

Features
Dynamic List Rendering: Displays a list of predefined statements.
React Principles: Emphasizes best practices such as avoiding for loops and providing unique keys for each list item.
Checkbox Integration: Each list item is paired with a checkbox for interaction.
Code Explanation
App Component:
Imports the List component and renders it within a styled container.
Links Bootstrap and custom CSS for styling.
List Component:
Contains a hardcoded array of statements.
Uses Array.map to iterate through the array and render each statement dynamically.
Each list item is styled and paired with a checkbox.
Styling:
Custom CSS ensures proper alignment and background color (pink) for the container.
Additional classes, such as .checkbox-container, provide spacing and layout for the checkboxes.


Folder 2: Counter
Description
The Counter application is a simple, interactive tool to increment, decrement, or reset a number. It showcases React state management with the useState hook.

Features
Increment & Decrement: Buttons to increase or decrease the number displayed.
Reset Functionality: A button to reset the number to zero.
Bootstrap Styling: Uses Bootstrap for button styling and layout.
Code Explanation
App Component:
Imports the IncreDecre component and renders it.
Links Bootstrap and custom CSS for styling.
IncreDecre Component:
Manages the state of the number using the useState hook.
Provides buttons to:
Increment: Increases the number by 1.
Decrement: Decreases the number by 1.
Reset: Sets the number to zero.
Ensures a responsive and user-friendly interface with Bootstrap styling.
Styling:
Custom CSS for alignment and aesthetics.
Styled buttons using Bootstrap classes (btn-success, btn-danger, btn-warning).
