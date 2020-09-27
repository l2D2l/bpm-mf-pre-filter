const ErrorData = (db) => {

    const Collection = db.addCollection("error_codes");
    const Feedbacks = () => {

        Collection.insert({
            endpoint: "/feedbacks",
            method: "POST",
            code_header: 400,
            code: "XDIG0027",
            description:
            " No hemos podido registrar su feedback, verificar información.",
        });

        Collection.insert({
            endpoint: "/feedbacks",
            method: "POST",
            code_header: 500,
            code: "XDIG0028",
            description: "No hemos podido registrar su feedback, intente más tarde. ",
        });

        Collection.insert({
            endpoint: "/feedbacks",
            method: "POST",
            code_header: 500,
            code: "JA0003",
            description: "Ocurrió un error en el backend ",
        });

        Collection.insert({
            endpoint: "/feedbacks",
            method: "POST",
            code_header: 400,
            code: "JA0001",
            description: "Request inválido",
        });

    };

    return {
        init: () => {
            Feedbacks();
        },
    };
};

module.exports = ErrorData;