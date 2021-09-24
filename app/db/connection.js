let mysql = require('promise-mysql');
const { post } = require('../routes');

/**
 * Get DB connection.
 * @returns connection
 */
async function connection() {
    return con = mysql.createConnection({
        host: 'mysql',
        user: 'root',
        password: 'root',
        port: 3306,
        database: 'tier_matrix'
    });
}

exports.init = async function init(themeId) {
    let con = await connection()
    let result = []

    result[0] = await con.query(`SELECT * FROM m_theme WHERE id = ?`, [themeId])
    result[1] = await con.query(`SELECT id, mcid, name FROM m_player WHERE is_deleted = 0`)
    result[2] = await con.query(`SELECT * FROM m_gender`)
    result[3] = await con.query(`SELECT * FROM m_age`)
    result[4] = await con.query(`SELECT * FROM m_area`)

    con.end();

    return result
}

exports.post = async function post(body, ip) {
    let con = await connection()

    // t_post
    let postSql = `INSERT INTO t_post SET ?`

    let postValues = {
        'theme': 1,
        'gender': body.gender,
        'age': body.age,
        'area': body.area,
        'device': 1,
        'like_player': body.like,
        'ip': ip,
        'hash': 'hash'
    }
    let result = await con.query(postSql, postValues)
    let postId = result.insertId
    console.log('postId : ' + postId)

    // t_matirx
    let matrixSql = `INSERT INTO t_matrix SET ?`

    let matrixValue = {
        'post': postId,
        'pos_0': body.pos0,
        'pos_1': body.pos1,
        'pos_2': body.pos2,
        'pos_3': body.pos3,
        'pos_4': body.pos4,
        'pos_5': body.pos5,
        'pos_6': body.pos6,
        'pos_7': body.pos7,
        'pos_8': body.pos8,
        'pos_9': body.pos9,
        'pos_10': body.pos10,
        'pos_11': body.pos11,
        'pos_12': body.pos12,
        'pos_13': body.pos13,
        'pos_14': body.pos14,
        'pos_15': body.pos15,
        'pos_16': body.pos16,
        'pos_17': body.pos17,
        'pos_18': body.pos18,
        'pos_19': body.pos19,
        'pos_20': body.pos20,
        'pos_21': body.pos21,
        'pos_22': body.pos22,
        'pos_23': body.pos23,
        'pos_24': body.pos24,
        'pos_25': body.pos25,
        'pos_26': body.pos26,
        'pos_27': body.pos27,
        'pos_28': body.pos28,
        'pos_29': body.pos29,
        'pos_30': body.pos30,
        'pos_31': body.pos31,
        'pos_32': body.pos32,
        'pos_33': body.pos33,
        'pos_34': body.pos34,
        'pos_35': body.pos35,
        'pos_36': body.pos36,
        'pos_37': body.pos37,
        'pos_38': body.pos38,
        'pos_39': body.pos39,
        'pos_40': body.pos40,
        'pos_41': body.pos41,
        'pos_42': body.pos42,
        'pos_43': body.pos43,
        'pos_44': body.pos44,
        'pos_45': body.pos45,
        'pos_46': body.pos46,
        'pos_47': body.pos47,
        'pos_48': body.pos48
    }

    await con.query(matrixSql, matrixValue)

    con.end();
}