import getHealthIndicator from '../healthIndicator';
test('helthTest', () => {
       expect(getHealthIndicator({name: 'Маг', health: 90})).toBe('healthy');
       expect(getHealthIndicator({name: 'Маг', health: 16})).toBe('wounded');
       expect(getHealthIndicator({name: 'Маг', health: 10})).toBe('critical');
});