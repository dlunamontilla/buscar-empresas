const urls = {
    a: "https://api.company-information.service.gov.uk/panregis",
    b: "https://api-sandbox.company-information.service.gov.uk"
}

const probar = (url) => {
    const headers = new Headers({
        "Authorization": 'Basic 330f1d3c-98bf-4322-bc55-1b8ccd6746ab'
    });

    let datos = fetch(url, {
        headers: headers
    });

    datos.then(data => {
        console.log( data, data.status )
    });
}

probar(urls.b);