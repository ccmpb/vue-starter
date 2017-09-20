const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const createRenderer = require('vue-server-renderer').createRenderer;
const Vue = require('vue');

const server = express();

server.use(helmet());
server.use(morgan('combined'));

const PORT = 3000;

const renderer = createRenderer({
    template: require('fs').readFileSync('./src/templates/index.template.html', 'utf-8')
});

server.get('*', (req, res) => {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: `<div>The visited URL is: {{ url }}</div>`
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res
                .status(500)
                .end('Internal Server Error')
            return
        }
        res.send(html);
    })
})

server.listen(PORT, function () {
    console.log('listening on port ' + PORT);
});