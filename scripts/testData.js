const fs = require('fs');



fs.writeFile('test.sql', createText(), function(err) {
    if (err) { throw err; }
    console.log('test.txtが作成されました');
});

function createText() {
    let result = ''
    let i = 0
    while (i != 1000) {

        //t_post
        let gender = createRand(0, 3)
        let age = createRand(0, 8)
        let area = createRand(0, 48)
        let like = createRand(0, 118)
        let device = createRand(0, 4)
        result += `INSERT INTO t_post(theme,gender,age,area,like_player,device,ip,hash) VALUES('1','${gender}','${age}','${area}','${like}','${device}','testIP','testHash');\r\n`

        // t_matirx
        let rands = createRands();

        let postSql = ''
        postSql += 'INSERT INTO t_matrix(post,'
        postSql += 'pos_0, '
        postSql += 'pos_1, '
        postSql += 'pos_2, '
        postSql += 'pos_3, '
        postSql += 'pos_4, '
        postSql += 'pos_5, '
        postSql += 'pos_6, '
        postSql += 'pos_7, '
        postSql += 'pos_8, '
        postSql += 'pos_9, '
        postSql += 'pos_10, '
        postSql += 'pos_11, '
        postSql += 'pos_12, '
        postSql += 'pos_13, '
        postSql += 'pos_14, '
        postSql += 'pos_15, '
        postSql += 'pos_16, '
        postSql += 'pos_17, '
        postSql += 'pos_18, '
        postSql += 'pos_19, '
        postSql += 'pos_20, '
        postSql += 'pos_21, '
        postSql += 'pos_22, '
        postSql += 'pos_23, '
        postSql += 'pos_24, '
        postSql += 'pos_25, '
        postSql += 'pos_26, '
        postSql += 'pos_27, '
        postSql += 'pos_28, '
        postSql += 'pos_29, '
        postSql += 'pos_30, '
        postSql += 'pos_31, '
        postSql += 'pos_32, '
        postSql += 'pos_33, '
        postSql += 'pos_34, '
        postSql += 'pos_35, '
        postSql += 'pos_36, '
        postSql += 'pos_37, '
        postSql += 'pos_38, '
        postSql += 'pos_39, '
        postSql += 'pos_40, '
        postSql += 'pos_41, '
        postSql += 'pos_42, '
        postSql += 'pos_43, '
        postSql += 'pos_44, '
        postSql += 'pos_45, '
        postSql += 'pos_46, '
        postSql += 'pos_47, '
        postSql += 'pos_48) '
        postSql += `VALUES(${i + 1}`

        for (j in rands) {
            postSql += `,'${rands[j]}'`
        }
        postSql += `);\r\n`
        result += postSql
        i++
    }

    return result
}

function createRand(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function createRands() {
    let rands = []

    while (rands.length != 49) {
        let rand = createRand(0, 118)
        if (!rands.includes(rand)) {
            rands.push(rand)
        }
    }

    return rands
}