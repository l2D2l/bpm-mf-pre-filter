const faker = require('faker');
// const router = Router();
const loki = require('lokijs');

const getTask = (req, res) => {
    // const quantity = +req.params.quantity;

    const db = new loki('loki.json');
    var users = db.addCollection('users', 
    { indices: 
        [
            'name', 
            'firstName', 
            'lastName',
            'gender',
            'maritalStatus',
            'streetName',
            'streetNumber',
            'documentNumber',
            'documentType',
        ] 
    });

    // for (let i = 0; i < quantity; i++) {

        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var name = firstName+' '+lastName;
        var gender = faker.random.arrayElement(['masculino','femenino'])
        var maritalStatus = faker.random.arrayElement(['soltero','casado','divorciado'])
        var streetName = faker.address.streetName();
        var address = faker.address.streetAddress();
        var streetNumber = faker.random.number({min: 100, max: 999}).toString();
        var documentNumber = faker.random.number({min: 10000000, max: 99999999}).toString();
        var documentType = faker.random.arrayElement(['Dni','Pasaporte'])

        users.insert({ 
            name, 
            firstName, 
            lastName,
            gender,
            maritalStatus,
            address,
            streetName,
            streetNumber,
            documentNumber,
            documentType
        });
    // }

    res.json(db.getCollection('users').data[0]);

    // res.send("HOLAAAAAA");
};
const getAccount = (req, res) => {
    // const quantity = +req.params.quantity;

    const db = new loki('loki.json');
    var users = db.addCollection('account', 
    { indices: 
        [   
            'code',
            'name', 
            'firstName', 
            'lastName',
            'email',
            'userImagePath',
            'phoneNumber',
            'storeCode',
            'storeDescription',
            'role',
            'channelCode',
            'channelDescription',
            'agencyCode',
            'agencyDescription',
            'leaderName',
            'leaderRole',
            'supervisorName',
            'supervisorRole',
            'businessUnitCode',
            'businessUnitDescription'
        
        ] 
    });

    // for (let i = 0; i < quantity; i++) {

        var code = faker.random.number({min: 10000, max: 99999}).toString();
        var firstName = faker.name.firstName();
        var lastName = faker.name.lastName();
        var name = firstName+' '+lastName;
        var email = faker.internet.email();
        var userImagePath = faker.image.avatar();
        var phoneNumber = faker.phone.phoneNumber();
        var storeCode = faker.random.number({min: 100, max: 999}).toString();
        var storeDescription = faker.name.jobDescriptor();
        var role = faker.name.jobTitle();
        var channelCode = faker.random.number({min: 100, max: 999}).toString();
        var channelDescription = faker.name.jobDescriptor();
        var agencyCode = faker.random.number({min: 100, max: 999}).toString();
        var agencyDescription = faker.name.jobDescriptor();
        var leaderName = faker.name.firstName()+' '+faker.name.lastName();
        var leaderRole = faker.name.jobTitle();
        var supervisorName = faker.name.firstName()+' '+faker.name.lastName();
        var supervisorRole = faker.name.jobTitle();
        var businessUnitCode = faker.random.number({min: 100, max: 999}).toString();
        var businessUnitDescription = faker.name.jobDescriptor();

        users.insert({ 
            code,
            name,
            firstName,
            lastName,
            email,
            userImagePath,
            phoneNumber,
            storeCode,
            storeDescription,
            role,
            channelCode,
            channelDescription,
            agencyCode,
            agencyDescription,
            leaderName,
            leaderRole,
            supervisorName,
            supervisorRole,
            businessUnitCode,
            businessUnitDescription
        });
    // }

    res.json(db.getCollection('account').data[0]);

    // res.send("HOLAAAAAA");
};

module.exports = {getTask, getAccount};
// export default router;