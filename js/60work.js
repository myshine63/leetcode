onmessage = msg => {
  setTimeout(() => {
    postMessage(msg.data)
  }, 1000)
}

