const mountainsRouter =  express.Router();
const mountainRangesRouter = express.Router();


const mountains = ['denali', 'olympus', 'kilimanjaro', 'matterhorn'];
const mountainRanges = ['alps', 'andes', 'himalayas', 'rockies'];

/*
Create two routers - mountainsRouter and mountainRangesRouter. Mount them at /mountains and /mountain-ranges, respectively.

Create a route handler with mountainsRouter to send back the mountains array in response to a GET /mountains request.

Create a route handler with mountainRangesRouter to send back the mountainRanges array in response to a GET /mountain-ranges request.
*/

app.use('/mountains', mountainsRouter);
app.use('/mountain-ranges', mountainRangesRouter);

mountainsRouter.get('/', (req, res, next) => {
  res.send(mountains)
})

mountainRangesRouter.get('/', (req, res, next) => {
  res.send(mountainRanges)
})



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});