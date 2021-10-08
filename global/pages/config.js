const files = hotRequire.context('./modules', true, /\.js$/)
const modules = []
files.keys().forEach(key => {
    const item = files(key)
    modules.push(...item)
})
module.exports = modules