import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
// import cors from 'cors';
import sequelize from './config/connection.js';
import routes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5001;

// // ✅ Apply CORS correctly
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// };

// app.use(cors(corsOptions));

// ✅ Log every request to check headers
// app.use((_, res, next) => {
//   console.log('CORS Headers:', res.getHeaders());
//   next();
// });

// ✅ Handle preflight requests
// app.options('*', cors(corsOptions));

// ✅ Middleware
app.use(express.json());

// ✅ Serve static files
app.use(express.static('../client/dist'));

// ✅ Routes
app.use(routes);

// ✅ Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});