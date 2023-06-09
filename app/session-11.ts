// Generic
function func1(val: any) : any {
    return val;
}

function func2<T>(val: T) : T {
    return val;
}

interface documentCord {
    docX: string,
    docY: string,
    fixed: boolean
}
func2<documentCord>({docX: '145', docY: '540', fixed: false});

function func3<T>(prods: T[]): T {
    console.log(prods.length);
    const targetIndex = 2;
    return prods[targetIndex];
}

const getSearchTwo = () => {}
const getSearchTwo2 = <T>(prods: T[]):  T => {
    console.log(prods.length);
    const targetIndex = 2;
    return prods[targetIndex];
}

function func4<T, U>(varX: T, varY: U): object {
    return {varX, varY};
}

function func5<T, U extends string>(varX: T, varY: U): object {
    return {varX, varY};
}
func5(2, '5');
func5('5', 2) // error

interface Database {
    username: string,
    password: string,
    connection: string
}
function connectToDatabase<T, U extends Database>(query: string, databaseParams: Database): object {
    console.log(query + databaseParams);
    const response = 'xx';
    const status = 201;
    return {
        response,
        status
    }
}
connectToDatabase("SELECT * FROM USERS",  {username: "sample", password: "123", connection: "L2VPN"})