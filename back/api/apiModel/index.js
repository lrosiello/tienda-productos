const { Client, Connection } = require("pg");
const fs = require("fs");
const connectionData = {
  user: "postgres",
  host: "mibase.com",
  database: "public",
  password: "pass",
  port: 5432,
};
exports.getInfo = async function (options) {
  let cesac = {};
  const client = new Client(connectionData);
  client.connect((err) => {
    if (err) {
      console.error("connection error", err.stack);
    } else {
      console.log("connected");
    }
  });
  try {
    await client
      .query(
        `SELECT * FROM tabla_info
      WHERE id_efector IN (${options}); `
      )
      .then((res) => {
        cesac = res.rows;
      })
      .then(() => {
        client.end();
        console.log("disconnected");
      });
  } catch (error) {
    console.log(error, "disconnected");
    client.end();
  }
  return cesac;
};