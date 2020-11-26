module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Ремонт и строительство под ключ | remont-project'
                return args
            })
    }
}