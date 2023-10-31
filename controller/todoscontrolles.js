const { todo } = require('../models')

class Controller {
    static async getalltodo(_, res, next) {
        try {
            const alltodo = await todo.findAll();
            res.status(200).json({ message: "success", data: alltodo });
        } catch (err) {
            console.log(err, '-->');
            next(err);
        }
    }


    static async gettododetail(req, res, next) {
        try {
            const{ id } = req.params
            const alltodo = await todo.findByPk(id)
           
            res.status(200).json(alltodo)
        } catch (err) {
            console.log(err, '-->')
            next(err)
        }
    }

    static async deletetodo(req, res, next) {
        const { id } = req.params
        
        todo.destroy({
          where: { id }
        })
        .then(() => {
            res.status(201).json({message :'movie deleted succesfully'})
        }).catch (err => next(err))
    }

static async createtodo(req, res, next) {
    try {
        const { nama, hari, kegiatan } = req.body; 

        const newTodo = await todo.create({
            nama,
            hari,
            kegiatan
        });
        res.status(201).json(newTodo); 
    } catch (err) {
        next(err);
    }
}

    

}

module.exports = Controller;
