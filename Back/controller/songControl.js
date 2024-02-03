import Song from "../model/song.js"

export const saveSong = async (req,res) => {
try {
    if (!req.body.tittle,
        !req.body.artist,
        !req.body.album,
        !req.body.genre)
        {
            return res.status(400).send({
                message: 'Enter all required fields!'
            })
        }
        const NewSong = {
            tittle: req.body.tittle,
            artist: req.body.artist,
            album: req.body.album,
            genre: req.body.genre
        }

        const Song = await Song.create(NewSong);
        return res.status(201).send(Song);
} catch (error) {
    console.log(error.message);
    req.status(500).send({message: error.message})
}
}
export const getAll = async (req,res) => {
    try {
        const songs = await Song.find({});
        return res.status(200).json(songs)
    }catch(error){
        console.error('Error: ', error);
        res.status(500).json({error: 'Internal server error'});

    }
}
export const updateSong = async (req,res) => {
    try {
        const {id} = req.params;
        const {tittle, artist, album, genre } = req.body;

        const update = await Song.findByIdAndUpdate(id, {tittle, artist, album, genre}, {new: true});
        res.json(update);
        return res.status(200).send({message: 'Song Updated Successfully!'}) 
    } catch (error) {
        console.log(error.message);
        res.status(500).send({error: "Internal Server Error"});
    }
}
export const deleteSong = (req,res) => {}