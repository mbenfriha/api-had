class Had {

    constructor(name,text, classification) {
        this.id=0;
        this.name=name;
        this.classification=classification;
        this.text=text;
    }

    getAddHad() {
        let sql = `INSERT INTO HAD(name, text) \
                   VALUES('${this.name}',${this.text}, ${this.classification})`;
        return sql;
    }

    static getHadById(id) {
        let sql = `SELECT * FROM HAD WHERE ID = ${id}`;
        return sql;
    }
    static searchHad(search) {
        let sql = `SELECT * FROM HAD WHERE name LIKE '%${search}%' or text LIKE '%${search}%'`;
        return sql;
    }

    static deleteHadById(id) {
        let sql = `DELETE FROM PRODUCTS WHERE ID = ${id}`;
        return sql;
    }

    static getAllHad() {
        let sql = `SELECT * FROM Had`;
        return sql;
    }
}

export default Had;
