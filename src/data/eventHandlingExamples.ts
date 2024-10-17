export const simpleOnClickExample: string = `
<button onClick={() => alert('Auto Destruct Activated!')}>
    Don't Click Me!
</button>
`;

export const onClickExampleWithHandlerTypeScript: string = `
const AutoDestruct: React.FC = () => {
    const handleDoomClick = (): void => {
        alert('Auto Destruct Activated!');
    }

    return (
        <button onClick={handleDoomClick}>
            Don't Click Me!
        </button>
    );
};

export default AutoDestruct;
`;

export const eventObjectTypes: { mouseEvent: string; keyboardEvent: string; changeEvent: string; formSubmitEvent: string; } = {
    mouseEvent: `// Mouse Event
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    // logic to execute when a button is clicked
};`,
    keyboardEvent: `// Keyboard Event
const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    // logic to execute a key is pressed
}`,
    changeEvent: `// Change Event
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
   // logic to execute when the value in an input field changes
}`,
    formSubmitEvent: `// Form Submit Event
const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    // logic to execute when a form is submitted
}`
}