class ApiHelper{
    constructor(request){
        this.request = request;
    }

    async getData(){
       const responce = await this.request.get('https://jsonplaceholder.typicode.com/users');
       return responce;
    }
    
    async addData(data){
        const newResponce = await this.request.post('https://jsonplaceholder.typicode.com/users', {
        data: data
    });
    return newResponce;
    }

    async hybridTest(){
        const newResponce = await this.request.get('https://jsonplaceholder.typicode.com/users/1');
        return newResponce;
    }
}
module.exports = ApiHelper;