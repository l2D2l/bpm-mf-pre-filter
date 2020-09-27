const Faker = require('faker');

// Functions
const Generator = ({ query, detailsSize: { min, max } }, db) => {

    const ErrorRepository = require('../repositories/perfil')(db, 'error_codes');
    const Errors = ErrorRepository.get(query);
    const { code, code_header, description } = Faker.random.arrayElement(Errors);

    return {
        code,
        code_header,
        description,
        errorType: Faker.random.arrayElement(['Functional']),
        exceptionDetails: Array.from({
            length: Faker.random.number({ min, max: max || min }),
        }).map(() => ({
            component: Faker.random.word(),
            endpoint: Faker.internet.url(),
        })),
    };
};

// Wrapper
const ErrorService = {
    generator: (args, db) => Generator(args, db),
};

module.exports = ErrorService;

// const faker = require('faker');
// const router = Router();
// const loki = require('lokijs');

// router.get('/users/:quantity', (req, res) => {
//     const quantity = +req.params.quantity;

//     const db = new loki('loki.json');
//     var users = db.addCollection('users', { indices: ['email', 'name', 'age'] });

//     for (let i = 0; i < quantity; i++) {
//         var randomName = faker.name.firstName();
//         var randomEmail = faker.internet.email();
//         var randomAge = faker.random.number({min: 18, max: 100});
//         users.insert([{ name: randomName, email: randomEmail, age: randomAge }]);
//     }

//     res.json(db.getCollection('users').data);
// });

// export default router;