const Logo = require('./Logo')

class Color extends Logo{
    render(data) {
        return `fill=${data}`
    }
}


module.exports = Color