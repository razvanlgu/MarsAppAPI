import * as express from "express";
import {getAllRoverPhotos, getAllRovers, getRoverPhotos, getRoverPhotosWithCamera} from "./controller";

const app = express();
const port = 8000;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const router = express.Router();
router.get('/rovers', async (req, res) =>
    res.send(await getAllRovers()));
router.get('/rovers/photos', async (req, res) =>
        res.send(await getAllRoverPhotos()));
router.get('/rovers/:rover/photos/:camera', async (req, res) =>
        res.send(await getRoverPhotosWithCamera(req.params.rover, req.params.camera)))
router.get('/rovers/:rover/photos', async (req, res) =>
    res.send(await getRoverPhotos(req.params.rover)))

app.use('/', router);

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});