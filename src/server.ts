import express, {Request, Response} from 'express';

const app = express();

app.use(express.json())

app.listen(3333, () => {
  console.log('Server on ✌')
});

app.get('/users', (req: Request, res:Response) => {
  return res.json({msg: 'hello world :D'});
})