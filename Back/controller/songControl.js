export const saveSong = async (req,res) => {
try {
    if (!req.body.tittle,
        !req.body.artist,
        !req.body.album,
        !req.body.genre)
        {
            return res.status(400).send({
                message: 'Enter all requires fields!'
            })
        }
        const Song = {
            tittle: req.body.tittle,
            artist: req.body.artist,
            album: req.body.album,
            genre: req.body.genre
        }
} catch (error) {

}
}
export const getAll = (req,res) => {}
export const getOne = (req,res) => {}
export const updateSong = (req,res) => {}
export const deleteSong = (req,res) => {}