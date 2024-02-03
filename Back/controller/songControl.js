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
} catch (error) {

}
}
export const getAll = (req,res) => {}
export const getOne = (req,res) => {}
export const updateSong = (req,res) => {}
export const deleteSong = (req,res) => {}