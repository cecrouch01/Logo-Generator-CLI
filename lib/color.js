const Logo = require('./Logo')
//Color class in uncessary. I still need the test for the regex
class Color extends Logo{
    render(data) {
        return `fill=${data}`
    }
}


module.exports = Color