const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 })

let clients = []

server.on('connection', (socket) => {
    clients.push(socket)

    socket.on('message', (message) => {
        console.log(`Servidor recebeu um evento ${message}. Clients ${clients.length}`)


        clients.forEach(client => {
            if(client !== socket && client.readyState === WebSocket.OPEN){
                client.send(message)
            }
        })
    })

    socket.on('close', () => {
        clients = clients.filter(client => client !== socket)
        console.log('Cliente foi desconectado')
    })

    socket.on('error', (error) => {
        console.log(`Houve um erro na comunicação ${error}`)
    })
})

console.log("Servidor de Websocket foi inicilizado em: ws://localhost:8080")