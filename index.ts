import net from 'net';

const html: string = `<h1>Hello</h1>`
const headers = [
    'HTTP/1.1 200 OK',
    'Content-Type: text/html',
    `Content-Length: ${html.length}`,
    'Date: Tue, 28 Sep 2021 05:28:42 GMT',
    `\r\n`,
    html
]

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        if (/GET/.test(data.toString())) {
            socket.write(headers.join('\r\n'));
            socket.end();
        }
        // console.log(data.toString());
    })
})
server.listen(8080, () => {
    console.log('server is running', server.address());
})