require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const genreRoutes = require('./routes/genreRoutes');
const directorRoutes = require('./routes/directorRoutes');
const producerRoutes = require('./routes/producerRoutes');
const typeRoutes = require('./routes/typeRoutes');
const mediaRoutes = require('./routes/mediaRoutes');


const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    /*useNewUrlParser: true,
    useUnifiedTopology: true*/
})
.then(() => console.log('Conectado a MongoDB Atlas'))
.catch(err => console.error('Error conectando a MongoDB Atlas:', err));

// Rutas
app.use('/genres', genreRoutes);
app.use('/director', directorRoutes);
app.use('/producer', producerRoutes);
app.use('/type', typeRoutes);
app.use('/media', mediaRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en linea en http://localhost:${port}`);
});
