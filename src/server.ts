import express from 'express';
import cors from 'cors';


const users = [
    { id: 1, name: 'John Doe', password: '1234' },
    ];
const app = express();
app.listen(3004);
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello Ws!');
});
// app.route('/users')
//     //get user object with username and password check if exists in users array
//     //if exists return user object
//     //if not return error
//     .post((req, res) => {
//         const userToCheck = req.body;
//         const user = users.find(user => user.name === userToCheck.name);
//         if (user) {
//             res.status(200).send(user);
//         }
//         else {
//             res.status(404).send('user not found');
//         }
//     });

export default app;
