const db = require("./db");
const response = {status: 200, message: "OK"};

const getPerson = (_, id) => {
    if (id) {
        response.data = db.filter(item => item.id === id);
        return response;
    }
    response.data = db;
    return response;
};

const addPerson = bodyRequest => {
    // TODO: requiredFieldsIsExist()
    if (requiredFieldsIsExist(bodyRequest)) {
        const newId = "asdasd"; // TODO: generate ID;
        db.push({...bodyRequest, id: newId});
        response.status = 201;
        response.data = bodyRequest;
        return response;
    }
    response.status = 400;
    response.message = "Receive reqired fields!";
    return response;
};
const updatePerson = (bodyRequest, id) => {
    // TODO: findPerson()
    const person = findPerson(id); // return {index:number, data:Object}
    if (person) {
        if (requiredFieldsIsExist(bodyRequest)) {
            db[person.index] = {...person.data, id: db[person.index].id};
            response.data = person.data;
            return response;
        }
        response.status = 400;
        response.message = "Receive reqired fields!";
        return response;
    }
    response.status = 404;
    response.message = "ID isn't exist";
    return response;
};
const deletePerson = id => {
    const person = findPerson(id);
    if (id && person) {
        db.splice(person.index, 1);
        response.status = 204;
        response.message = "DELETED";
        return response;
    }

    response.status = 404;
    response.message = "ID isn't exist";
    return response;
};
module.exports = {
    GET: getPerson,
    POST: addPerson,
    PUT: updatePerson,
    DELETE: deletePerson,
};
