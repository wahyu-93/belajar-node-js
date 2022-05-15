const { devNull } = require('os')
const db = require('../config')

exports.getHero = (response) => {
    // query data
    const sql = "SELECT * FROM hero"

    // execute data
    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        
        // response data
        // const data = JSON.parse(JSON.stringify(result))
        // console.log(data)
        // response.send(result)

        const heroes = {
            title: "List Heroes",
            data: result
        }

        console.log(heroes)
        response.render('index', { heroes })
        response.end()
    })
}

exports.getHeroById = (id, response) => {
    const sql = `select * from hero where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        
        // response data
        // const data = JSON.parse(JSON.stringify(result))
        // console.log(data)
        // response.send(result)

        const hero = {
            title: "Data Hero By ID",
            data: result
        }

        console.log(hero)
        response.render('heroDetail', { hero })
        response.end()
    })
}

exports.updateHeroById = (data, response) => {
    const id = data.id
    const name = data.name
    const role = data.role
    console.log(id)
    const sql = `update hero set name = '${name}', role = '${role}' where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        response.redirect('/hero')
        response.end()
    })
}

exports.addHero = (data, response) => {
    const name = data.name
    const role = data.role

    const sql = `insert into hero (id, name, role) values (NULL, '${name}','${role}')`

    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        response.redirect('/hero')
        response.end()
    })
}

exports.deleteHero = (id, response) => {
    const sql = `delete from hero where id = '${id}'`

    db.query(sql, (error, result) => {
        if(error) return console.log('error: ', error)
        response.redirect('/hero')
        response.end()
    })
}