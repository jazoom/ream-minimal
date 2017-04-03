const http = require('http')
const ream = require('ream')

const app = ream({
  dev: false
})

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