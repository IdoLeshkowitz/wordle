import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";

const users = [
    {id: 1, name: 'John Doe', password: '1234', userName : 'JohnDoe'},
];
const words = ['hello', 'world', 'foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud'];
const app = express();
app.listen(3004);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    res.send('Hello World!');
});
app.route('/users')
    .get((req, res) => {
        res.send(users);
    })
    .post((req, res) => {
        const user = req.body;
        users.push(user);
        res.send(user);
    });

app.route('/auth')
    .post((req, res) => {
        const providedUser = req.body;
        const providedUserName : string = providedUser?.userName;
        const providedPassword : string = providedUser?.password;
        if (!providedUserName || !providedPassword) {
            return res.status(401).send('bad request');
        }
        const user = users.find(user => user.userName === providedUserName);
        if (!user) {
            return res.status(401).send('user name doesnt exist');
        }
        if (user.password !== providedPassword) {
            res.status(401).send('wrong password');
        }
        return res.send(user);

    });
//error handling

app.route('/random-word')
    .post((req, res) => {
        return res.send(words[Math.floor(Math.random() * words.length)]);
    });
export default app;
