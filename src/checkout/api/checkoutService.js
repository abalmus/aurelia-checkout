let latency = 0;
let addresses = new Map();

export class CheckoutService {

    getAddress(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(addresses.get(id));
            }, latency);
        });
    }

    saveAddress(id, address) {
        return new Promise(resolve => {
            setTimeout(() => {
                let instance = address;

                addresses.set(id, instance);
                resolve(instance);
            }, latency);
        });
    }
}
