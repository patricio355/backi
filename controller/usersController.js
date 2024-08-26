const db = require("../models/");

module.exports={
    //lista de equipos
    allusers: async (req,res) => {
        try {
        // en la variable data , traera todos los equipos que hay en la tabla EQUIPOS
		const data = await db.Users.findAll({
			
		});
        //esto es para mandar algun otro dato de utilidad en el json
        //aqui esta mandando la cantida d de equipos en count
		const count = data.length;

        // el res es para mandar el json como respuesta
		res.json({
			// count,
             
		     usuarios : data,
		});
        //controlador de errores
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: 'Error al obtener la lista de canchas.',
		});
	} 
       
    },

	createUser: async (req, res) => {
        try {
        
            // Obtener los datos de la nueva user desde la solicitud
            
            // Crear la nueva user en la base de datos
            const nuevoUser = await db.Users.create({
                
                nombre: req.body.nombre,
                edad: req.body.edad,
    
                // Agrega otros campos según la estructura de tu modelo user
            });

			
			 // recordar enviar mensaje al cliente
			res.status(201).json(nuevoUser);

    
        } catch (error) {
            console.log("no")
            console.error(error);
            res.status(500).json({ error: 'Error al crear el user.' });
        }
    }



}

    
