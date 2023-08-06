const Text = require('./Text.js')

//testing to see if I am creating three characters
describe('Text', () => {
    it('should be the length of 3 characters', () => {
        expect(Text.text.length).toBeLessThanOrEqual(3)
    })
})