const fs = require('fs')
const events = require('events')

// Ch2.p38
class Watcher extends events.EventEmitter {
  constructor(watchDir, processedDir) {
    super()
    this.watchDir = watchDir
    this.processedDir = processedDir
  }

  // publishes 'process' when fs.watchFile is triggered
  watch() {
    fs.readdir(this.watchDir, (err, files) => {
      if (err) throw err
      for (const index in files) {
        this.emit('process', files[index])
      }
    })
  }

  start() {
    fs.watchFile(this.watchDir, () => {
      this.watch()
    })
  }
}

module.exports = Watcher

// subscriber:
/**
// watcher.on -- .on is inherited from EventEmitter
watch.on('process', (file) => {
  // implementation
})
 */