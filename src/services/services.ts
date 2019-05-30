
interface Thingys {
    data: string[];
}

export const getThingys = async (): Promise<Thingys> => {
    return await new Promise((res, rej) => {
        setTimeout(() => {

            res({
                data: [
                    "andy",
                    "bob",
                    "charlie"
                ]
            });
        }, 2000)
    });
}