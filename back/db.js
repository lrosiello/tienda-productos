const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'nombre_de_la_base_de_datos',
  user: 'nombre_de_usuario',
  password: 'contraseña',
});

// Ejemplo de consulta a la base de datos
pool.query('SELECT * FROM productos', (err, result) => {
  if (err) {
    console.error('Error al ejecutar la consulta:', err);
  } else {
    console.log('Resultado de la consulta:', result.rows);
  }
});

module.exports = pool;