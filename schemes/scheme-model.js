const db = require('../data/connect');

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where('id', id)
}

function findSteps(id) {
    return db('schemes')
    .select('steps.instructions')
    .join('steps', 'schemes.id', '=', 'steps.scheme_id')
    .where('scheme_id', id);
}

function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id');
}

function addStep(step, id) { // STRETCH
    return db('steps')
    .insert({ ...step, scheme_id: id });
}

function update(changes, id) {
    return db('schemes')
    .where('id', id)
    .update(changes, '*');
}

function remove(id) {
    return db('schemes')
    .where('id', id)
    .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}