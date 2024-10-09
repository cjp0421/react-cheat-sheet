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

