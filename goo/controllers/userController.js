const Pool = require('pg').Pool

const get = (req, res)=>{
    pool.query("SELECT * from public.user u left join public.user_login ul on u.id=ul.user_id", (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    });
    // res.send("Hello, Welcome to our Page");
}

const post = (req, res)=>{
    res.send("Hello, This was a post Request");
}
const pool = new Pool({
  user: 'postgress',
  host: 'localhost',
  database: 'goo',
  schema : 'public',
  password: 'Rahul@123',
  port: 5432,
})

module.exports = {
    get,
    post
}