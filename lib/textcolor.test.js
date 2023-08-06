const Color = require('./textcolor')

describe('Color', () => {
    describe('textColor hexadecimal value', () =>{
        it('should be a hexidecimal code', () => {
            const hexVar = new Color('cec', '#1AFFa1', 'triangle', 'white')
            //This regex will test for a Hexadecimal value
            let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            expect(regex.test(hexVar.textColor)).toEqual(true)
        });
    });
    describe('shapeColor hexadecimal value', () =>{
        it('should be a hexidecimal code', () => {
            const hexVar = new Color('cec', '#1AFFa1', 'triangle', '#ff0000')
            //This regex will test for a Hexadecimal value
            let regex = new RegExp(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
            expect(regex.test(hexVar.shapeColor)).toEqual(true)
        });
    });
    describe('textColor keyword value', () => {
        it('should be a keyword', () => {
            const keyVar = new Color('cec', 'brown', 'triangle', 'white');
            expect(keyVar.render(keyVar.textColor)).toEqual('fill=brown')
        });
    });
    describe('shapeColor keyword value', () => {
        it('should be a keyword', () => {
            const keyVar = new Color('cec', 'brown', 'triangle', 'white');
            expect(keyVar.render(keyVar.shapeColor)).toEqual('fill=white')
        });
    });
});
//Testing Hexidecimal: to make sure its actually a number
//Testing color keyword: to make sure its in the proper "syntax"