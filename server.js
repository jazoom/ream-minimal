const http = require('http')
const ream = require('ream')

const app = ream({
  dev: process.env.NODE_ENV !== 'production',
  html: { template: 'src/index.html' },
  entry: 'src/index.js'
});

console.log('> Starting...')
app.prepare()
  .then(() => {
    const server = http.createServer((req, res) => {
      app.getRequestHandler()(req, res)
    })

    server.listen(4000)
  })

app.on('ready', () => {
  ream.displayStats(app.stats)
  console.log(`> Open http://localhost:4000`)
})