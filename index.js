
const renderSection = (data) => {
    const decodedData = decodeURI(data);
    const person = decrypt(decodedData);
    const main = `
    <div class="card-body">
        <h5 class="text-dark">Nombre y apellido</h5>
        <h4 class="mb-4" id="name">${person.nombre}</h4>
        <h5 class="text-dark">Documento</h5>
        <h4 class="mt-2 mb-3">${person.documento}</h4>
        <h5 class="dosis"> PRIMERA DOSIS </h5>
        <div class="row">
            <div class="col">
                <h5 class="p-1 mb-0">Vacuna</h5>
                <h5 class="pl-1 mb-4 font-weight-bold">${person.vacuna}</h5>
            </div>
            <div class="col">
                <h5 class="p-1 mb-0">Fecha</h5>
                <h5 class="pl-1 mb-4 font-weight-bold">${person.dosis[0]}</h5>
            </div>
        </div>
        <h5 class="dosis"> SEGUNDA DOSIS </h5>
        <div class="row">
            <div class="col">
                <h5 class="p-1 mb-0">Vacuna</h5>
                <h5 class="pl-1 mb-4 font-weight-bold">${person.vacuna}</h5>
            </div>
            <div class="col">
                <h5 class="p-1 mb-0">Fecha</h5>
                <h5 class="pl-1 mb-4 font-weight-bold">${person.dosis[1]}</h5>
            </div>
        </div>
    </div>
`;
    return main;
}

const decrypt = (data) => {
    try {
        var decrypted = CryptoJS.AES.decrypt(data, "Seamos libres");
        return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    } catch (e) {
        return {};
    }
}

const rootDiv = document.getElementById('root');
const QueryString = window.location.search;
const urlParams = new URLSearchParams(QueryString);
const personId = urlParams.get('id');
if (personId) {
    const section = renderSection(personId);
    rootDiv.innerHTML = section;
}