const dav_props = {
    "companyId": "efa8a2c5-5dae-4577-9299-3e4c13d7b50c",
    "loginPolicyId": "5d85eb6f0bb5d8d7efedea8517b606e0",
    "preferencesPolicyId": "aa313518a2696bd10a6b4688c88dd365",
    "trxPolicyId": "c8b3d57bd87f4c88b9ff32341343d39b",
    "registrationPolicyId": "ac2efd2405df4a0514e2a817c9caa153",
    "apiKey": "561467daaa92b2a877f45ae3463c55af0b2656243489c1bab6d6c8259b3ef7f5b523df4327447d364854d0892fc400de3ad96a725f6f3cf48c8ea90b37ad80bf4b6428e793af5bfaaad8c3d17e5f6f4cb9f99d0da9eb5a49518863a0228c9df2cdf372c25d74290709927128f910873584f5c0c8a5465aa7190945eae546b8db"
}

async function getToken() {
    const url = "https://api.singularkey.com/v1/company/" + dav_props.companyId + "/sdkToken";
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "X-SK-API-KEY": dav_props.apiKey
        }
    });

    token = await response.json();
    console.log(token);
}

async function showWidget(policyId, successCallback, errorCallback, onCloseModal, parameters) {
    let widgetConfig = {
        config: {
            method: "runFlow",
            apiRoot: "https://api.singularkey.com/v1",
            accessToken: token.access_token,
            companyId: dav_props.companyId,
            policyId: policyId,
            parameters: parameters
        },
        useModal: true,
        successCallback,
        errorCallback,
        onCloseModal
    };

    singularkey.skRenderScreen(skWidget, widgetConfig);
}

