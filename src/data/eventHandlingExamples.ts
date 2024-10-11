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

export const reduceExample: string = `
const planetExpressRevenue = [150, -23000, 30, -4000];

const totalAnnualNetIncome = planetExpressRevenue.reduce(
    (totalProfits, currentMissionPayment) => {
        return planetExpressRevenue + currentMissionPayment;
}, 0);
`